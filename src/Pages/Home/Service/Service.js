import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { destination, bestFor, description, duration, cost, img } = service;
    return (
        <div className="location">
            <img width="100%" src={img} alt="" />
            <h2>{destination}</h2>
            <h6>{bestFor}</h6>
            <p>{description}</p>
            <h6>{duration}</h6>
            <h5>Package Price: {cost} /person</h5>
            <button>Book Now</button>
        </div>
    );
};

export default Service;