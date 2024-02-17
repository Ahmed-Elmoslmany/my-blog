import * as React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../App';
import classes from "../../styles/ArticleCard.module.css"
import { useNavigate } from 'react-router-dom';

export default function ArticleCard({metaData, articleId}) {
    const { isDark } = useContext(ThemeContext);
    const navigate = useNavigate();

    function articleHandler(){
      navigate(`/article/${articleId}`);
    }

  return (
    <div className={classes.articles} data-theme={isDark ? "dark" : "light"} dir="rtl">
      
  
        <div className={classes.article} onClick={articleHandler}>
            <img src={metaData.cover} alt='article cover'/>
            <h3>{metaData.title}</h3>
            <div className={classes.articleHook}>
                <p>{metaData.hook}</p>
            </div>
                <div className={classes.articleBio}>
                    <p className={classes.readTime}>زمن القراءة: <span>{metaData.readTime} دقائق ⌚️</span></p>
                    <p>{metaData.writtenAt}</p>
                </div>
        </div>
    </div>
  );
}
