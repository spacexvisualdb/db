import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AlbumList from './albumList';

const REQ_URL = 'https://api.spacexdata.com/v3/launches';

const Artist = props => {
  const [artist, setArtist] = useState('');
  useEffect(() => {
    axios
      .get(`${REQ_URL}/${props.match.params.flight_number}`)
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
    
      <div className='artist_bio'>
        <div>
          <Link to={`/${artist.flight_number - 1}`}>Previous Artist</Link>
          <span>/</span>
          <Link to={`/${artist.flight_number + 1}`}>Next Artist</Link>
        </div>
        <div className='avatar'>
          <span
            style={{
              background: ` url("/images/covers/${artist.cover}.jpg") no-repeat`
            }}
          ></span>
        </div>
      </div>
      <div className='artist_bio'>
        <h3>{artist.mission_name}</h3>
        <div className='bio_text'> {artist.details} </div>
      </div>
            
      <AlbumList albumList={artist} />
    </>
  );

};
export default Artist;
