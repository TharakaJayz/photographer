import React, { useState } from 'react'
import HeaderSection from '../components/HeaderSection'
import CategoryCard from '../components/portfolio/CategoryCard'
import { images } from '../assets/Images'
import {  albumTypes } from '../assets/details';
import PortfolioCard from '../components/portfolio/PortfolioCard';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';



interface Props {

}


const Portfolio = (props: Props) => {
  const [selectedType, setSelectedType] = useState<string>("");

  const [albums,setAlbums] = useState<any>([]);

const fetchAlbums = async()  =>{
  try {

    
    const albums:any = await axios.get("http://localhost:8080/album/get_all_album");
    setAlbums(albums.data);

    // console.log('albums from backend',albums);
    
  } catch (error) {
    console.log("album fetch error",error)
    return
  }
}

  useEffect(() => {
    fetchAlbums();
  }, [])

  const setTypeFromCard = (value: string) => {
    setSelectedType(value);
  }
  return (
    <div className='w-full'>
      <HeaderSection imgUrl={"https://www.danushkasenadeera.lk/wp-content/uploads/2022/10/01.jpg"} title="Portfolio" desc="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc" TextLogic={true} />
      <div className='w-full px-vw5 bg'>
        <div className='w-full flex flex-col gap-vh5 '>
          <section className='w-full flex justify-between items-center '>
            <CategoryCard svg={""} title={albumTypes[0]} onClickAction={setTypeFromCard} desc='See our wedding albums' />
            <CategoryCard svg={""} title={albumTypes[1]} onClickAction={setTypeFromCard} desc='See our engagement albums' />
            <CategoryCard svg={""} title={albumTypes[2]} onClickAction={setTypeFromCard} desc='See our pre-shoots albums' />

          </section>

          {(selectedType === "") && (
            <section className='w-full flex flex-wrap justify-start  items-center   gap-vh3 '>

              {albums.map(((singleAlbum:any) => {

                return <PortfolioCard title={singleAlbum.type} desc={singleAlbum.desc} imgUrl={singleAlbum.imgUrl}  id = {singleAlbum.id} />
              }))}

            </section>
          )}

          {(selectedType !== "") && (
            <section className='w-full flex flex-wrap justify-start items-center   gap-vh5 lg_:gap-vh2 lg_:justify-between '>

              {albums.map(((singleAlbum:any) => {
                    if(singleAlbum.type === selectedType){

                      return <PortfolioCard title={singleAlbum.type} desc={singleAlbum.desc} imgUrl={singleAlbum.imgUrl} id = {singleAlbum.id} />
                    }
              }))}

            </section>
          )}


        </div>
      </div>

    </div>
  )
}

export default Portfolio
