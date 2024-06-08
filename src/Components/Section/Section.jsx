import React, { useState } from 'react';
import Styles from './Section.module.css';
import Cards from '../Card/Card';
import { CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination } from 'swiper';
SwiperCore.use([Navigation, Pagination]);

function Section({ title, type, data }) {
    const [Toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle((prevState) => !prevState);
    };

    // console.log('Data in Section component:', data);

    return (
        <div className={Styles.section}>
            <div className={Styles.header}>
                <h4>{title}</h4>
                <h6>
                    <button className={Styles.toggleText} onClick={handleToggle}>
                        {!Toggle ? "Collapse All" : "Show All"}
                    </button>
                </h6>
            </div>
            <div>
                {data.length === 0 ? (
                    <div className={Styles.loading}>
                        <CircularProgress style={{ color: 'var(--color-primary)' }} />
                    </div>
                ) : (
                    <div className={Styles.cardWrapper}>
                        {!Toggle ? (
                            <div>
                                {data.map((slideContent, index) => (
                                        
                                     <Cards type={type} data={slideContent} />
                                        
                                ))}
                            </div>
                        ) : (
                            <Swiper spaceBetween={8} slidesPerView={8}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            loop={true}
                            className="mySwiper">
                                {data.map((slideContent, index) => (
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
