import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface Props {
    children:React.ReactNode
}

const Layout = (props: Props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        setTimeout( ()=>{
            // console.log("set TIme out")
            setIsLoading(false);
        },1500)
}, [])

    return (
        <div className={`relative `}>
            <Navbar extraStyle = {`${isLoading ? 'opacity-0':'opacity-100' } transition-all`}/>
            {props.children}
            <Footer extraStyle = {`${isLoading ? 'opacity-0':'opacity-100' } transition-all`}/>
        </div>
    )
}

export default Layout
