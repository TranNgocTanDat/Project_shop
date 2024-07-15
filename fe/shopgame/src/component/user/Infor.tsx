import React from "react";
import {DataUser} from "./dataUser";
import './infor.css';



interface UserItem{
    id: number,
    userName: string,
    passWord: string,
}

interface InforProps {
    user: DataUser;
}


const Infor: React.FC<InforProps> = ({user}) => {

    return(
        <div className="infor">
            <div className="infor__left">
                <img className="infor__left--avt" src={user.avt}/>
                {/*<button onClick={}*/}
            </div>
            <div className="infor__right">
                <label className="infor__right--title">Thông Tin cá Nhân</label>
                <div className="infor__id">ID: {user.id}</div>
                <div className="infor__userName">User Name: {user.userName}</div>
                <div className="infor__mail">Mail: {user.mail}</div>
                <div className="infor__phone">Phone: {user.phone}</div>
                <div className="infor__adress">Adress: {user.adress}</div>
                <div className="infor__cccd">CCCD: {user.cccd}</div>
                <div className="infor__cccd">balance: {user.balance}</div>
            </div>
        </div>
    );
}

export default Infor;