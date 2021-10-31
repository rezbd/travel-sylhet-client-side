import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { destination, bestFor, duration, cost, img, _id } = service;
    return (
        <div className="location">
            <img className="tour-img" width="100%" src={img} alt="" />
            <h2>{destination}</h2>
            <p>{bestFor}</p>
            <h6>Tour Duration: {duration} day</h6>
            <h5>Price: BDT {cost} /person</h5>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-success mt-3">Book Now</button>
            </Link>
        </div>
    );
};

export default Service;