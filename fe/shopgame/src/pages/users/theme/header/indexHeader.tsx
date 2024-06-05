import React from 'react'
import Head from './Head'
import Navbar from './Navbar'
import Search from './Search'

interface HeaderProps{
    CartItem: number;
}

const Header:React.FC<HeaderProps> = ({ CartItem }) => {
    return(
        <>
        <Head/>
        <Search CartItem={CartItem} />
        <Navbar/>
        </>
    )
}

export default Header