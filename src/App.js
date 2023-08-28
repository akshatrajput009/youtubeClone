import React from "react";
import { ApiContext } from "./context/Contextapi.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Feed } from "./components/Feed.js";
import { SearchResult } from "./components/SearchResult.js";
import { VideoDetails } from "./components/VideoDetails.js";
import { Header } from "./components/Header.js";

const App = () => {
  return (
    <ApiContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResult />}
            />
            <Route path="/video/:videoId" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ApiContext>
  );
};

export default App;
