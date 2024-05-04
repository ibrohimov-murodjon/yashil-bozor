import React from 'react'
import './MarketPlace.scss'
import MpNav from '../../layout/mp-nav/MpNav'
import { Container, Card, Button } from '../../utils/Utils'
import MpFooter from '../../layout/mp-footer/MpFooter'
import MpSidebar from '../../layout/mp-sidebar/MpSidebar'
import Hero from '../../components/hero/Hero'
import MpProducts from '../../components/mp-products/MpProducts'

const MarketPlace = () => {
  return (
    <>
      <Container>
        <MpNav />
        <Hero />
        <div className="products">
          <MpSidebar />
          <MpProducts />
        </div>
        <section className='about'>
          <form className='advice-form'>
            <label htmlFor="advice-label">Get Advice</label>
            <div className="advice-action">
              <input type="text" id='advice' className='advice-input' placeholder='Enter Your Question'/>
            <Button>Send</Button>
            </div>
          </form>
        </section>
      </Container>
      <MpFooter />
    </>
  )
}

export default MarketPlace