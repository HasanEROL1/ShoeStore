import type { FC } from "react"
import Hero from "./Hero"
import List from "./List"
import Heading from "./Heading"
const Home:FC = () => {
  return (
    <div>
      <Hero />

      <Heading />

     

        <List />
    </div>
  )
}

export default Home