import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Categories = () => {
    const categoryNews = useLoaderData();
//    const {image_url,_id,details,author,title,thumbnail_url,rating}=categoryNews;
    return (
        <div>
            {
                categoryNews.map(singleNews=><NewsCard
                key={singleNews.id}
                news ={singleNews}
                
                ></NewsCard> )
            }
        </div>
    );
};

export default Categories;