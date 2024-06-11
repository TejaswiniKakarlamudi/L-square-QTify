import React, { useState } from 'react';
import styles from './Section.module.css';
import Cards from '../Card/Card';
import { CircularProgress, Grid } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination } from 'swiper';
SwiperCore.use([Navigation, Pagination]);

function Section({ title, type, data }) {
    const [Toggle, setToggle] = useState(true);
    const [selectedGenre, setSelectedGenre] = useState('All');
    const handleToggle = () => {
        setToggle((prevState) => !prevState);
    };

    const handleMenu = (event, value) => {
        // we have songs of different genres
        // we need to add the filter function so we can display them based on the menu item selected
        // we need to create a filter function 
        // have the value as All by default
        // then set the value based on the item chosen and call the filter function when changed
        // const [item, setItem ]= useState('All');? how can we set the value in default to all
        setSelectedGenre(value);
    }

    let filteredData = data;

    if (type === 'songs') {
        filteredData = data.filter((item) => {

        if (selectedGenre === 'All') return true;
        return item.genre.key === selectedGenre;
        });
    }

    return (
        
        <div className={styles.section}>
            
            {
                type==='album'? (
                    <div className={styles.header}>
                        <h4>{title}</h4>
                        <h6>
                            <button className={styles.toggleText} onClick={handleToggle}>
                                {!Toggle ? "Collapse All" : "Show All"}
                            </button>
                        </h6>
                    </div>

                ):( <>
                    <div className={styles.header}>
                    <h4>{title}</h4>
                    </div>
                        <Tabs
                            value={selectedGenre}
                            onChange={handleMenu}
                            sx={{
                            '& .MuiTab-root': {
                            color: 'var(--color-white)',
                            },
                            '& .MuiTab-root.Mui-selected': {
                            color: 'var(--color-white)',
                            },
                            '& .MuiTabs-indicator': {
                            backgroundColor: 'var(--color-primary)',
                            },
                        }}
                            aria-label=" label tabs example"
                            
                            >
                                <Tab  value={'All'} label="All" />
                                <Tab  value={'rock'} label="Rock" />
                                <Tab  value={'pop'} label="Pop" />
                                <Tab  value={'jazz'} label="Jazz" />
                                <Tab  value={'blues'} label="Blues" />
                        </Tabs>
                    </>
                )
            }
            <div>
                {!data? (
                    <div className={styles.loading}>
                        <CircularProgress style={{ color: 'var(--color-primary)' }} />
                    </div>
                ) : (
                    <div className={styles.cardWrapper}>
                        {!Toggle ? (
                            <div className={styles.wrapper}>
                                    {data.map((slideContent) => (
                                            
                                        <Cards type={type} data={slideContent} />
                                            
                                    ))}
                             </div>  
                        ) : (
                            <Swiper 
                                spaceBetween={40}
                                initialSlide={0}
                                modules={[Navigation]} 
                                slidesPerView={'6'}
                                navigation={true}
                                allowTouchMove
                                loop={true}
                                className="mySwiper"
                                style={{ padding: '0px 20px' }}
                                >
                                {filteredData.map((slideContent, index) => (
                                    <SwiperSlide key={index}>
                                    <Cards type={type} data={slideContent} />
                                    </SwiperSlide>
                                ))}
                                </Swiper>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
};

export default Section;
