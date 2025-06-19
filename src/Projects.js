import React from 'react';
import { Link } from "react-router-dom";
import Nav from "./Nav";


const Projects = () => {
    const projects = [
        {
          title: 'MoodSync',
          short_description: 'An emotion-based AI spotify music player',
          type: 'Hackathon',
          projectURL: 'https://github.com/mehta-avi/MoodSync',
        },
        {
          title: 'WebNotes',
          short_description: 'A private journal hosted on the Internet',
          type: 'Fullstack Development',
          projectURL: 'https://github.com/mehta-avi/WebNotes',
        },  
        {
          title: 'ChefMeUp',
          short_description: "A mobile app which tackles food-insecurity by finding affordable groceries and recipes based on the user's zip code",
          type: 'Fullstack Development',
          projectURL: 'https://github.com/Aeonss/ChefMeUp',
        },
        {
          title: 'Manajira',
          short_description: 'An agile project management workflow organizer',
          type: 'Fullstack Development',
          projectURL: 'https://github.com/mehta-avi/projectManager',
        },
        {
          title: 'FindMeParking',
          short_description: "An AI-based parking recommender factoring in the user's current location",
          type: 'Fullstack Development',
          projectURL: 'https://github.com/avocados23/capstone-spring2023',
        },
        {
          title: 'Custom Memory Manager',
          short_description: 'A custom multi-threaded dynamic storage allocator. Code available upon request',
          type: 'Distributed Systems',
        },
        {
          title: 'Unix Shell',
          short_description: 'A custom multi-functional unix shell. Code available upon request',
          type: 'Compilers',
        },
      ];    


    return (
        <section className="flex justify-center">
          <div className="w-full max-w-2xl py-20 px-4">
          <Nav />
          {/*
            <nav className="mb-8 flex space-x-6 text-gray-500 text-base">
                <Link to="/" className="hover:underline">home</Link>
                <Link to="/experience" className="hover:underline">experience</Link>
                <Link to="/projects" className="hover:underline">projects</Link>
            </nav>
            */}
            <h2 className="text-2xl font-bold mb-8">Projects</h2>
            <ul className="space-y-6">
                {projects.map((project, idx) => (
                    <li key={idx} className="border rounded p-4 hover:shadow transition">
                        <a href={project.projectURL} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:underline">
                            {project.title}
                        </a>
                        <div className="text-gray-600">{project.type}</div>
                        <div className="text-gray-600">{project.short_description}</div>

                    </li>
                ))}
            </ul>
            </div>
        </section>
    );
};
  
export default Projects;