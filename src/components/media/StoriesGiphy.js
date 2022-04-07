import React from "react";
import '../../styles/StoriesGiphy.css'
const StoriesGiphy = ({ giphysArray }) => {
  const getGiphy = () => {
    let randomIndex = Math.floor(Math.random() * 20) + 0;
    let randomGiphy = giphysArray[randomIndex];

    if (randomGiphy) {
      return randomGiphy;
    }
  };

  const GiphyTile = ({ giphy }) => {
    let giphyURL = giphy ? giphy.images.downsized.url : "";
    return (
      <div className="tile">
        <div className="giphy-tile" key={giphy?.id}>
          <div className="text-tile">
            <p>{giphy?.title}</p>
          </div>
          <a href={giphy?.bitly_url}>
            <img src={giphyURL} alt="" />
          </a>
        </div>
      </div>
    );
  };
  return (
    <div className="stories-section">
      <div className="landscape-left-row">
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
      </div>
      <div className="landscape-right-row">
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
      </div>
      <div className="no-landscape-row">
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
      </div>
      <div className="landscape-middle-row">
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
      </div>
      <div className="no-landscape-row">
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
      </div>
      <div className="landscape-left-row">
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
      </div>
    </div>
  );
};

export default StoriesGiphy;
