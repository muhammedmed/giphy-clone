import React from 'react'
import '../../styles/ArtistGiphy.css'
const ArtistGiphy = ({giphy, index}) => {
  return (
    <div className="artist_box" key={index}>
        <div className="artist_user">
        <img src={giphy.user.avatar_url} alt="" />
        <h2>{giphy.username}</h2> 
        <div className="avaliable">
          <h1>·</h1>
          <p>Avaliable for Work</p>
        </div>
        </div> 
      <a href={giphy.bitly_url}>
        <img src={giphy.images.downsized.url} alt={giphy.title} />
        </a>
    </div>
  )
}

export default ArtistGiphy