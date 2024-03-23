import React from 'react'
import ImageSlider from '../components/ImageSlider'
import { images } from '../assets/Images'

interface Props {
    
}

const Home = (props: Props) => {
    return (
        <div className='w-full '>
            <ImageSlider  images={images} />
        </div>
    )
}

export default Home

