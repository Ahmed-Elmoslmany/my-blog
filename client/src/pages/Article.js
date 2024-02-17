import React, { useState, useEffect } from "react";
import axios from "axios";
import Content from "../components/Article/Content";
import ArticleMetaData from "../components/Article/MetaData";
import Tags from "../components/Article/Tags";
// import Author from "../components/Article/Author";
import { useParams } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';

function Article() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  
  // const article = {
  //   metaData: {
  //     title: "أسم المقالة سيكون هنا 📜",
  //     writtenAt: "2024-02-07",
  //     lastUpdatedAt: "2024-02-07",
  //     readTime: "5",
  //   },
  //   tags: ["Middlewares", "Backend", "JavaScript"],
  //   content: "# أقتباسات لأكواد جافا سكريبت\n## ترتيب المصفوفة\n- اولاً نقوم بأنشاء المصفوصة\n- ثانياً نستخدم الدالة <span className='highlighted-text'>sort</span> التي تقوم بترتيب العناصر بالأبجدية\n<Code language='js'>\n//الكلمات\nconst names = ['Ahmed', 'Samy', 'Elmoslmany'];\nnames.sort() //['Ahmed', 'Elmoslmany', 'Samy' ]\n//الأرقام\nconst numbers = [101, 8, 87];\nnumbers.sort((a, b) => {\n  return a - b;\n});\n//[ 8, 87, 101 ]\n</Code>\n<div className='important-note'>\nعشان تعمل الـ <span className='highlighted-text'>Sort</span> انت محتاج\n</div>\n2. أختيار عنصر عشوائي\n<Code language='javascript'>\nconst items = ['Ball', 'Bat', 'Cup']\nconst randomIndex = Math.floor(Math.random()*items.length)\nitems[randomIndex]\n</Code>\n3. تغير أتجاه الكلمة\n<Code language='javascript'>\nfunction reverseString(string) {\n  return string.split(' ').reverse().join(' ')\n}\nrevereseString('Random String')\n</Code>\n4. Check if element has a class\n<Code language='javascript'>\nconst element = document.querySelector('#element')\nelement.classList.contains('active')\n</Code>\n5. String interpolation\n<Code language='javascript'>\nconst name = 'Jaya'\nconsole.log(<span className='highlighted-text'>Hi, ${name}. You have ${2 ** 3} new notifications.</span>}\n//Hi, Jaya. You have 8 new notifications.\n</Code>\n6. Loop through an array\n<Code language='javascript'>\nconst cars = ['Ford', 'BMW', 'Audi' ]\nfor (let car of cars) {\n  console.log(car)\n}\n/*\nFord\nBMW\nAudi\n*/\n</Code>\n7. Get current time\n<Code language='javascript'>\nconst date = new Date()\nconst currentTime = \n  <span className='highlighted-text'>${date.getHours()}:${date.getMintues()}:${date.getSeconds()}</span>\nconsole.log(currentTimes)\n//example output: '22:16:41'\n</Code>\n8. Replace part of a string\n<Code language='javascript'>\nconst string = 'You are awesome.'\nconst replacedString = string.replace('You', 'We')\nconsole.log(replacedString) //Output: 'We are awesome'\n</Code>\n9. Destructing variable assignment\n<Code language='javascript'>\nlet profile = ['bob', 34, 'carpenter'];\nlet [name, age, job] = profile;\nconsole.log(name);\n// bob\n</Code>\n10. Using the spread operator\n<Code language='javascript'>\nlet data = [1,2,3,4,5];\nconsole.log(...data);\n//  1 2 3 4 5\nlet data2 = [6,7,8,9,10];\nlet combined = [...data, ...data2];\nconsole.log(...combined);\n// 1 2 3 4 5 6 7 8 9 10\nconsole.log(Math.max(...combined));\n// 10\n</Code>",
  //   author: {
  //     name: "أحمد سامي المسلماني",
  //     profileImageUrl: "https://i.imgur.com/VbngEDt.jpg",
  //     bio: "مهندس برمجيات ومطور باك إند وشغوف بالتدوين وكتابة المقالات",
  //   },
  // };

    const baseUrl = "https://blog-server-alpha-blue.vercel.app"

  useEffect(() => {
    async function getArticle() {
      try {
        setIsLoading(true);
        const res = await axios.get(`${baseUrl}/api/v1/articles/${id}`);
        const data = res.data;
        setArticle(data.data.article);
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getArticle();
  }, [id]);

  if (isLoading) {
    return (
      <div className="Loader">

    
      <LinearProgress />
    
      </div>
    )
  }
  return (  
    <>
      <ArticleMetaData metaData={article.metaData} />
      <Tags tags={article.tags}/>
      <Content content={article.content}/>
      {/* <Author /> */}
    </>
  );
}

export default Article;
