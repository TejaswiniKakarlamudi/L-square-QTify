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

  const generateData = async () => {
    try {
      const topAlbumsData = await fetchTopAlbums();
      const newAlbumsData = await fetchNewAlbums();
      const songsData = await FetchSongs();

      setData({
        topAlbums: topAlbumsData,
        newAlbums: newAlbumsData,
        songs: songsData,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateData();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      {loading ? (
        <CircularProgress className={Styles.loadingIndicator}/>
      ) : (
        <>
          <Section title="Top Albums" data={data.topAlbums} type= 'album' />
          <Section title="New Albums" data={data.newAlbums} type="album" />
          {/* Uncomment the line below once you have a Section component for songs */}
          {/* <Section title="Songs" data={data.songs} type="songs" /> */}
        </>
      )}
    </div>
  );
}

export default HomePage;
