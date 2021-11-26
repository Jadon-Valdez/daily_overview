import React from 'react'
import '../static/NewsItem.css'

const NewsItem = ({ title, description, url, urlToImage }) => {
    return (
        <div className="newsInfo">
            <img src={urlToImage} alt="Image"/>
            <div className="newsWrite">
                <h3>
                    <a href={url}>{title}</a>
                </h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default NewsItem
