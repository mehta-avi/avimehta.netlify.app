import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail} from "react-icons/ai";
import { RiSpotifyLine } from "react-icons/ri"
import Nav from "./Nav";

export default function Home() {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-2xl py-20 px-4">
        <Nav />
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold mr-6 whitespace-nowrap">
            Hi, I'm Avi <span role="img" aria-label="wave">👋</span>
          </h1>
          <img
            src="/pylons_pic_1.jpg"
            className="w-40 h-40 object-cover border border-gray-200 shadow mr-10"
            style={{ objectPosition: "center top" }}
          />
        </div>
        <p className="text-lg text-gray-600 mb-6">
          I'm a Data Scientist at Truist, focused on developing and enhancing predictive models
          and simulations for regulatory requirements<br />
          I studied Computer Science at Virginia Tech<br />
          I'm interested in high-performance computing, AI, fintech, and sustainability.<br />
          Aside from building, I enjoy soccer, tennis, EDM, F1, swimming (in the ocean), and advocating for better urban design policies<br />
        </p>
        <div className="flex space-x-6 mt-6">
          <a href="https://github.com/mehta-avi" target="_blank" rel="noopener noreferrer"><AiOutlineGithub size={42} /></a>
          <a href="https://www.linkedin.com/in/mehtavi/" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin size={42} /></a>
          <a href="mailto:avimehta9@gmail.com"><AiOutlineMail size={42} /></a>
          <a href="https://open.spotify.com/user/mehta_avi?si=3c38b7d92d274d05" target="_blank" rel="noreferrer"><RiSpotifyLine size={42} /></a>
        </div>
      </div>
    </section>
  );
}
