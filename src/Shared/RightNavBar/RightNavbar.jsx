import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import zoneOne from "../../assets/qZone1.png";
import zoneTwo from "../../assets/qZone2.png";
import zoneThree from "../../assets/qZone3.png";
import "./RightNavBar.css"

const RightNavbar = () => {
    return (
        <div>
            <div className='login-part'>
            <h3>Login With</h3>
            <button className='btn btn-outline-success'> <FaGoogle className='m-1 react-ico' /> Login with Google</button>
            <button className='btn btn-outline-dark'> <FaGithub className='m-1 react-ico'/> Login with GitHub</button>
            </div>
            <div className='mt-5'> 
                <ListGroup>
                    <ListGroup.Item className='d-flex'> <FaFacebook className='me-auto  react-ico'/> <h4>Facebook</h4></ListGroup.Item>
                    <ListGroup.Item className='d-flex'> <FaTwitter className='me-auto  react-ico'/> <h4>Twitter</h4></ListGroup.Item>
                    <ListGroup.Item className='d-flex'> <FaInstagram className='me-auto  react-ico'/> <h4>Instagram</h4></ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-5 p-3 bg-light'>
                <div className='mt-2 d-flex flex-column gap-3'>
                    <h3 className='mb-3'>Q-ZOne</h3>
                    <img src={zoneOne} alt="" />
                    <img src={zoneTwo} alt="" />
                    <img src={zoneThree} alt="" />
                </div>

            </div>
        </div>
    );
};

export default RightNavbar;