import React from 'react'
import SingleService from '../SingleService'

interface Props {
    
}

const HomeService = (props: Props) => {
    return (
        <div className='w-full py-vh5'>
            <div className='w-full px-vw5 flex flex-col gap-vh5'>
                <section className='w-full flex flex-col gap-vh2'>
                    <h1 className='w-full text-center'>Our Services</h1>
                    <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc</p>
                </section>
                <section className='w-full flex justify-center items-center gap-vw5'>
                    <SingleService/>
                    <SingleService/>
                    <SingleService/>
                </section>
            </div>
        </div>
    )
}

export default HomeService
