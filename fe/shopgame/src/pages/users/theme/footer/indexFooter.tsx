import React from 'react'
import '../footer/styleFooter.css'
const Footer = () => {
    return (
        <>
            <footer>
                <div className='container grid2'>
                    <div className='box'>
                        <h1>Double D</h1>
                        <p> Chúng tôi mang đến những trãi nghiệm thu vị cho các bạn, sự hài lòng về trãi nghiệm của các bạn chính là niềm hạnh phúc của chúng tôi. </p>
                        <div className='icon d_flex'>
                            <div className='img d_flex'>
                                <i className='fa-brands fa-google-play'></i>
                                <span>Google Play</span>
                            </div>
                            <div className='img d_flex'>
                                <i className='fa-brands fa-app-store-ios'></i>
                                <span>App Store</span>
                            </div>
                        </div>
                    </div>
                    <div className='box'>
                        <h2>Về Chúng tôi</h2>
                        <ul>
                            <li>Hotline: 0868849543</li>
                            <li>doubleD@gmail.com</li>
                            <li>Nhà sáng lập: 2</li>

                        </ul>
                    </div>
                    <div className='box'>
                        <h2>Nhà sáng lập</h2>
                        <ul>
                            <li>Danh Nguyen</li>
                            <li>Tan Dat</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h2>Thể loại game</h2>
                        <ul>
                            <li>Online</li>
                            <li>Offline</li>
                            <li>Mobile</li>
                            <li>Develop</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer