// CityFlipBoard.js
import React from 'react';
import './CityFlipBoard.css'

const cities = [
  {name: 'B'},
  {name: 'A'},
  {name: 'N'},
  {name: 'G'},
  {name: 'K'},
  {name: 'O'},
  {name: 'K'},
]
const cities2 = [
  {name: 'B'},
  {name: 'L'},
  {name: 'A'},
  {name: 'C'},
  {name: 'K'},
  {name: 'S'},
  {name: 'B'},
  {name: 'U'},
  {name: 'R'},
  {name: 'G'},
]
const cities3 = [
  {name: 'C'},
  {name: 'H'},
  {name: 'A'},
  {name: 'R'},
  {name: 'L'},
  {name: 'O'},
  {name: 'T'},
  {name: 'T'},
  {name: 'E'},
]

const CityFlipBoard = () => {

  const gray_poly_style = {
    backgroundColor: '#6C6C6C',
    clipPath: 'polygon(0 81%, 60% 81%, 81% 100%, 0% 100%)',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '35%', 
    height: '100%',
  };
  
  return (
    <div className='mt-5 pt-10 '>     
      <div className="flip-board mt-10 pt-24" style={{position: 'relative', zIndex: 1}}>
        {cities.map((city, index) => (
          <div className="flip-board-item" key={city.name} style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flip-board-content">
                <span className='font-helvetica'>{city.name}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flip-board pt-0.5" style={{position: 'relative', zIndex: 1}}>
        {cities2.map((city, index2) => (
          <div className="flip-board-item" key={city.name} style={{ animationDelay: `${index2 * 100}ms` }}>
            <div className="flip-board-content">
                <span className='font-helvetica'>{city.name}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flip-board pt-0.5" style={{position: 'relative', zIndex: 1}}>
        {cities3.map((city, index3) => (
          <div className="flip-board-item" key={city.name} style={{ animationDelay: `${index3 * 100}ms` }}>
            <div className="flip-board-content">
                <span className='font-helvetica'>{city.name}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className='i-right-bg'style={gray_poly_style}></div>      

    </div>
  );
};

export default CityFlipBoard;