import React from 'react';

const Projects = () => {
    const projects = [
        {
          title: 'MoodSync',
          description: 'An emotion-based AI spotify music player',
          imageUrl: 'logos/moodsync.jpg',
          projectURL: 'https://github.com/mehta-avi/MoodSync',
        }, 
        {
          title: 'ChefMeUp',
          description: "A cross-platform app aimed to tackle food-insecurity by finding affordable groceries and recipes based on the user's zip code",
          imageUrl: 'logos/ChefMeUp.jpg',
          projectURL: 'https://github.com/Aeonss/ChefMeUp',
        },
        {
          title: 'Manajira',
          description: 'An agile project management workflow organizer',
          imageUrl: 'logos/manajira.jpg',
          projectURL: 'https://github.com/mehta-avi/projectManager',
        },
        {
          title: 'FindMeParking',
          description: "An AI-based parking recommender factoring in the user's current location",
          imageUrl: 'logos/FMP.jpg',
          projectURL: 'https://github.com/avocados23/capstone-spring2023',
        },
        {
          title: 'ShortLR',
          description: "A URL shortener",
          imageUrl: 'logos/shortlr.jpg',
          projectURL: 'https://github.com/mehta-avi/ShortLR'
        },
        {
          title: 'Custom Memory Manager',
          description: 'A custom multi-threaded dynamic storage allocator. Code available upon request',
          imageUrl: 'logos/malloc.jpg',
        },
        {
          title: 'Unix Shell',
          description: 'A custom multi-functional unix shell. Code available upon request',
          imageUrl: 'logos/cush.jpg',
        },
      ];    

    return (
        <div className="bg-slate-500 text-white ">
            <div className='items-start'>
                <h2 className='text-4xl pt-1'> Projects </h2>
                <div className="max-w-6xl mx-auto py-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white hover:bg-slate-300 rounded-lg shadow-md p-2 sm:p-3 text-gray-800">
                        <a href={project.projectURL} target="_blank" rel="noopener noreferrer">
                        <img
                            src={project.imageUrl}
                            alt= ""
                            className="w-full h-48 object-cover mb-4 "
                        />
                        </a>
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-sm">{project.description}</p>
                        </div>
                    ))}
        </div>
      </div>
    </div>
  );
};
  
export default Projects;