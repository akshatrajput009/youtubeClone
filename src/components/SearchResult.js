import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/Contextapi";
import fetchData from "../utils/api";
import LeftNav from "./LeftNav";
import { QueryResultCard } from "./QueryResultCard";

export const SearchResult = () => {
  const [queryResult, setQueryResult] = useState();

  const { setIsLoading } = useContext(Context);

  const { searchQuery } = useParams();

  useEffect(() => {
    fetchQueryData();
  }, [searchQuery]);

  const fetchQueryData = () => {
    setIsLoading(true);
    fetchData(`search/?q=${searchQuery}`).then(({ contents }) => {
      setIsLoading(false);

      setQueryResult(contents);
    });
  };

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {queryResult?.map((item) => {
            if (item.type !== "video") return false;
            return (
              <QueryResultCard key={item?.video?.videoId} video={item?.video} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
