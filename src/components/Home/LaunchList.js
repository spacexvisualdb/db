import React from 'react';
import { Link } from 'react-router-dom';

const LaunchList = ({ allLaunchs }) => {
  console.log(allLaunchs)
  const list = values =>
    values
      ? values.slice(0).reverse().map(item => (
          <Link
            key={item.flight_number}
            to={`/${item.flight_number}`}
            
           
          >
<div className="card">
<img   src={`${item.links.flickr_images[0]}`} onError={(e)=>{e.target.onerror = null; e.target.src="https://forum.affinity.serif.com/uploads/monthly_2018_06/metin-seven_2d-vector-graphic-illustrator-illustrations_spacex-rocket-poster.png.c04cda6f8b7883a5b846c94f8d6a4498.png"}}  alt="Avatar"/>
              <div className="container">
    <p>{item.flight_number}</p> 
  </div>
</div>
      
          </Link>
        ))
      : null;

  return (
    <div className='launch_list'>
      
      <div className='launch_container'>{list(allLaunchs)}</div>
    </div>
  );
};

export default LaunchList;
