import React from 'react';

const Projects = () => {
    const projects = [
        {
          title: 'MoodSync',
          short_description: 'An emotion-based AI spotify music player',
          long_description: '',
          imageUrl: 'logos/moodsync.jpg',
          projectURL: 'https://github.com/mehta-avi/MoodSync',
        },
        {
          title: 'WebNotes',
          short_description: 'A private journal hosted on the Internet',
          long_description: '',
          imageUrl: 'logos/WebNotes.jpg',
          projectURL: 'https://github.com/mehta-avi/WebNotes',
        },  
        {
          title: 'ChefMeUp',
          short_description: "A mobile app which tackles food-insecurity by finding affordable groceries and recipes based on the user's zip code",
          long_description: '',
          imageUrl: 'logos/ChefMeUp.jpg',
          projectURL: 'https://github.com/Aeonss/ChefMeUp',
        },
        {
          title: 'Manajira',
          short_description: 'An agile project management workflow organizer',
          long_description: '',
          imageUrl: 'logos/manajira.jpg',
          projectURL: 'https://github.com/mehta-avi/projectManager',
        },
        {
          title: 'FindMeParking',
          short_description: "An AI-based parking recommender factoring in the user's current location",
          long_description: '',
          imageUrl: 'logos/FMP.jpg',
          projectURL: 'https://github.com/avocados23/capstone-spring2023',
        },
        {
          title: 'ShortLR',
          short_description: "A URL shortener",
          long_description: '',
          imageUrl: 'logos/shortlr.jpg',
          projectURL: 'https://github.com/mehta-avi/ShortLR'
        },
        {
          title: 'Custom Memory Manager',
          short_description: 'A custom multi-threaded dynamic storage allocator. Code available upon request',
          long_description: '',
          imageUrl: 'logos/malloc.jpg',
        },
        {
          title: 'Unix Shell',
          short_description: 'A custom multi-functional unix shell. Code available upon request',
          long_description: '',
          imageUrl: 'logos/cush.jpg',
        },
      ];    

      // const circle_poly_style = {
      //   backgroundColor: '#339696',
      //   clipPath: 'circle(31.6% at 91% 93%)',
      //   position: 'absolute',
      //   width: '80%', 
      //   height: '83.8%',
      //   right: 0,
      // };

    return (
        
        <div className="text-black bg-slate-50 ">
            {/* <div className='i-circle-bg'style={circle_poly_style}></div>       */}
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
                        <p className="text-sm">{project.short_description}</p>
                        </div>
                    ))}
              </div>
          </div>
      </div>
  );
};
  
export default Projects;