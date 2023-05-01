import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import "./News.css"
import { FaArrowLeft } from 'react-icons/fa';

const News = () => {
    const loadNews = useLoaderData();
    console.log(loadNews);
    // const {image_url,
    //     _id,
    //     details,
    //     author,
    //     title,
    //     thumbnail_url,
    //     rating,
    //     total_view,category_id}= loadNews;
    return (
        <Card  className='card-details'>
      <Card.Img variant="top" src={loadNews?.image_url} />
      <Card.Body>
        <Card.Title>{loadNews?.title}</Card.Title>
        <Card.Text>
          {loadNews?.details}
        </Card.Text>
        <Link to ={`/category/${loadNews?.category_id}`}>
        <Button
         variant="danger"><FaArrowLeft/> All news in this category</Button>
        </Link>
      </Card.Body>
    </Card>
    );
};

export default News;