import React from "react"
import SlideCard from "./SlideCard"
import { SlideCardData } from "../Pdata"

interface SliderHomeProps{
  slide: SlideCardData[];
}

const SliderHome:React.FC<SliderHomeProps> = ({slide}) => {
  return (
    <>
      <section className='homeSlide contentWidth'>
        <div className='container'>
          <SlideCard slide={slide}/>
        </div>
      </section>
    </>
  )
}

export default SliderHome
