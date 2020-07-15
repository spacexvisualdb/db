import React from 'react';

const Banner = ({nextLaunch}) => {
  const name = ((nextLaunch || {}).rocket || {}).rocket_name;
  let nextlaunchdate=`${nextLaunch.last_wiki_launch_date}`;
  let deli=nextlaunchdate.split("T")[0].split('-').reverse().join('-  ');
  
  return (
    <div className='banner'>
      <div className='main_cover'>
        <div className='logo'>
          <div className="card-left">
          <span>LATEST LAUNCH</span>
          </div>
         <div className="card-right">
         <div>
         <span>FLIGHT NUMBER</span>
         <span>{nextLaunch.flight_number}</span>
         </div>
         <div>
         <span>MISSION</span>
         <span>{nextLaunch.mission_name}</span>
         </div>   
          <div>
         <span>ROCKET NAME</span>
         <span>{name}</span>
         </div>
         <div>
         <span>LAUNCH DATE</span>
         <span>{deli}</span>
         </div>
         </div>
        </div>
      </div>
    
    </div>
  );
};
export default Banner;
