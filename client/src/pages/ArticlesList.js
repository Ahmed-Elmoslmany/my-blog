import React, { useRef, useEffect } from 'react';
import classes from "../styles/ArticlesList.module.css";
import ArticleCard from "../components/Article/ArticleCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function ArticlesList({ articles }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const slickList = sliderRef.current.innerSlider.list;
      const slides = slickList.querySelectorAll('.slick-slide');

      let maxHeight = 0;
      slides.forEach(slide => {
        const slideHeight = slide.offsetHeight;
        if (slideHeight > maxHeight) {
          maxHeight = slideHeight;
        }
      });

      slickList.style.height = maxHeight + 'px';
    }
  }, [articles]);

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={classes.container}>
      <div className={classes.sliderHeader}>
        <h1 className={classes.newArticlesHeader}>مقالات جديدة 🚀</h1>
        <Link to="/article" className={classes.viewMore}>
        
        عرض المزيد🔻
        </Link>
       
      </div>
      <Slider {...settings} className={classes.slider} ref={sliderRef}>
        {articles.map((article, idx) => (
          <ArticleCard key={idx} metaData={article.metaData} articleId={article._id} />
        ))}
      </Slider>
    </div>
  );
}

export default ArticlesList;
