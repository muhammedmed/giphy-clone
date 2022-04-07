import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchContainer from "./components/SearchContainer";
import Media from "./components/Media";
import LoadingPage from "./components/LoadingPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <div className="app">
            <div className="main">
              <Header />
              <SearchContainer />
              <Media />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
