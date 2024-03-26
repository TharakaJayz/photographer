import React from 'react'
import { GiBigDiamondRing } from "react-icons/gi";

interface Props {
    
}

const SingleService = (props: Props) => {
    return (
        <div className='w-1/5 border flex items-center justify-center '>
            <div className='w-full px-vw2 py-vh2 flex flex-col items-center gap-vh1'>
            <h4>Weddings</h4>
            <section className='flex items-center justify-center w-full border border-red-500'>
                <span className='h-px1 w-1/6 bg-black'></span>
                <span><GiBigDiamondRing /></span>
                <span className='h-px1 w-1/6 bg-black'></span>
                
            </section>
            <p className='w-full text-center'>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences</p>
        </div>
        </div>
    )
}

export default SingleService
