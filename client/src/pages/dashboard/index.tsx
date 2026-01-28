import type { FC } from "react"
import useShoes from "../../hooks/useShoes"
import Loader from "../../components/loader"
import Error from "../../components/error"
import { Link } from "react-router-dom"
import { IoIosTrash } from "react-icons/io";


const Dashboard:FC = () => {
  const {shoes,remove} = useShoes()
  const {isLoading, error, data} =shoes()

  if(isLoading) return<Loader />

  if(error) return <Error message={error.message} />
  return (
   <div >
    <div className="flex justify-between mb-5 items-center">
      <h1 className="text-2xl md:text-3xl font-semibold">
        Ürünler
      </h1>

      <Link to="/admin/create"
      className="bg-my-blue px-4 py-1 md:py-2 md:px-6  rounded-md text-white hover:bg-my-blue/90 transition cursor-pointer"
      >Ürün Ekle</Link>
    </div>

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
          <thead className=" text-xs text-gray-700 uppercase bg-gray-50 border-b-2 border-gray-300  ">
          <tr className="py-4">
            <th className="px-14 py-4"></th>
              <th className="px-14 py-4">İSİM</th>
              <th className="px-14 py-4">FİYAT</th>
              <th className="px-14 py-4 text-nowrap">İNDİRİM</th>
              <th className="px-14 py-4">EYLEMLER</th>
          </tr>
        </thead>

        <tbody >
          {data?.map((item) => (
            <tr  key={item._id} 
            className="bg-white border-b border-s-gray-200 hover:bg-gray-50 ">
              <td className="px-6 py-4">

                <img src={item.picture[0]} alt={item.name}
                className="w-16 md:w-28 max-w-full max-h-full rounded-xl" />
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900">{item.name}</td>
              <td className="px-15 py-4 font-semibold  text-gray-900 ">{item.price}$</td>
              <td className="px-15 py-4 font-semibold">
                {item.discount>0 ? `${item.discount}%` :"Yok "}
              </td>
              <td className="px-15 py-4 font-semibold ">

                <Link to={`/admin/edit/${item._id}`}
                className="text-my-blue hover:text-my-blue/90 hover:underline pe-5 transition"
                >Düzenle
             
                </Link>
               <button onClick={() => remove.mutate(item._id)}
               className="inline-flex items-center text-rose-600 hover:underline cursor-pointer gap-x-1"
                >Sil<IoIosTrash  /></button>
              </td>
            

            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </div>

  )
}

export default Dashboard