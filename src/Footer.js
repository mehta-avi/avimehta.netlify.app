import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t py-4 text-center text-gray-400 text-sm mt-8">
      &copy; {new Date().getFullYear()} 
    </footer>
  );
}