import React from 'react'
import HeaderSection from '../components/HeaderSection'

interface Props {
    
}

const ContactUs = (props: Props) => {
    return (
        <div className='w-full'>
          <HeaderSection imgUrl="" title="About Us" desc="this is about us " TextLogic = {true} />
          
        </div>
    )
}

export default ContactUs
