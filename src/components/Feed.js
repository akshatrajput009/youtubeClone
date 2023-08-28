import React, { useContext } from "react";
import LeftNav from "./LeftNav";
import { Context } from "../context/Contextapi";
import VideoCard from "./VideoCard.js";

export const Feed = () => {
  const { isLoading, searchResult } = useContext(Context);

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!isLoading &&
            searchResult &&
            searchResult?.map((item) => {
              if (item.type !== "video") return false;
              return (
                <VideoCard key={item?.video?.videoId} video={item?.video} />
              );
            })}
        </div>
      </div>
    </div>
  );
};
