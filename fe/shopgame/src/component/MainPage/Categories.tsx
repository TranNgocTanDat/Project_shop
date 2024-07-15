import React from "react"
import { Link } from "react-router-dom"

// interface Category {
//   cateImg: string;
//   cateName: string;
// }

const Categories: React.FC = () => {
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
              <Link to='/game_play'>
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
