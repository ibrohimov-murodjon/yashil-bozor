import React from 'react'
import './Utils.scss'
import { PiShoppingCartSimple } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import productimage from '../assests/images/Market-plase-shc-img.png'

const Container = ({children}) => {
  return (
    <div className='container'>{children}</div>
  )
}

const Button = ({children}) => {
  return (
    <button className='btn'>{children}</button>
  )
}

const Card = () => {
  return (
    <div className="card">
      <img src={productimage} alt="" />
      <div className="hover-look">
        <button>
          <PiShoppingCartSimple />
        </button>
        <button>
          <FaRegHeart />
        </button>
        <button>
          <RiSearchLine />
        </button>
      </div>
      <div>
        <h5>Beach Spider Lily</h5>
        <strong className="price">$129.00</strong>
      </div>
    </div>
  );
}
export {Container, Button, Card}