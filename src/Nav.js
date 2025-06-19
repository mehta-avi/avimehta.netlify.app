import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();
  return (
    <nav className="mb-8 flex space-x-6 text-gray-500 text-base">
      <Link to="/" className="hover:underline">home</Link>
      <Link to="/experience"className="hover:underline">experience</Link>
      <Link to="/projects" className="hover:underline">projects</Link>
    </nav>
  );
}