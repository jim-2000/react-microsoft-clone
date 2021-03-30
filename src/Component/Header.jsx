import React from 'react'
import Logo from '../images/homepage/logo.png'
import { FaBars,FaUserPlus,FaSearch  } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import './Header.css'
const Header = () => {
    return (
        <div>
            <header className="flex items-center justify-between py-3 header">
                <div className="menu-btn flex">
                {/* HambergMenu */}
                <div className="mx-4">
                        <FaBars />
                </div>
                {/* search */}
                <div>
                    <FaSearch />
                </div>
                </div>
                <div className="logo">
                    <img src={Logo} alt="microsoft" />
                </div>
                <div className="cart flex">
                    <div>
                        <FiShoppingCart />
                    </div>
                    <div className="mx-4">
                        <FaUserPlus />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;
