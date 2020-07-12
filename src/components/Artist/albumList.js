import React from 'react';

const AlbumList = ({ albumList }) => {

  const showlist = albums =>
    albums
      ? albums.links.flickr_images.map((item, i) => (
       
          //{} olsaydı fonskiyon döndürürdü. () olduğu için jsx döndürüyor
          
          <a
          className='artist_item'
          style={{ background: `url(${item})`}}
            key={i}
            alt='album_cover'
          />
        
        ))
      : console.log("aşlksdla");
  return (
    <>
    <div className='artists_list'>
      
    <div className='artist_container'>{showlist(albumList)}</div>
  </div>
      
    </>
  );
};
export default AlbumList;
