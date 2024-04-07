import axios from "axios";
import Grid from "@mui/material/Grid";
import ArticleCard from "../components/Article/ArticleCard";
import classes from "../styles/ArticlesList.module.css";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function AllArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { tag } = useParams();

  
  const baseUrl = "https://blog-server-alpha-blue.vercel.app";
  useEffect(() => {
    async function getArticles() {
      try {
        setIsLoading(true);
        let res;
        if (tag) {
          res = await axios.get(`${baseUrl}/api/v1/articles?tags=${tag}`);
        } else {
          res = await axios.get(
            `${baseUrl}/api/v1/articles?fields=metaData&sort=-createdAt`
          );
        }
        const data = res.data;
        setArticles(data.data.articles);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getArticles();
  }, [tag]);

  if (isLoading) {
    return (
      <div className="Loader">
        <LinearProgress />
      </div>
    );
  }
  if(!articles.length){
    return(
        <p>Oops!</p>
    )
  }


  return (
    <>
      <h1>fadfadfad</h1>
      <div className={classes.container}>
        <h1 className={classes.newArticlesHeader}>كل المقالات 🚀</h1>
        <div className="articles-container">
          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            rowSpacing={{ xs: 2, md: 2 }}
            columns={{ xs: 2, sm: 8, md: 8 }}
          >
            {articles.map((article, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <ArticleCard
                  metaData={article.metaData}
                  articleId={article._id}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
}

export default AllArticles;
