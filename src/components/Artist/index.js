import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AlbumList from './albumList';

const REQ_URL = 'https://api.spacexdata.com/v3/launches';

const Flight = props => {
  const [artist, setArtist] = useState('');
  useEffect(() => {
    axios
      .get(`${REQ_URL}/${props.match.params.flightId}`)
      .then(response => {
        setArtist(response.data);
      })
      .catch(err => {
        props.history.push('/');
      });
  }, [props]);
  //buraya link verince id değişiyor ama sayfa yenilenmiyor.[] bunun içine props yazınca propstaki değişime göre triggerlancak.component yenilencek
  
  return (
  
    <>
    <span className="blackbar"></span>
     
      <div className='artist_bio'>
     <div className="bio_top">
     <h3>{artist.mission_name}</h3>
      <div className="bio_nav">
          <Link to={`/${artist.flight_number - 1}`}>Previous</Link>
          <span>/</span>
          <Link to={`/${artist.flight_number + 1}`}>Next </Link>
        </div>
     </div>
       
        <h5>{artist.details}</h5> 
      </div>
     
      <AlbumList albumList={artist} />
    </>
  );

};
export default Flight;
