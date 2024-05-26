import React from "react";
import headphones from "../../Assets/vibrating-headphone 1.svg";
import styles from './Hero.module.css';
import { Box, Grid, Typography } from '@mui/material';

function Hero() {
    return (
        <Box className={styles.hero}>
            <Grid container className={styles.heroBox} spacing={2} alignItems={"center"} justifyContent={"center"}>
                <Grid item xs={8} className={styles.textBox}>
                    <div>
                        <Typography className={styles.heroText} variant="p">
                            100 Thousand Songs, ad-free
                            <br />
                            Over thousands podcast episodes
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={4} className={styles.heroImage}>
                    <div>
                        <img src={headphones} alt="Vibrating Headphones" />
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Hero;
