import React from 'react'
import classes from "../styles/ArticlesList.module.css"
import ArticleCard from "../components/Article/ArticleCard";
import Grid from "@mui/material/Grid";
function ArticlesList({articles}) {
  console.log(articles);

  return (
    <div className={classes.container}>
    <h1 className={classes.newArticlesHeader}>مقالات جديدة 🚀</h1>
    <div className="articles-container">
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        rowSpacing={{ xs: 2, md: 2 }}
        columns={{ xs: 2, sm: 8, md: 8 }}
      >
        {articles.map((article, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <ArticleCard metaData={article.metaData} articleId={article._id}/>
          </Grid>
        ))}
      </Grid>
    </div>
  </div>
  )
}

export default ArticlesList