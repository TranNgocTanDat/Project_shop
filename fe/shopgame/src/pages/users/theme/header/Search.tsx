import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RootState, useAppSelector } from '../../../../store/Store';
import { ProductItem, productItems, productMobile, productOffs, productOns, productPlays, productSteams } from "../../../../component/Pdata";

const Search: React.FC = () => {
  const cart = useAppSelector((state: RootState) => state.cart);

  // State để lưu giá trị tìm kiếm và kết quả tìm kiếm
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<ProductItem[]>([]);

  // Cập nhật kết quả tìm kiếm mỗi khi giá trị tìm kiếm thay đổi
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
    } else {
      const allProducts = [...productOffs, ...productOns, ...productPlays, ...productSteams, ...productMobile];

      const results = allProducts.filter(game =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [searchTerm]);

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt='Logo' />
            <h3>Douxble D</h3>
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input
              type='text'
              placeholder='Tìm kiếm trò chơi...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            
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
        {/* Hiển thị kết quả tìm kiếm */}
        {searchResults.length > 0 && (
          <div className='search-results'>
            {searchResults.map(game => (
              <Link to={`/productDetail/${game.id}`}>
                <div key={game.id} className='search-result-item'>
                <div className="seacrh__img">
                    <img src={game.cover} alt="" className="s_img"/>
                </div>
                <div className="name_price">
                  <div className="seacrh__name">
                      {game.name}
                  </div>
                  <div className="search__price">{game.price}   {game.discount}</div>
                </div>

              </div>
              </Link>
              
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Search;
