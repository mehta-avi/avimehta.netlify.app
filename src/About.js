// About.js

import React from 'react';
import CityFlipBoard from './CityFlipBoard';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail} from "react-icons/ai";
import { RiSpotifyLine } from "react-icons/ri"


const About = () => {
  const red_poly_style = {
    backgroundColor: '#cc6969',
    clipPath: 'polygon(100% 0, 100% 51%, 100% 100%, 25% 100%, 0 50%, 25% 0)',
    position: 'absolute',
    right: 0,
    top: 0,
    width: '50%', // Set the desired width of the hexagonal shape
    height: '100%', // Set the desired height of the hexagonal shape
  };

  return (
    <div className="bg-slate-50 text-white py-14 px-12">
      <div className='i flex justify-between items-center'>
        <div className="i-left">
          <div className="max-w-4xl mt-20">
            {/* font-publica-ultralight    */}
            <h2 className="text-black pb-14 text-left text-2xl font-sans">Hi, my name is</h2> 
            <h2 className="text-4xl font-bold tracking-tight pb-10 text-black sm:text-6xl text-left">Avi Mehta</h2>
            <div className="max-w-2xl">
              <p className="text-black mt-10 pb-10 text-lg text-left">
                  It's nice to meet you. I'm passionate about solving real-world problems using computer science and engineering with interests in all things tech, financial technology, startups, and sustainability. I aspire to develop technology that can improve people's lives.
              </p>
            </div>
            <div className='flex max-w-xs space-x-3 text-black pb-5'>
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
            <div className='i-left-minibg'>
              <CityFlipBoard />
            </div>

          </div>
        </div>
        <div className='i-right'>
          <div className='i-right-bg'style={red_poly_style}></div>
          <img src="pylons_pic.jpg" alt="Portrait" style={{width:'535px', height:'820px', position: 'relative', zIndex: 1, borderRadius:'14px'}}/>
        </div>
      </div>

      <div className='w-full mt-20 justify-center'>
        <div className='w-6/12 mx-auto'>
          <h2 className='text-black text-4xl text-center pt-32'> Get to know me! </h2>
            <p className="text-black text-lg text-center py-5 mx-auto">
              I work full-time as an IT Auditor at Truist Financial Corporation. I graduated Cum Laude from&nbsp;
              <a href="https://www.vt.edu/" target="_blank" rel="noreferrer" className="font-semibold">
                <span style={{ color: "#861F41" }}>Virginia</span>
                <span style={{ color: "#E87722" }}> Tech</span>
              </a>{" "}
                  in Blacksburg, VA, with a Bachelor's degree in Computer Science in 2023. I am deeply fascinated by cutting-edge technology and thrive on solving complex problems. As an enthusiastic developer, I actively seek out new challenges to continuously push my skills to the next level.
            </p>
              <div className='pt-2'>
              <button onClick={() => window.open("AviMehtaResume.pdf", "_blank")} className="bg-orange-500 text-white py-3 px-5 rounded-md hover:bg-orange-600">
                Download Resume (PDF)
              </button>
            </div>
        </div>
          <div className="flex justify-center mt-10">
            <div className="w-1/4 p-4">
            <h1 className="text-3xl font-bold pb-5 text-[#cc6969]">Hobbies</h1>              
            <p className="text-black text-xl pb-3 font-sans">You can find me:</p>
              <ul className="text-black">
                <li>Traveling</li>
                <li>Creating spotify playlists</li>
                <li>Advocating for better urban design policies</li>
                <li>Watching Formula 1</li>
                <li>Swimming in the ocean</li>
                <li>Playing soccer</li>
              </ul>
            </div>
            <div className="w-1/4 p-4">
              <h1 className="text-3xl font-bold text-[#cc6969] pb-5">Experience</h1>
              <p className="text-black text-xl pb-3">Here are some of my previous roles:</p>
              <ul className="text-black">
                <li>Virginia Tech Instructional Aide Staff</li>
                <li>Undergraduate Researcher</li>
                <li>Account Manager at CGVT</li>
                <li>Technology Consultant at CGVT</li>
                <li>Software Engineer Intern at Blankly Finance</li>
                <li>Software Engineer Intern at Brands on Road</li>
              </ul>
            </div>
            <div className="w-1/4 p-4">
              <h2 className='text-3xl font-bold text-[#cc6969] pb-5'>Music</h2>
              <p className='text-black text-xl pb-3'>Some of my favorite genres are:</p>
              <ul className="text-black">
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