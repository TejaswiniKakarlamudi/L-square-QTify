import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Section from '../Components/Section/Section';
import Hero from '../Components/Hero/Hero';
import { fetchTopAlbums, fetchNewAlbums, FetchSongs } from '../Api/Api.js';
import { CircularProgress } from '@mui/material';
import Styles from './HomePage.module.css';

function HomePage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [request, setRequest] = useState(true);

  const generateData = async (key, source) => {
    try {
      const sourceData = await source();
      // const newAlbumsData = await fetchNewAlbums();
      // const songsData = await FetchSongs();

      setData(prevData => ({
        ...prevData,
        [key]: sourceData,
      }));
  
    } catch (error) {
      console.error('Error fetching data:', error);
      setRequest(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateData('topAlbums',fetchTopAlbums);
    generateData('songs',FetchSongs);
    generateData('newAlbums',fetchNewAlbums);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      {loading ? (
        <CircularProgress className={Styles.loadingIndicator}  style={{ color: 'var(--color-primary)' }}/>
      ) :!loading && !request ? (
          <div className={Styles.none}>
            No Songs Found, try later....
          </div>
        
      ):(
        <>
    {data.topAlbums && (
      <Section title="Top Albums" data={data.topAlbums} type="album" />
    )}
    {data.newAlbums && (
      <Section title="New Albums" data={data.newAlbums} type="album" />
    )}
    {data.songs && (
      <Section title="Songs" data={data.songs} type="songs" />
    )}
  </>
      )}
    </div>
  );
}

export default HomePage;
