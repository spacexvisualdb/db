import React from 'react';


const AlbumList = ({ albumList }) => {

    const showlist = albums =>
    albums
      ? albums.links.flickr_images.map((item, i) => (
 
          //{} olsaydı fonskiyon döndürürdü. () olduğu için jsx döndürüyor
      <img class='flight-card' key={i} alt="spacexlaunchimage" src={`${item}`}/>
        
        )
        
        )
      : console.log("aşlksdla");
      
    
  return (
    <>

      
    <section className='flight_images_container'>{showlist(albumList)}</section>
  
      
    </>
  );
 
};
export default AlbumList;