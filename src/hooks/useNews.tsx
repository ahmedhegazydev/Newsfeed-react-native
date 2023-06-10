import React, { useState, useEffect } from "react";
import NewsRepository from "../api/NewApi";
import { New } from "../data/New";

const useNews = () => {
  const [newsEverything, setEverythingNews] = useState<New[] | null>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const filterMultipleNews = async () => {
    setLoading(true);
    // const { data: allNewsEverything, error } = await newsApi.getAllNewsEverything();
    NewsRepository.getAllNewsEverything()
      .then((response) => {
        const { data: allNewsEverything, error } = response;
        setEverythingNews(allNewsEverything);
        console.log(allNewsEverything);
        if (!error) {
          setLoading(false);
        }
        for (let i = 0; i < allNewsEverything.length; i++) {
          allNewsEverything[i].id = i;
        }
      })
      .catch((error) => {
        // Handle the error
      });
  };

  useEffect(() => {
    filterMultipleNews();
  }, []);

  return [newsEverything, loading] as const;
};

export default useNews;
