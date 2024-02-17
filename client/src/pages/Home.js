import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ArticlesList from "./ArticlesList";
import LinearProgress from '@mui/material/LinearProgress';



function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getArticles() {
      try {
        setIsLoading(true)
        
        const res = await axios.get("http://127.0.0.1:5000/api/v1/articles?fields=metaData&limit=4&sort=createdAt");
        const data = res.data;
        setArticles(data.data.articles);
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
    getArticles();
  }, []);

  if (isLoading) {
    return (
      <div className="Loader">

    
      <LinearProgress />
    
      </div>
    )
  }

  return (
    <div>
      <ArticlesList articles={articles}/>
    </div>
  );
}

export default Home;
