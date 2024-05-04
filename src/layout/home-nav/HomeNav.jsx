import React from 'react'
import './HomeNav.scss'
import { Container, Button } from '../../utils/Utils'
import { Link } from 'react-router-dom'

const HomeNav = () => {
  return (
    <Container>
     <nav className='main-navbar'>
      <h1 className="logo"><Link to={"/"}>Yashil Bozor</Link></h1>
      <Link className='btn' to='/login'>Login</Link>
    </nav>
   </Container>
  )
}

export default HomeNav