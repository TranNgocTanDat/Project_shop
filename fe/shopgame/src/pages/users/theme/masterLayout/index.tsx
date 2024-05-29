
import React, {ReactNode} from 'react'
import Header from '../header/indexHeader'
import Footer from '../footer/indexFooter'
import HomePage from '../../homePage/indexHome'

interface MasterLayoutProps {
    children: ReactNode;
    [key: string]: any; // Kiểu cho các prop bổ sung khác
}


const MasterLayout: React.FC<MasterLayoutProps> = ({ children, ...props }) => {
    return(
        <div>
        <Header />
       {children}
        <Footer/>
        </div>
    )
}

export default MasterLayout