import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import imageOne from "../../assets/1.png"
import imageTwo from "../../assets/2.png"
import imageThree from "../../assets/3.png";
import moment from "moment";
import { FaCalendar } from "react-icons/fa";

const LeftnavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h3>All category</h3>
      <Button variant="secondary">National News</Button>{" "}
      <div>
        {categories.map((category) => (
          <li key={category.id} className="mt-3 list-inline">
            {category.name}
          </li>
        ))}
      </div>
      <div className='mt-5  bg-light'>
                <div className='mt-2 d-flex flex-column gap-3'>
                    
                  <div>
                  <img className="w-100" src={imageOne} alt="" />
                  <h6 className="fw-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h6>
                  <div className="d-flex gap-4">
                    <p>Sports</p>
                    <p><FaCalendar/> {moment().format(" MMM YYYY")}</p>
                  </div>
                  </div>
                    <div>
                    <img className="w-100" src={imageTwo} alt="" />
                  <h6 className="fw-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h6>
                  <div className="d-flex gap-4">
                    <p>Sports</p>
                    <p><FaCalendar/> {moment().format(" MMM YYYY")}</p>
                  </div>
                    
                    </div>
                    <div>
                    <img className="w-100" src={imageThree} alt="" />
                  <h6 className="fw-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h6>
                  <div className="d-flex gap-4">
                    <p>Sports</p>
                    <p><FaCalendar/> {moment().format(" MMM YYYY")}</p>
                  </div>
                    </div>
                </div>

            </div>
    </div>
  );
};

export default LeftnavBar;
