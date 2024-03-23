import React from 'react'
import amlilaLogo from "../assets/amelia_logo.png";
import Services from '../pages/Services';
import { IoMenu } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
interface Props {

}

const Navbar = (props: Props) => {
    return (
        <div className=' h-vh10 w-full px-vw5 bg-navcolor   '>
            <div className=' w-full h-full flex items-center justify-between'>
                <img src={amlilaLogo} alt='amelia logo' className='w-vw10' />
                <section className='flex items-center gap-vw3 text-white lg_:hidden'>
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? "text-primary font-semibold" : "text-white"
                    } >Home</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "text-primary font-semibold" : "text-white"
                    } to="/about">About US</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "text-primary font-semibold" : "text-white"
                    } to="/service">Services</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "text-primary font-semibold" : "text-white"
                    } to="/portfolio">Portfolio</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "text-primary font-semibold" : "text-white"
                    } to="/contact">Contact Us</NavLink>
                    <button className='bg-transparent border border-white text-white font-semibold px-vw1 py-vh1 rounded  transition-all cursor-pointer hover:bg-primary hover:border-primary'>Request a Quote</button>
                </section>
                <button className='lg_:inline hidden text-white text-2xl'><IoMenu /></button>
            </div>
        </div>
    )
}

export default Navbar
