import React,{useState,useEffect} from 'react';
import Navbar from '../componants/Navbar';
import { Link } from 'react-router-dom';


export default function News() {
    let[news,setNews]=useState([]);
   
    async function getNews(){
        let response = await fetch("https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=cea2a733042142a7835c384498bd4ddd")
        let data = await response.json();
        setNews(data.articles);
       
    }
    useEffect(() => {
        getNews();
    }, [getNews]);
return (
  <div className="news-page">
    
    
    <header className="news-header">
      <h1>Latest News</h1>
      <p>Welcome to the News page!</p>
    </header>

    <div className="news-container">
      {news.map((article, index) => (
        <article key={index} className="news-article">
          {article.urlToImage && (
            <img 
              src={article.urlToImage} 
              alt={article.title || "News image"} 
            />
          )}
          <div className="news-content">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        </article>
      ))}
    </div>
  </div>
);

}