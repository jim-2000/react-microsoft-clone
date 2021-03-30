import React,{useState} from 'react'
import data from '../data/Section3'
import './Header.css'

//
const Section3 = () => {
    const [cards, setCards] = useState(data)
    return (
        <div className="md:container px-10">

            <h2 className="p-8 font-semibold text-2xl ">For Business</h2>
        <section className="newSection_Img  md:grid grid-cols-2 xl:grid-cols-4">
            {
                cards.map((card)=> {
                    const {id,image, title, desc, link } =card;
                    return (
                        <article key={id} className="p-8">
                            <div className="">
                                <img src={image} />
                                <h3 className='font-semibold text-black text-xl'>{title}</h3>
                                <p>{desc}</p>
                                <button className="cursor-pointer text-red-600 font-semibold">{link}</button>
                            </div>
                        </article>
                    )
                })
            }
        </section>
        </div>
    )
}

export default Section3;
