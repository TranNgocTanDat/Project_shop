import React from "react"
import { Link } from "react-router-dom"

// interface Category {
//   cateImg: string;
//   cateName: string;
// }

const Categories:React.FC = () => {
  const data: Category[] = [
    {
      cateImg: "./images/category/game1.png",
      cateName: "Fashion",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Electronic",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Cars",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Home & Garden",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Gifts",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Music",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Health & Beauty",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Pets",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Baby Toys",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Groceries",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Books",
    },
  ]

  return (
    <>
      <div className='category'>
        {/* {data.map((value, index) => { */}
            <div className='box f_flex'>
              <Link to='/game_offline'>
                <img src={"./images/category/offline.png"} alt='' />
                <span >Game Offline</span>
              </Link>
            </div>
            <div className='box f_flex'>
              <Link to='/game_online'>
                <img src={"/images/category/online.png"} alt='' />
                <span >Game Online</span>
              </Link>
            </div>
            <div className='box f_flex'>
              <Link to='/game_playstation'>
                <img src={"./images/category/playstation.png"} alt='' />
                <span >Game Playstation</span>
              </Link>
            </div>
            <div className='box f_flex'>
              <Link to='/game_steam'>
                <img src={"./images/category/category.png"} alt='' />
                <span >Game Steam</span>
              </Link>
            </div>
            <div className='box f_flex'>
              <Link to='/game_moblie'>
                <img src={"./images/category/cat5.png"} alt='' />
                <span >Game Moblie</span>
              </Link>
            </div>

        {/* })} */}
      </div>
    </>
  )
}

export default Categories
