import React from 'react'
import './Home.scss'
import HomeNav from '../../layout/home-nav/HomeNav'
import {Container} from '../../utils/Utils'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <HomeNav/>
    <main className="home">
      <Container>
          <ul className="home-content__wrapper">
            <li className="home-page">
              <Link to="/market-place" className='home-page__link'>
                <div className="image">
                  <img src='https://www.bhg.com/thmb/SfvVALaQxFyi4vYdbhBR11S41S8=/1280x0/filters:no_upscale():strip_icc()/indoor-potted-houseplants-703b321a-81cf8e1f9aee48a28e1be3bbc45e4386.jpg' alt="Market Place" />
                </div>
                <h3>Market Place</h3>
              </Link>
            </li>
            <li className="home-page">
              <Link to="/hashar" className='home-page__link'>
                <div className="image">
                  <img src='https://www.bhg.com/thmb/SfvVALaQxFyi4vYdbhBR11S41S8=/1280x0/filters:no_upscale():strip_icc()/indoor-potted-houseplants-703b321a-81cf8e1f9aee48a28e1be3bbc45e4386.jpg' alt="Hashar" />
                </div>
                <h3>Hashar</h3>
              </Link>
            </li>
            <li className="home-page">
              <Link to="/statistics" className='home-page__link'>
                <div className="image">
                  <img src='https://www.bhg.com/thmb/SfvVALaQxFyi4vYdbhBR11S41S8=/1280x0/filters:no_upscale():strip_icc()/indoor-potted-houseplants-703b321a-81cf8e1f9aee48a28e1be3bbc45e4386.jpg' alt="Statistics" />
                </div>
                <h3>Statistics</h3>
              </Link>
            </li>
          </ul>
      </Container>
    </main>
    </>
  )
}

export default Home