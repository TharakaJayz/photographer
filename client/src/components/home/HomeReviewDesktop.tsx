import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
interface Props {

}

const HomeReviewDesktop = (props: Props) => {
    return (
        <div className='w-full border flex items-center justify-center'>

            <Swiper
             loop={true}
                pagination={{
                    type: 'fraction',
                }}
               
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper h-vh80 w-p90"
            >
                <SwiperSlide className='h-p100'>
                    <div className='w-full h-full  relative flex items-center'>
                        <section className='w-full h-p80 border border-gray-700  bg-green-500'>
                            
                             
                             </section>
                        <section className='w-full h-full absolute top-0 right-0 border-2 border-red-500 flex items-center px-vw2 '> 
                        
                        <div className='flex '>
                            <section className='flex items-start'>
                                <span>"</span>
                                <div>
                                    <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.</p>
                                    <h1>Randi & Ishan</h1>
                                </div>
                            </section>
                            <section>image div</section>
                        </div>
                         </section>
                    </div>
                </SwiperSlide>
                
               
            </Swiper>

        </div>
    )
}

export default HomeReviewDesktop
