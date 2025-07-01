import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();
  
  const openResume = () => {
    window.open('/AviMehtaResume.pdf', '_blank');
  };

  return (
    <nav className="mb-8 flex space-x-6 text-gray-500 text-base h-8 items-center">
      <Link to="/" className="hover:underline">home</Link>
      <button onClick={openResume} className="hover:underline bg-transparent border-none text-gray-500 text-base cursor-pointer">resume</button>
      <Link to="/projects" className="hover:underline">projects</Link>
    </nav>
  );
}