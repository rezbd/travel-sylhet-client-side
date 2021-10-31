import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://quiet-coast-20979.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id="locations">
            <h2>Destinations</h2>
            <div className="service-container">
                {
                    services.map(service => <Service key={service._id} service={service}>

                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;