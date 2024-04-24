import React from 'react'
import HeaderSection from '../components/HeaderSection'
import CategoryCard from '../components/portfolio/CategoryCard'

interface Props {
    
}

const Portfolio = (props: Props) => {
    return (
        <div className='w-full'>
          <HeaderSection     imgUrl="" title="Portfolio" desc="this is portfolio page" TextLogic = {true} />
          <div className='w-full px-vw5'>
            <div className='w-full'>
                <section className='w-full flex justify-between items-center'>
                    <CategoryCard svg={""} />
                    <CategoryCard svg={""} />
                    <CategoryCard svg={""} />
                </section>
            </div>
          </div>
          
        </div>
    )
}

export default Portfolio
