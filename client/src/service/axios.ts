import axios from "axios";
import type { AuthResponse } from "../types";

const api = axios.create({
    //api
    baseURL:"http://localhost:5000/api",
    // cookie ile saklanan verileri her istekte api'a gönder
    withCredentials:true,
    // api a gönderielen verilerin tipi
    headers:{
        "Content-Type":"application/json",
    }
})

// her api isteğinden cevap gelince çalışıcak bir arayazılım
// eğer gelen cevap 401 unothorized ise yani access tokenın süresi dolduysa
// refresh endpointine istek atıp access tokenı yenile
// 401 hatası aldığı isteği tekrar gönder

api.interceptors.response.use(
    (res) => res, async (err) =>{
        // hatayı aldığımız api isteğini sakla
        const originalReq =err.config

        // eğer hatanın kodu 401 ise yani access tokenin süresi dolduysa
        if(err.response?.status === 401 && !originalReq._retry&& err.response?.data?.message === "Access token expired") {
            originalReq._retry = true

            // access tokeni yenile
            try {
                const res = await api.post<AuthResponse>("/auth/refresh") 
                console.log("access tokeni yeniledi", res)

                // yenilenen access token ile original isteği tekrara at
                return api(originalReq)
            }
            catch (refreshErr) {
                console.log("acces tokeni yenileme hatası" ,refreshErr)
                // refresh tokenin süresi dolduysa
                await api.post("/auth/logout")

                // login sayfasına yönlendir
                window.location.href = "/login"

                // yeni bir hata aldığında hata döndür
                return Promise.reject(err)
            }
        }     
        return Promise.reject(err)
}         
)
export default api