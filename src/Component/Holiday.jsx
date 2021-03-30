import React from 'react'
import dayImg from '../images/homepage/this_holiday_1600.png'
const Holiday = () => {
    return (
        <section className="mt-5  hero holiday_sec">
            <div className="hero_img">
                <img src={dayImg} alt="Holy_day" />
            </div>
            <div className="overlay bg-gray-800 text-center text-white px-10 py-20 sm:bg-transparent sm:text-left" >
                <h2 className="font-semibold text-xl mb-2"> This holiday, find your joy</h2>
                <p className="mb-4 txt">
                Follow the story of Rufus, a pup whose dream takes him into Microsoft
                worlds like Minecraft, Flight Simulator, Teams and Halo
                </p>
            <button className="mr-4 bg-white
             text-black py-2 px-5 hover:underline hover:bg-opacity-80 ">Watch now</button>
          
            </div>
        </section>
    )
}

export default Holiday;
