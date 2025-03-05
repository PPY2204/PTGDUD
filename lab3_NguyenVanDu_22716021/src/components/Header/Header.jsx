import { useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import Button from "../Button/Button";
import Logo from "../../assets/img/logo.png";
import './Header.css';

const Header = () => {


    return (

        <header>
            <img className="header__logo" src={Logo} alt="ABC" />
            <form action="">
                <input className="header__search" type="text" placeholder="What would you like to cook" />
            </form>
            <Menu />
            <Button className='btn_login' name='Login' />
            <Button className='btn_subscribe' name='Subscribe' />
        </header>
    );
}

export default Header;