import React from "react"
import Categories from "./Categories"
import "./Home.css"
import SliderHome from "./Slider"
import { ProductItem, SlideCardData } from "../Pdata"

interface HomeProps{
  slide: SlideCardData[];
}

const Home:React.FC<HomeProps> = ({slide}) => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          <Categories />
          <SliderHome slide={slide} />
        </div>
      </section>
    </>
  )
}

export default Home
