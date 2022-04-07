import React, { useState, useEffect } from 'react'
import { fetchTrendingGiphys, fetchSearchedGiphys } from '../api/gipyApi'
import TrendingGiphy from './media/TrendingGiphy'
import ArtistGiphy from './media/ArtistGiphy'
import ClipGiphy from './media/ClipGiphy'
import StoriesGiphy from './media/StoriesGiphy'
import giphyArtists from '../artist'
import { Navigation,  A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/Media.css'

const Media = () => {
    const [trending, setTrending] = useState([]);
    const [artists, setArtists] = useState([]);
    const [clips, setClips] = useState([]);
    const [stories, setStories] = useState([]);

    const randomSizeData = (content) =>{
        return content.data.sort(()=>Math.random() - 0.5);
    }

    const getTrendingGiphys = async () =>{
        const trending = await fetchTrendingGiphys();
        setTrending(randomSizeData(trending.data));
    }

    const getArtists = async () =>{
        const artists = await Promise.all(
        giphyArtists.map(async ( giphyArtists)=>{
            return fetchSearchedGiphys(giphyArtists).then((res) => res.data.data);
            
        }));
        setArtists(artists.flat());
    };

    const getSearchedGiphys = async (query, setState) =>{
        const searched =  await fetchSearchedGiphys(query);
        setState(randomSizeData(searched.data));
    }

    useEffect(() =>{
        getTrendingGiphys();
        getArtists();
        getSearchedGiphys("nft", setClips);
        getSearchedGiphys("technology", setStories);
    },[])


  return (
    <div className="media">
        <div className="row">
            <div className="row-header">
                <img src="./images/trending.svg" alt="" />
    <h1>Trending</h1>
    </div>
    <div className="trending-container">
    <Swiper
       modules={[Navigation, A11y]}
       slidesPerView={5}
       navigation
    >
         
    {trending?.map((trendingGiphy, index)=>{
        return<SwiperSlide key={index}> <TrendingGiphy giphy={trendingGiphy} key={index}/></SwiperSlide>
    })}
    
    </Swiper>
    </div>
    </div>
    <div className="row">
    <div className="row-header">
        <img src="./images/artists.svg" alt="" />
    <h1>Artists</h1>
    </div>
  
    <div className="artist-container">
    <Swiper
       modules={[Navigation, A11y]}
      slidesPerView={3}
       navigation
    >
        {artists.map((artistGiphys, index)=>{
            return <SwiperSlide key={index}><ArtistGiphy giphy={artistGiphys} key={index}/></SwiperSlide>
        })}
        </Swiper>
    </div>
    
    </div>
    <div className="row">
    <div className="row-header">
        <img src="./images/clips.svg" alt="" />
    <h1>Clips</h1>
    </div>
    <div className="clips-container">
        <ClipGiphy giphysArray={clips}/>
    </div>
    </div>
    <div className="row">
    <div className="row-header">
        <img src="./images/stories.svg" alt="" />
    <h1>Stories</h1>
    </div>
    <div className="stories-container">
        <StoriesGiphy giphysArray={stories}/>
    </div>
    </div>

    </div>
  )
}

export default Media