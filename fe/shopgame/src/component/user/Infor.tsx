import React from "react";
import './infor.css';
import { DataUser } from "./dataUser";


interface InforProps {
  user: DataUser | null;
  balance: number | null;
}

const Infor: React.FC<InforProps> = ({ user, balance }) => {
  if (!user) {
    return <div>Vui lòng đăng nhập</div>;
  }

  return (
    <div className="infor">
      <div className="infor__left">
        <img className="infor__left--avt" src={user.avt} alt="User Avatar"/>
      </div>
      <div className="infor__right">
        <label className="infor__right--title">Thông Tin cá Nhân</label>
        <div className="infor__id">ID: {user.id}</div>
        <div className="infor__userName">User Name: {user.userName}</div>
        <div className="infor__mail">Mail: {user.mail}</div>
        <div className="infor__phone">Phone: {user.phone}</div>
        <div className="infor__adress">Address: {user.adress}</div>
        <div className="infor__cccd">CCCD: {user.cccd}</div>
        <div className="infor__balance">Balance: {balance}</div>
      </div>
    </div>
  );
};

export default Infor;