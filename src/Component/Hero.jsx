import React from 'react'
// import { FaChevronRight  } from 'react-icons/fa'
import HeroBackground from '../images/homepage/hero_539.png'
const Hero = () => {
    return (
        <section className="hero">
            <div className="hero_img">
                <img src={HeroBackground} alt="Hero" />
            </div>
            <div 
            className="overlay bg-gray-200 text-center p-10 sm:bg-transparent sm:text-left  ">
                <p className="bg-white text-red-700 inline-block font-bold mb-3">CountDown Sale</p>
                <h1 className="font-bold text-2xl mb-2 pulse">Bundle and save up to $430</h1>
                <p className="txt">complete your Surface Pro 7 with choice of selection Type Cover and free saleeve</p>
                <button className="bg-red-600 text-white outline-none py-3 px-5 mt-3 hover:bg-red-800 font-bold">Shop Now </button>
            </div>
        </section>
    )
}

export default Hero;
