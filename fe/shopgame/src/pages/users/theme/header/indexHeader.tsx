import React from 'react'
import Head from './Head'
import Navbar from './Navbar'
import Search from './Search'



const Header:React.FC = () => {
    return(
        <>
        <Head/>
        <Search />
        <Navbar/>
        </>
    )
}

export default Header