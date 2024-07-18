import React, { useState, useEffect } from "react";
import "./style.css";
import { CartItem as CartItemType } from "../../../../component/Pdata";
import { RootState, useAppSelector } from '../../../../store/Store';
import { getBalance, check, updateUser } from "../../../../component/user/checkLogin";
import Infor from "../../../../component/user/Infor";
import user from "../../../../component/user/User";
import { DataUser } from "../../../../component/user/dataUser";
import PaymentModal from "./PaymentModal";

interface CartProps {
  addToCart: (item: CartItemType) => void;
  decreaseQty: (item: CartItemType) => void;
  removeToCart:(item: CartItemType) => void;
}

const Cart: React.FC<CartProps> = ({ addToCart, decreaseQty, removeToCart }) => {
  const cart = useAppSelector((state: RootState) => state.cart);
  const [user, setUser] = useState<DataUser | null>(null);
  const [balance, setBalance] = useState<number | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [downloadedFiles, setDownloadedFiles] = useState<string[]>([]);

  //check thanh toán thành công
  const [paySuccess, setPaySuccess] = useState<boolean>(false);
  //tạo một cái link để download
  // const [download, setDownload] = useState<string[]>([]);

  let total = 0;
  cart.forEach((item) => {
    if (item.id)
      total += item?.price;
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      const balance = getBalance(user);
      setBalance(balance);
      setUser(user);
    }
    
    const storedFiles = localStorage.getItem('downloadedFiles');
      if (storedFiles) {
        setDownloadedFiles(JSON.parse(storedFiles));
      }
  }, []);

  

  const handlePayment = () => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      setMessage("Vui lòng đăng nhập");
      setShowModal(true);
      return;
    }
    if(cart.length === 0){
      setMessage("Vui lòng thêm sản phẩm");
      setShowModal(true);
      return;
    }
    const user = JSON.parse(storedUser);
    const balance = getBalance(user);

    if (balance !== null && balance >= total) {
      const newBalance = balance - total;
      setBalance(newBalance);
      updateUser(user, newBalance);
      console.log(newBalance);
      setMessage("Thanh toán thành công");
      setPaySuccess(true);
      setShowModal(true);


      //lấy ra fileGame từ data
      // const links = cart.map(item => item.fileGmae);
      // setDownload(links);
    } else {
      setMessage("Số dư không đủ");
      setPaySuccess(false);
      setShowModal(true);
    }
  };


  // đóng trang thông báo
  const closeModal = () => {
    setShowModal(false);
    setMessage(null);
  };
  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          <div className='cart-details'>
            {cart.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}
            {cart.map((item, index) => {
              const productQty = item.price * item.qty;
              return (
                item.id && (
                  <div className='cart-list product d_flex' key={index}>
                    <div className='img'>
                      <img src={item.cover} alt={item.name} />
                    </div>
                    <div className='cart-details'>
                      <h3>{item.name}</h3>
                      <h4>
                        <span>{item.price}$</span>
                      </h4>
                    </div>
                    <div className='cart-items-function'>
                      <div className='removeCart'>
                        <button className='removeCart' onClick={() => removeToCart(item)}>
                          <i className='fa-solid fa-xmark'></i>
                        </button>
                      </div>
                      {/* <div className='cartControl d_flex'>
                        <button className='incCart' onClick={() => addToCart(item)}>
                          <i className='fa-solid fa-plus'></i>
                        </button>
                        <div className="cart-qty">
                          <span>{item.qty}</span>
                        </div>
                        
                        <button className='desCart' onClick={() => decreaseQty(item)}>
                          <i className='fa-solid fa-minus'></i>
                        </button>
                      </div> */}
                      {paySuccess && (
                          <div className="download__Game">
                            <a href={item.fileGmae} className="download-button" download>
                              Tải về
                            </a>
                          </div>
                      )}
                      {/*<div className='cartControl d_flex'>*/}
                      {/*  <button className='incCart' onClick={() => addToCart(item)}>*/}
                      {/*    <i className='fa-solid fa-plus'></i>*/}
                      {/*  </button>*/}
                      {/*  <div className="cart-qty">*/}
                      {/*    <span>{item.qty}</span>*/}
                      {/*  </div>*/}

                      {/*  <button className='desCart' onClick={() => decreaseQty(item)}>*/}
                      {/*    <i className='fa-solid fa-minus'></i>*/}
                      {/*  </button>*/}
                      {/*</div>*/}
                    </div>
                  </div>
                )
              );
            })}
          </div>

          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className='d_flex'>
              <h4>Total Price :</h4>
              <h3>{total}$</h3>
            </div>
            <div className="pay">
              <button className="bnt_pay" onClick={handlePayment}>
                THANH TOÁN
              </button>
            </div>
            {/*{message && <div className="message">{message}</div>}*/}
          </div>
        </div>
      </section>
      {showModal && <PaymentModal message={message || ''} onClose={closeModal} />}
    </>
  );
};

export default Cart;
