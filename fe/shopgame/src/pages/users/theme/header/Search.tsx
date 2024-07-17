import React, {useEffect} from "react"
import logo from "../../../../../public/images/logo.png"
import {Link, Outlet} from "react-router-dom"
import User from "../../../../component/user/User";
import { RootState, useAppSelector } from '../../../../store/Store';

const Search:React.FC = () => {
  const cart = useAppSelector((state: RootState) => state.cart);
  // fixed Header
  useEffect(() => {
    const handleScroll = () => {
        const search = document.querySelector<HTMLElement>('.search');
        if (search) {
            search.classList.toggle('active', window.scrollY > 100);
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt='Logo' />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
              <Link to='/user'>
                  <i className='fa fa-user icon-circle'></i>
              </Link>
              <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{cart.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
