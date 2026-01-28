import type { FC } from "react"
import type { Shoe } from "../../types"
import Price from "../../components/card/price"
import Badge from "../../components/card/badge"

interface Props {
    item: Shoe
    designs:string
}
const Head:FC<Props> = ({item,}) => {
  return (

    <div className="flex flex-col gap-4">
        <Badge item={item} />

        <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl mt-13.75">{item.name}</h1>
          <div className="text-2xl mt-4 flex gap-2">
        <Price item={item} designs="text-2xl !text-my-blue" />
          {item.discount >0 && (
           <span className="line-through ps-3 text-red-300 text-xl">${item.price}</span>
       
        )}
          </div>
    </div>
  )
}

export default Head