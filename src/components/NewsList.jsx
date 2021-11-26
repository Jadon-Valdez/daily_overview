import React, {useEffect, useState} from 'react';
import Axios from 'axios'
import NewsItem from './NewsItem'
import '../static/NewsList.css'

const NewsList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const res = await Axios.get(
                "https://newsapi.org/v2/top-headlines?country=us&apiKey=8b39627889004b96b4fe8b5de7f6bf01"
            );
            setArticles(res.data.articles);
            console.log(res);
        };
        getArticles();
    });


    return (
        <div className="news">
            {articles.map(({title, description, url, urlToImage}) => (
                <NewsItem title={title} description={description} url={url} urlToImage={urlToImage} />
            ))}
        </div>
    )
}

export default NewsList
