import React from 'react';
import './Navbar.css';


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="menu-icons"><i class="fa-solid fa-bars"></i>
            </div>

            <div className="logo">
                <img src="https://images-us-prod.cms.commerce.dynamics.com/cms/api/stpmsksxpr/imageFileData/MA1BcU?ver=5de2&amp;m=6&amp;q=80" alt="av" />
            </div>

            <div class="search-container">
                <input type="text" class="search-bar" placeholder="Search Adventure Worlds" />
                <i class="fas fa-search search-icon"></i>
            </div>

            <div className="store-locator">
                <span><i class="fa-solid fa-location-dot"></i>Store Locator</span>
            </div>

            <div className="sign-in">
                <span><i class="fa-regular fa-circle-user"></i>Sign In</span>
            </div>

            <div class="shopping-bag">
                <i class="fas fa-shopping-bag"></i>
            </div>

            <div className="site-picker">
                <span>Site<i class="fa-solid fa-chevron-down"></i></span>
            </div>
        </div>
    );
};

export default Navbar;
