import React from 'react';
import { Link } from 'react-router-dom';
import Img from 'react-cool-img';
import loadingImage from '../../components/loader.gif';
import errorImage from '../../components/error.jpg';



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
<Img   src={`${item.links.flickr_images[0]}`}  alt="SpaceX"
placeholder={loadingImage}  error={errorImage}  
/>
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
