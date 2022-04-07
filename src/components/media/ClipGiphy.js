import React, { useState, useEffect } from "react";
import '../../styles/ClipGiphy.css'
const ClipGiphy = ({ giphysArray }) => {
  const [giphys, setGiphys] = useState([]);

  const randomSizeData = (giphysArray) => {
    return giphysArray.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    let randomData = randomSizeData(giphysArray);
    setGiphys(randomData.slice(0, 3));
  }, [giphysArray]);
  return (
    <div className="clips_box">
      {giphys && giphys.length ? (
        <>
          <div className="first_column">
            <img src={giphys?.[0]?.images.downsized.url} alt="" />
            <div className="text" key={giphys.id}>
              <p>{giphys?.[0]?.title}</p>
            </div>
          </div>
          <div className="second_column" key={giphys.id}>
            <img src={giphys?.[1]?.images.downsized.url} alt="" />
            <div className="text">
              <p>{giphys?.[1]?.title}</p>
            </div>
            <img src={giphys?.[2]?.images.downsized.url} alt="" />
            <div className="text">
              <p>{giphys?.[2]?.title}</p>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ClipGiphy;
