import React from 'react'
import { useSwiper } from 'swiper/react';
import { useState } from 'react';

function CarouselLeft() {

  const swiper = useSwiper();
  const [isBeginning, setisBeginning] = useState(swiper.isBeginning);
  
  return (
    
    <div>
      
    </div>
  )
}

export default CarouselLeft;
