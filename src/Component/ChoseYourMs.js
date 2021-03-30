import React,{useState} from 'react'
import data from '../data/MsData'

const ChoseYourMs = () => {
    const [cards, setcards] = useState(data)
    return (
        <section className="md:grid grid-cols-3 py-5 px-10  sm:flex flex-col xl:grid-cols-6 my-8">
            {cards.map((card)=> {
                const {id, text, image } = card
                return (
                    <article key={id} className="flex items-center py-2 px-6 rotate_img ">
                        <img src={image} />
                        <p className="mx-2 font-semibold cursor-pointer hover:underline">{text}</p>
                    </article>
                )
            })}
        </section>
    )
}

export default ChoseYourMs;
