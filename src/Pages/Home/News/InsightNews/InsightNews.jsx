import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import editorOne from "../../../../assets/editorsInsight1.png"
import editorTwo from "../../../../assets/editorsInsight2.png"
import editorThree from "../../../../assets/editorsInsight3.png"
import { FaCalendar } from "react-icons/fa";
import moment from "moment/moment";

const InsightNews = () => {
  return (
    <div>
      <CardGroup className="gap-3">
      <Card className="d-flex ">
        <Card.Img variant="top" src={editorOne} />
        <Card.Body style={{textAlign:"left"}}>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            <p>
                <FaCalendar/> {moment().format(" MMM Do YYYY")}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={editorTwo} />
        <Card.Body style={{textAlign:"left"}}>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            <p>
                <FaCalendar/> {moment().format(" MMM Do YYYY")}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={editorThree} />
        <Card.Body style={{textAlign:"left"}}>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            <p>
                <FaCalendar/> {moment().format(" MMM Do YYYY")}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      </CardGroup>
    </div>
  );
};

export default InsightNews;
