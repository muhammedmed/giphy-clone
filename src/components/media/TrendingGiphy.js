import React from 'react'
import '../../styles/TrendingGiphy.css'

const TrendingGiphy = ({giphy,index}) => {
  return (
    <div className="trending_box" key={index}>
      <a href={giphy.bitly_url}>
        <img src={giphy.images.downsized.url} alt={giphy.title} />
        </a>
</div>
  )
}

export default TrendingGiphy