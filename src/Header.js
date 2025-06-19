import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "home", path: "/" },
  { name: "experience", path: "/experience" },
  { name: "projects", path: "/projects" },
  // { name: "blog", path: "/blog" }, // Optional
];

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className="w-full border-b">
      <nav className="max-w-2xl mx-auto flex justify-center space-x-8 py-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`capitalize text-gray-700 hover:text-black transition ${
              pathname === item.path ? "font-bold underline" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}