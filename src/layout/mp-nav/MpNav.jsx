import React from 'react'
import './MpNav.scss'
import { Container } from '../../utils/Utils'
import { Link } from 'react-router-dom'
import { PiShoppingCartSimple } from "react-icons/pi";
import { AiOutlineHeart, AiOutlineGlobal } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const MpNav = () => {
  return (
     <nav className="secondary-navbar">
      <Container>
        <div className="secondary-navbar__wrapper">
          <h1 className="logo">
            <Link to='/'>Yashil Bozor</Link>
          </h1>
          <form className="search-form">
            <button className="search-btn"><FiSearch /></button>
            <input
              type="text"
              className="search-input"
              placeholder="Search Plants..."
            />
          </form>
          <ul className="market-actions__wrapper">
            <li className="action-item">
              <Link><AiOutlineGlobal/></Link>
            </li>
            <li className="action-item">
              <Link><AiOutlineHeart/></Link>
            </li>
            <li className="action-item">
              <Link className="cart">
                <PiShoppingCartSimple/>
                <span className="cart-count">2</span>
                </Link>
            </li>
            <li className="btn">
              <Link >Login</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  )
}

export default MpNav