
import React, {ReactNode} from 'react'
import Header from '../header/indexHeader'
import Footer from '../footer/indexFooter'
import HomePage from '../../homePage/indexHome'

interface MasterLayoutProps {
    CartItem: number;
    children: ReactNode;
    [key: string]: any; // Kiểu cho các prop bổ sung khác
}


const MasterLayout: React.FC<MasterLayoutProps> = ({ children, CartItem, ...props }) => {
    return(
        <div>
        <Header CartItem={CartItem}/>
       {children}
        <Footer/>
        </div>
    )
}

export default MasterLayout