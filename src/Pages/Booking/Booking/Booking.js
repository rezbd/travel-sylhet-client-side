import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})

    const { register, formState: { errors } } = useForm();
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://quiet-coast-20979.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [serviceId])

    return (
        <div className="mt-5 pt-5">
            <div className="booking-top mt-2">
                <h2 className="mb-4">{service.destination}</h2>
                <img src={service.img} className="booking-img mb-4" alt="" />
                <p>{service.bestFor}</p>
                <h6>Tour Duration: {service.duration} day(s)</h6>
                <h5 className="mt-4">Price: {service.cost} /person</h5>
            </div>
            <div className="my-5">
                <h3 className="mb-4">Book a trip to {service.destination}</h3>
                <form className="booking-form">
                    <label>Name</label>
                    <input defaultValue={user.displayName} {...register("name")} />
                    <label>Email</label>
                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <label>Country</label>
                    <input placeholder="Country" defaultValue="" {...register("city")} />
                    <label>City</label>
                    <input placeholder="City" defaultValue="" {...register("city")} />
                    <label>Street Address</label>
                    <input placeholder="Street Address" defaultValue="" {...register("address")} />
                    <label>Phone Number</label>
                    <input placeholder="phone number" defaultValue="" {...register("phone")} />

                    <Link to="/booked">
                        <input className="btn btn-warning mt-3 w-50 mx-auto" type="submit" />
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Booking;