import React from 'react';
import { Card, CardMedia, CardContent, Chip, Typography, Tooltip } from '@mui/material';
import styles from './Card.module.css';

function Cards({ type, data }) {

    console.log('type card', type);
    console.log('data card', data);
  const getCard = (type,data)=>{
    switch(type){
      case 'album':{
        const {slug, songs, image,follows,title} = data;
        console.log('title card', title);
        console.log('type card' , type);
        console.log('data card', data);
        return (
          <Card className={styles.card} sx={{ bgcolor: 'var(--color-black)'}}>
          <Tooltip title={`${songs.length} songs`} placement="top" arrow >
            <a href={`/album/${slug}`}>
             
                <div className={styles.imageContainer} style={{ width:'159px', height:'205px', borderRadius: '10px' }}>
                  <CardMedia
                    component="img"
                    alt="Vibrating Headphones"
                    image={image}
                    className={styles.cardImage}
                  />
                  <div className={styles.cardChip} style={{ backgroundColor: 'var(--color-white)'}}>
                    <Chip label={`${follows} Follows`} className={styles.chip} sx={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)', height:'22px' }} />
                  </div>
                </div>
                <CardContent className={styles.cardText} sx={{ width:'159px', height:'30px', bgcolor:'var(--color-black)', color:'var(--color-white)', textAlign:'left', }}>
                  <Typography gutterBottom variant="p" component="div">
                    {title}
                  </Typography>
                </CardContent>
              
            </a>
          </Tooltip>
          </Card>
        );
      }
      case 'songs': {
        const {image,likes,title,slug} = data;
        return(
          <a href={`/album/${slug}`}>
          <Card className={styles.card} sx={{ bgcolor: 'var(--color-black)'}}>
            <div className={styles.imageContainer} style={{ width:'159px', height:'205px',borderRadius: '10px' }}>
              <CardMedia
                component="img"
                alt="Vibrating Headphones"
                image={image}
                className={styles.cardImage}
              />
              <div className={styles.cardChip} style={{ bgcolor: 'var(--color-black)'}}>
                <Chip label={`${likes} Likes`} className={styles.chip} sx={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)', height:'22px' }} />
              </div>
            </div>
            <CardContent className={styles.cardText}sx={{ width:'159px', height:'30px', bgcolor:'var(--color-black)', color:'var(--color-white)', textAlign:'left', }}>
                  <Typography gutterBottom variant="p" component="div">
                {title}
              </Typography>
            </CardContent>
          </Card>
        </a>
        )
      }
      default:return (
        <Card className={styles.card} sx={{ bgcolor: 'var(--color-black)' }}>
            <CardContent className={styles.cardText} sx={{ width: '159px', height: '30px', bgcolor: 'var(--color-black)', color: 'var(--color-white)', textAlign: 'left' }}>
                <Typography gutterBottom variant="p" component="div">
                    Default Content
                </Typography>
            </CardContent>
        </Card>
    );

      }      

    }

    return getCard(type,data);
  }
  
export default Cards;
