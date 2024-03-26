
import ImageSlider from '../components/home/ImageSlider'
import { homeMemoryImage, images } from '../assets/Images'
import HomeMemory from '../components/home/HomeMemory'
import HomeService from '../components/home/HomeService'

interface Props {
    
}

const Home = (props: Props) => {
    return (
        <div className='w-full flex flex-col'>
            <ImageSlider  images={images} /> 
             <HomeMemory  />
             <HomeService />
        </div>
    )
}

export default Home

