import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { destination, bestFor, description, duration, cost, img, id } = service;
    return (
        <div className="location">
            <img width="100%" src={img} alt="" />
            <h2>{destination}</h2>
            <h6>{bestFor}</h6>
            <p>{description}</p>
            <h6>{duration}</h6>
            <h5>Package Price: {cost} /person</h5>
            <Link to={`/booking/${id}`}>
                <button>Book Now</button>
            </Link>
        </div>
    );
};

export default Service;