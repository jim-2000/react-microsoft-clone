import React,{useState} from 'react'
import data from '../data/Section2Data'
import './Header.css'

//
const Section2 = () => {
    const [cards, setCards] = useState(data)
    return (
        <section className="newSection_Img md:grid grid-cols-2 xl:grid-cols-4">
            {
                cards.map((card)=> {
                    const {id,image, title, desc, link } =card;
                    return (
                        <article key={id} className="p-8">
                            <div className="blurImg">
                                <img src={image} className="img_hover" />
                                <h3 className='font-semibold text-black text-xl'>{title}</h3>
                                <p>{desc}</p>
                                <button className="cursor-pointer text-red-600 font-semibold">{link}</button>
                            </div>
                        </article>
                    )
                })
            }
        </section>
    )
}

export default Section2;
