import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import './style.css';

function Header() {
    return ( 
        <div className="header">
      <div class="header_logo">
        <StorefrontIcon fontSize='large' className='header_logoImage'/>
        <h2 class="header_logoTitle">eShop</h2>
      </div>
     <div class="header_search">
      <input type="text" class="header_searchInput" />
      <SearchIcon className='header_searchIcon'/>
     </div>
     <div class="header_nav">
      <div class="nav_item">
        <span class="nav_itemLineOne">Hello Guest</span>
        <span class="nav_itemLineTwo">Sign In</span>
      </div>
      <div class="nav_item">
      <span class="nav_itemLineOne">Your</span>
        <span class="nav_itemLineTwo">Shop</span>
      </div>
      <div class="nav_item">
      <span class="nav_itemLineOne"> 
      <ShoppingBasketIcon  fontSize='large' className='itemBasket'/>  
      </span>
        <span class="nav_itemLineTwo nav_basketCount">0</span>
      </div>
     </div>
    </div>
     );
}

export default Header;