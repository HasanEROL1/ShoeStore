import type { FC } from "react"
import type { Shoe } from "../../types"
interface Props{
item:Shoe

}

const Badge:FC<Props> = ({item}) => {
  return (
   (!item.discount || item.isNew) && (
    <span 
    className={`absolute text-white rounded rounded-tl-xl rounded-br-xl lg:rounded-br-3xl px-2 lg:px-4 py-1 lg:py-2 ${item.discount ? "bg-my-yellow" :" bg-my-blue"}`}>
        {item.discount ? `${item.discount}% İndirim` : "Yeni"}
    </span>
   )
  )
}

export default Badge