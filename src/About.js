// About.js

import React from 'react';
import CityFlipBoard from './CityFlipBoard';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail} from "react-icons/ai";
import { RiSpotifyLine } from "react-icons/ri"


const About = () => {
  return (
    <div className="bg-slate-500 text-white py-14 px-12">
      <div className="max-w-2xl">
        <p className='text-white py-10 text-2xl first-letter:font-publica-ultralight text-left'> Hi, my name is</p>
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-left">Avi Mehta</h2>
        <p className="mt-10 pb-10 text-lg text-left">
            It's nice to meet you. I'm passionate about solving real-world problems using computer science and engineering with interests in all things tech, financial technology, startups, and sustainability. I aspire to develop technology that can improve people's lives.
        </p>
        <div className='flex space-x-3 text-slate-200 transition-all ease-in-out pb-5'>
        <a href="https://github.com/mehta-avi" target="_blank" rel="noreferrer">
        <AiOutlineGithub size={42}/>
        </a>
        <a href="https://www.linkedin.com/in/mehtavi/" target="_blank" rel="noreferrer">
        <AiOutlineLinkedin size={42}/>
        </a>
        <a href="mailto:avimehta9@gmail.com" target="_blank" rel="noreferrer">
        <AiOutlineMail size={42}/>
        </a>
        <a href="https://open.spotify.com/user/mehta_avi?si=3c38b7d92d274d05" target="_blank" rel="noreferrer">
        <RiSpotifyLine size={42}/>
        </a>
        </div>
      </div> 
      <CityFlipBoard /> 
      <div className='w-full'>
        <h2 className='text-4xl text-center pt-16'> About Me </h2>
        <p className="text-lg text-center pt-5 mx-auto max-w-xl">
         I work full-time as an IT Auditor at Truist Financial Corporation. I graduated Cum Laude from&nbsp;
        <a href="https://www.vt.edu/" target="_blank" rel="noreferrer" className="font-semibold">
          <span style={{ color: "#861F41" }}>Virginia</span>
          <span style={{ color: "#E87722" }}> Tech</span>
        </a>{" "}
            in Blacksburg with a Bachelor's degree in Computer Science in 2023. I am deeply fascinated by cutting-edge technology and thrive on solving complex problems. As an enthusiastic developer, I actively seek out new challenges to continuously push my skills to the next level.
            View 
        <a href="AviMehtaResume.pdf" className='italic hover:text-black' target='_blank' rel='nonreferrer'> Resume</a>
        </p>
          <div className="flex justify-center mt-10">
            <div className="w-1/4 bg-slate-500 p-4">
            <h1 className="text-3xl font-bold pb-5 text-yellow-200">Hobbies</h1>              
            <p className="text-xl pb-3 font-sans">You can find me:</p>
              <ul>
                <li>Traveling</li>
                <li>Creating spotify playlists</li>
                <li>Advocating for better urban design policies</li>
                <li>Watching Formula 1</li>
                <li>Swimming in the ocean</li>
                <li>Playing soccer</li>
              </ul>
            </div>
            <div className="w-1/4 bg-slate-500 p-4">
              <h1 className="text-3xl font-bold text-yellow-200 pb-5">Experience</h1>
              <p className="text-xl pb-3">Here are some of my previous roles:</p>
              <ul>
                <li>Virginia Tech Instructional Aide Staff</li>
                <li>Undergraduate Researcher</li>
                <li>Account Manager at CGVT</li>
                <li>Technical Consultant at CGVT</li>
                <li>Software Engineer Intern at Blankly</li>
                <li>Software Engineer Intern at Brands on Road</li>
              </ul>
            </div>
            <div className="w-1/4 bg-slate-500 p-4">
              <h2 className='text-3xl font-bold text-yellow-200 pb-5'>Music</h2>
              <p className='text-xl pb-3'>Some of my favorite genres are:</p>
              <ul>
                <li>EDM</li>
                <li>House</li>
                <li>Pop</li>
                <li>Techno</li>
                <li>International music</li>
                <li>Jazz</li>
              </ul>
            </div>
          </div>
      </div>
    </div>    
  );
};

export default About;