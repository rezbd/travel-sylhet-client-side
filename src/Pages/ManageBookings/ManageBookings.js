import React, { useEffect, useState } from 'react';

const ManageBookings = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, []);

    const handleDelete = (id) => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted successfully')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }

            })
    }

    return (
        <div className="my-5">
            <h2>Manage All Bookings</h2>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.destination}</h3>
                    <button onClick={() => handleDelete(service._id)} className="btn btn-warning">Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageBookings;