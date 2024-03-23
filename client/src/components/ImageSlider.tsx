import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';

interface Props {
    images:string[]
    
}

const ImageSlider = ({images}: Props) => {
    return (
        <div className='w-full '>

<Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper border w-full"
      >
        {images.map((singleImage)=>(

        <SwiperSlide> <img src= {singleImage} alt='image' className='h-vh90 w-full ' /></SwiperSlide>
        ))}
        
      </Swiper>
            
        </div>
    )
}

export default ImageSlider
