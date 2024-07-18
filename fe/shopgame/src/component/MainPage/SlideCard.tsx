import React, {useState} from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductItem, SlideCardData } from "../Pdata";
import { Link } from "react-router-dom"

interface SlideCardProps{
 slide: SlideCardData[];
}

const SlideCard:React.FC<SlideCardProps> = ({slide}) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots:React.ReactNode) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }

  const [products, setProducts] = useState(slide);

  return (
    <>
      <Slider {...settings}>
        {products.map((product) => {
          return (
            <>
              <div className='box d_flex top' >
                <div className='left'>
                  <h1>{product.title}</h1>
                  <p>{product.desc}</p>
                  <Link to={`/productDetail/${product.id}`}>
                  <button className='btn-primary'>Vào trò chơi</button>
                  </Link>
                </div>
                <div className='right'>
                  <img className="image" src={product.cover} alt='' />
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard
