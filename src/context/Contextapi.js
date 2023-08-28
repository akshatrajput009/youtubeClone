import { createContext, useState, useEffect } from "react";
import fetchData from "../utils/api.js";
export const Context = createContext();

export const ApiContext = (props) => {
  const [selectCategory, setSelectCategory] = useState("New");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchCategoryData(selectCategory);
  }, [selectCategory]);

  const fetchCategoryData = (query) => {
    setIsLoading(true);
    fetchData(`search/?q=${query}`)
      .then(({ contents }) => {
        setIsLoading(false);
        setSearchResult(contents);
        console.log("data", searchResult);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Context.Provider
      value={{
        isLoading,
        setIsLoading,
        searchResult,
        setSearchResult,
        selectCategory,
        setSelectCategory,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
