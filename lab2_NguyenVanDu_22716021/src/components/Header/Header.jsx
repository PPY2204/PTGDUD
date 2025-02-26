import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__left">
                <img className="logo" src="/assets/logo.jpg" alt="" width="10%" />
                <input className="research" type="text" />
            </div>
            <nav className="header-navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link">What to cook</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Recipes</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Ingredients</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Occasions</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">About Us</a>
                    </li>
                </ul>
            </nav>
            <div className="header__right">
                <button className="btn_recipe">
                    <img src="/assets/btn_recipe.png" alt="" />
                </button>
                <a className="btn_avarta">
                    <img src="/assets/avatar.png" alt="" />
                </a>
            </div>
        </header>
    );
};

export default Header;
