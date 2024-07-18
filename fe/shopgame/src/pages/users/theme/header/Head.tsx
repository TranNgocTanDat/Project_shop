import React from "react"
import "../header/Header.css"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
          <i className="fa-solid fa-phone"></i>
            <label> +84 868 849 543</label>
            <i className='fa fa-envelope'></i>
            <label> doubleD@gmail.com</label>
          </div>
          <div className='right row RText'>
            <i className="fa-solid fa-earth-americas"></i>
            <label>VN</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
