import React from "react";
import { Card, Image } from "react-bootstrap";
import "./NewsCard.css";
import { Link } from "react-router-dom";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const {
    image_url,
    _id,
    details,
    author,
    title,
    thumbnail_url,
    rating,
    total_view,
  } = news;
  console.log(news);
  return (
    <Card className="mb-4 card-item">
      <Card.Header>
        <div className="d-flex gap-2 align-items-center ">
          <Image className="author-img" src={author.img} roundedCircle />
          <div className="flex-grow-1">
            <h6>{author.name}</h6>
            <p>{author.published_date}</p>
          </div>
          <div className="gap-4 d-flex">
            <div>
              <FaRegBookmark></FaRegBookmark>
            </div>{" "}
            <div>
              <FaShareAlt></FaShareAlt>
            </div>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="bottom" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...
              <Link className="text-decoration-none" to={`/news/${_id}`}>
                <span className="text-warning">Read More</span>
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center">
        <div className="flex-grow-1 d-flex gap-4 align-items-center">
          <div>
          <Rating
          className="text-warning"
            placeholderRating={rating?.number}
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar />}
            fullSymbol={<FaStar />}
            readonly
          ></Rating>
          </div>
          <div>{rating?.number}</div>
        </div>
        <div className=" d-flex align-items-center gap-3">
          <FaEye></FaEye> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
