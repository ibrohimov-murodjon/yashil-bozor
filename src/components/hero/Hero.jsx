import React from 'react'
import './Hero.scss'
import { Button} from '../../utils/Utils'
import HeroImage from '../../assests/images/hero-image.png'

const Hero = () => {
  return (
    <section className='hero'>
          <div className='hero-content'>
            <h3>Welcome to yashil bozor</h3>
            <h2 className='hero-title'>
              Protect nature <br /> with <span>plants</span>
            </h2>
            <p>
              When designing a website in Figma, you can choose a canvas size
              that aligns with the target platform or device. Keep in mind that
              responsive design is essential.
            </p>
            <Button>Shop Now</Button>
          </div>
          <img src={HeroImage} alt="" />
    </section>
  )
}

export default Hero