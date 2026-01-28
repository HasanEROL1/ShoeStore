import type { FC } from "react"


interface Props {
  pictures:string[]
}

const Images:FC<Props> = ({pictures}) => {
  return (
    <div>
      {pictures.map((url, key) => (
        <img src={url} key={key} />
      ))}
    </div>
  )
}

export default Images