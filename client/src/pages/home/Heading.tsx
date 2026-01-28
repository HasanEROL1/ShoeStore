import type { FC } from "react"


const Heading:FC = () => {
  return (
    <div className="flex justify-between items-center my-6 md:mt-9 lg:mt-12.5 xl:mt-22.5 xl:mb-8">
      <h1 className=" font-semibold  leading-[96%] text-[24px] md:text-[36px] lg:text-[60px] xl:text-[70px]">
        YENİ ÜRÜNLERİ <br /> KAÇIRMA</h1>

      <button className="bg-my-blue text-white py-2 px-3 lg:py-3 lg:px-7 rounded-lg hover:brightness-90 transition cursor-pointer">Alışverişe Başla</button>
    </div>
  )
}

export default Heading