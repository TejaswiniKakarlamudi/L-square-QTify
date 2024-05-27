import React from "react";
import headphones from "../../Assets/vibrating-headphone 1.svg";
import styles from './Hero.module.css';
import { Box, Grid } from '@mui/material';

function Hero() {
    return (
        <Box sx={{
            marginTop: '10px',
            marginX: '10vw',
        }}>
            <Grid container spacing={5} alignItems="center" justifyContent="center" className={styles.heroBox}>
                <Grid item style={{ width: '60%',}} className={styles.textBox}>
                    <div>
                        <h1 className={styles.heroText}>
                            100 Thousand Songs, ad-free
                            <br />
                            Over thousands podcast episodes
                        </h1>
                    </div>
                </Grid>
                <Grid item style={{ width: '40%',}} >
                    <div className={styles.heroImage}>
                        <img src={headphones} alt="Vibrating Headphones" sx={{ width: '200px', height: '200px', marginY:'2px',}} />
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Hero;
