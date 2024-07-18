import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Categories from "../../../../component/MainPage/Categories"

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

   // Bắt sự kiện click trên toàn bộ trang
   useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Kiểm tra xem click có trong phần danh mục hay không
      if ((event.target as HTMLElement).closest(".catgrories")) {
        return; // Nếu click vào phần danh mục thì không làm gì cả
      }

      // Nếu không phải click vào phần danh mục thì ẩn đi
      setShowCategories(false);
    };

    // Đăng ký sự kiện click khi mount component
    document.addEventListener("click", handleOutsideClick);

    // Hủy đăng ký sự kiện khi unmount component
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <>
      <header className='header'>
        <div className='container d_flex cd_flex'>
          <div className='catgrories cd_flex' onClick={toggleCategories}>
            <span className='fa-solid fa-border-all'></span>
            <h4>
              Danh mục game <i className='fa fa-chevron-down'></i>

            </h4>
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to='/'>Trang chủ</Link>
              </li>
              
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
      {showCategories && (
        <div className="block__catgroies" >
          <Categories />
        </div>
      )}

    </>
  )
}

export default Navbar
