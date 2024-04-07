import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import ArticlesList from "./pages/ArticlesList";
// import Footer from "./components/Footer";
import Article from "./pages/Article";
import AllArticles from "./pages/AllArticles";

// Create Context
export const ThemeContext = createContext();

function App() {
  const [isDark, setIsDark] = useState(true);

  const value = {
    isDark, setIsDark
  }

  return (

<ThemeContext.Provider value={value}>
  <div data-theme={isDark ? "dark" : "light"} dir="rtl"> 

      <BrowserRouter>
      <Header />
       <Routes >
        <Route path="/" element={<Home />} />
        {/* <Route path="/articles" element={<ArticlesList />} /> */}
        <Route path="/articles" element={<AllArticles />} />
        <Route path="/articles/:tag" element={<AllArticles />} />
        <Route path="/article/:id" element={<Article />} />
          
       </Routes>
      </BrowserRouter>

      {/* <Footer /> */}
  </div>
  </ThemeContext.Provider>
  );
}

export default App;
