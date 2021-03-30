import React, { useState } from "react"
import data from '../data/footer'
import { FaGlobe } from 'react-icons/fa'

//
const Footer = () => {
    const [links, setLinks] = useState(data)
    return (
        <div>

        <footer className="bg-gray-200 
        px-8 py-4 
        md:grid grid-cols-3 xl:grid-cols-6">
            {links.map((link)=> {
                const {id, title,hrefs} =link

                return (
                    <div key={id} className="flex">
                        <div className="mb-10 flex-row">
                            <h4 
                            className="text-xl underline
                             font-semibold text-gray-600">{title}</h4>
                            {hrefs.map((href)=> 
                                (
                                    <li 
                                    className="list-none my-2 text-sm text-gray-400" 
                                    key={hrefs}>{href}</li>
                                )
                            )}
                        </div>
                    </div>
                )
            })}

           
        </footer>
        <div className=" bg-gray-600 md:flex items-center justify-between  px-8 py-4 ">
                <div className="flex items-center text-sm text-gray-100">
                    <FaGlobe className="mr-3" />     
                    <p>
                    English (United States)
                    </p>
                </div>
                <div>
                <ul className="flex 
                    flex-wrap text-sm mt-4 text-gray-100">
                    <li className="mr-4">Sitemap</li>
                    <li className="mr-4">Contact Microsoft</li>
                    <li className="mr-4">Privacy</li>
                    <li className="mr-4">Terms of Use</li>
                    <li className="mr-4">Trademarks</li>
                    <li className="mr-4">Safety &amp; eco</li>
                    <li className="mr-4">About our ads</li>
                    <li>&copy; Microsoft 2020</li>
                </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer
