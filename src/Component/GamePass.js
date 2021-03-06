import React from 'react'
import game from '../images/homepage/game_pass_539.png'

const GamePass = () => {
    return (
        <section className="gamepass_hero">
            <div className="hero_img">
                <img src={game} alt="Xbox gamePass"  />
            </div>
            <div className= "overlay bg-gray-800 text-center text-white px-10 py-20 sm:bg-transparent sm:text-left  " >
                <h2 className="font-semibold text-xl mb-2">Xbox Game Pass Ultimate</h2>
                    <p className="mb-4 txt ">
                    Get your first 3 months of Xbox Game Pass Ultimate membership for $1.
                    Now includes EA Play. New subscribers only.
                    </p>
                <button className="mr-4 bg-white
                text-black py-2 px-5 hover:underline hover:bg-opacity-80 ">Join now</button>
                <button className="cursor-pointer hover:underline mt_25">Compare all plans</button>
            </div>
        </section>
    )
}

export default GamePass;
