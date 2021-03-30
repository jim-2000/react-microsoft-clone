import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
const Social = () => {
    return (
        <div className="flex items-center py-5 px-8">
            <div className="mr-5">
             <h4>Follow MicroJim</h4>
            </div>
            <div className="flex">
                <FaFacebookF className="mr-2 text-2xl text-blue-900" />
                <FaTwitter  className="mr-2 text-2xl text-blue-700"/>
                <FaLinkedinIn  className="mr-2 text-2xl text-blue-900"/>
            </div>

        </div>
    )
}

export default Social;
