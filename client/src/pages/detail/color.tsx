import { useState, type FC } from "react"
import { colors as colorsList } from "../../utils/constants"


interface Props {
    colors: string
}
const Color: FC<Props> = ({ colors }) => {
    const [selected, setSelected] = useState<string>("")
    const toggle = (id: string) =>{
        setSelected(selected === id ? "" : id) }
    return (
        <div>
            <h2 className="font-semibold mb-3">Renk Seçiniz </h2>
            <div className="flex gap-5">
                {colors.split(",").map((id) => {
                    const color = colorsList.find(i =>
                        i.api.includes(id.trim())
                    );

                    if (!color) return null;

                    const isSelected = selected === color.id;

                    return (
                        <div
                            key={color.id}
                            className={isSelected ? "ring-3 ring-my-blue rounded-full" : ""}
                        >
                            <div
                                onClick={() => toggle(color.id)}
                                className="m-1 size-9 rounded-full scale-125 cursor-pointer"
                                style={{ background: color?.code }}
                            />
                        </div>
                    );
                })}

                  
                 
            </div>


        </div>
    )
}

export default Color