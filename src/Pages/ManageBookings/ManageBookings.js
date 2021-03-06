import React, { useEffect, useState } from 'react';
import './ManageBookings.css';

const ManageBookings = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://quiet-coast-20979.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, []);

    const handleDelete = (id) => {
        const url = `https://quiet-coast-20979.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount) {
                    // window.confirm('Are you sure you want to delete this?');
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }

            })
    }

    return (
        <div className="my-5 pt-4 container">
            <h2 className="my-5">Manage All Bookings</h2>
            <div className="manage-container">
                {
                    services.map(service => <div key={service._id}>
                        <div className="manage-booking">
                            <h3 className="mb-3">{service.destination}</h3>
                            <h5 className="mb-4">Price: BDT {service.cost}</h5>
                            {/* <button onClick={() => handleDelete(service._id)} className="btn btn-danger">Delete</button> */}
                            <button onClick={() => {
                                const confirmBox = window.confirm("Are you sure to delete this item?")
                                if (confirmBox === true) {
                                    handleDelete(service?._id)
                                }
                            }} className="btn btn-danger">Delete</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageBookings;