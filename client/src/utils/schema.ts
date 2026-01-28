import * as Yup from "yup"


// güçlü şifre için regex
const regex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

// kayıt anında kullanılacak olan schema
const registerSchema = Yup.object().shape({
    firstName: Yup.string().required("Adınızı Giriniz"),
    lastName: Yup.string().required("Soyadınızı Giriniz"),
    email: Yup.string().email("Geçersiz email adresi").required("Email adresinizi giriniz"),
    password: Yup.string()
    .required("Şifrenizi Giriniz")
        .matches(regex, "Şifre en az 8 karakter, büyük harf, küçük harf, rakam ve özel karakter içermelidir")
})


// giriş anında kullanılacak olan schema

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Geçersiz email adresi")
        .required("Email adresinizi giriniz"),
    password: Yup.string().required("Şifrenizi Giriniz")

})

export { registerSchema, LoginSchema }

