import type { FC } from "react"
import Form from "../../components/form"
import type { ShoeFormValues } from "../../types"
import { useParams } from "react-router-dom"
import Loader from "../../components/loader"
import useShoes from "../../hooks/useShoes"


const Edit:FC = () => {
  const {id} = useParams()
  const {shoe, update}= useShoes()
  const {isLoading,data} = shoe(id as string)

  const onSubmit = (value: ShoeFormValues) => {
    update.mutate({id:id as string, data:value})
  }

  if(isLoading) return <Loader />
  return (
    <div className="max-w-250 mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold mb-5">Ürün</h1>

      <Form onSubmit={onSubmit} data={data}/>
    </div>
  )
}

export default Edit