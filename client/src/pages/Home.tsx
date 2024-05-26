
import ImageSlider from '../components/home/ImageSlider'
import HomeMemory from '../components/home/HomeMemory'
import HomeService from '../components/home/HomeService'
import HomeSwiper from '../components/home/HomeSwiper'
import HomeReview from '../components/home/HomeReview'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface Props {
    
}


const Home = (props: Props) => {

    const [images,setImages] = useState([]);

    
const getHomeImages = async()  =>{

    try {

        const imagesHome:any = await axios.get("http://localhost:8080/home/get_home_slider");
        setImages(imagesHome.data);
        console.log("homeImages",imagesHome.data);
        
    } catch (error) {
        
    }

}

useEffect(() => {
   
    getHomeImages();

}, [])
    return (
        <div className='w-full flex flex-col'>
            <ImageSlider  images={images} /> 
             <HomeMemory  />
             <HomeService />
             {/* <HomeSwiper/> */}
             {/* <HomeReview /> */}
        </div>
    )
}

export default Home

