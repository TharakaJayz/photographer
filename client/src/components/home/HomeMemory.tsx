import React from 'react'
import ImageSlider from '../../components/home/ImageSlider'
import { homeMemoryImage, images } from '../../assets/Images'
interface Props {
    
}

const HomeMemory = (props: Props) => {
    return (
        <div className='w-full'>
            <section className='w-full pr-vw10 h-vh100 flex items-center bg-primary_light1 relative lg2_:pr-0 '>
                <div className='w-full bg-primary_light2 pl-vw10 rounded-xl rounded-l-none py-vh5 lg2_:pl-0 '>
                    <div className='w-full flex items-center justify-start gap-vw5   pr-vw5 lg2_:pr-0 md_:pr-0  lg2_:px-vw10 border border-red-500'>
                        <img src={homeMemoryImage}  alt='memory' className='w-auto h-vh75 object-center object-cover rounded-3xl md_:hidden lg2_:h-auto lg2_:w-vw40 ' />
                        <section className='flex flex-col w-1/2  lg2_:w-auto   items-start  gap-vh4 text-gray-600 md_:w-full md_:items-center sm_:px-vw3 md_:px-vw5'>
                            <h3 className='font-bold text-2xl  text-center leading-10'>"The Memories to Remember"</h3>
                            <p className='border border-black md_:text-center'>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph</p>
                            <button className='px-vw4 py-vh2 rounded border border-primary hover:bg-primary hover:text-white transition-all'>Read More</button>
                        </section>
                    </div>
                </div>
                </section> 
        </div>
    )
}

export default HomeMemory
