import React from 'react'
import HeaderSection from '../components/HeaderSection'
import { images } from '../assets/Images'

interface Props {
    
}

const ContactUs = (props: Props) => {
    return (
        <div className='w-full'>
          <HeaderSection imgUrl={images[0]} title="About Us" desc="this is about us " TextLogic = {true} />
          
        </div>
    )
}

export default ContactUs
