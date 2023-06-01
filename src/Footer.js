import React from 'react';
import { HiOutlineHeart } from "react-icons/hi"

const Footer = () => {
    return (
        <footer className="bg-red-400 text-white py-1.5">
            <div className="flex justify-center items-center ">
                <p className=' text-lg pr-1'>Made with </p>
                <HiOutlineHeart className="mt-1.2" />
            </div>
        </footer>

    );
  };
  
  export default Footer;