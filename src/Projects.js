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
          short_description: 'A GraphQL-based agile project management and workflow organizer',
          type: 'Fullstack Development',
          projectURL: 'https://github.com/mehta-avi/projectManager',
        },
        {
          title: 'FindMeParking',
          short_description: "An AI-powered parking prediction system using time-series forecasting to recommend optimal parking spots based on the user's current location",
          type: 'Fullstack Development',
          projectURL: 'https://github.com/avocados23/capstone-spring2023',
        },
        {
          title: 'Custom Memory Manager',
          short_description: 'A custom multi-threaded dynamic storage allocator.',
          type: 'Distributed Systems',
          projectURL: 'https://github.com/mehta-avi/memoryManager',
        },
        {
          title: 'Unix Shell',
          short_description: 'A custom multi-functional unix shell.',
          type: 'Compilers',
          projectURL: 'https://github.com/mehta-avi/UnixShell',
        },
      ];    


    return (
        <section className="flex justify-center min-h-screen">
          <div className="w-full max-w-2xl py-20 px-4">
          <Nav />

            <h2 className="text-2xl font-bold mb-8">Projects</h2>
            <ul className="space-y-6">
                {projects.map((project, idx) => (
                    <li key={idx} className="border rounded p-4 hover:shadow transition">
                        <a href={project.projectURL} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-black hover:underline">
                            {project.title}
                        </a>
                        <div className="font-mono text-sm text-orange-600 py-1 mb-1 rounded ">{project.type}</div>
                        <div className="text-gray-600">{project.short_description}</div>

                    </li>
                ))}
            </ul>
            </div>
        </section>
    );
};
  
export default Projects;