import React, { useState, useEffect } from "react";
import NewsRepository from "../api/NewApi";
import { New } from "../data/New";

const useNews = () => {
  const [newsEverything, setEverythingNews] = useState<New[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const filterMultipleNews = async () => {
    setLoading(true);
    try {
      const response = await NewsRepository.getAllNewsEverything();
      const { data: allNewsEverything, error } = response;

      if (!error) {
        setEverythingNews(allNewsEverything);
        setLoading(false);
      }

      for (let i = 0; i < allNewsEverything.length; i++) {
        allNewsEverything[i].id = i;
      }
    } catch (error) {
      // Handle the error
    }
  };

  useEffect(() => {
    filterMultipleNews();
  }, []);

  return [newsEverything, loading] as const;
};

export default useNews;
