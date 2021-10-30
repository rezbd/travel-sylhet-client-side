import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <div className="mt-5 pt-5">
            <h2>Details of: {service.destination}</h2>
            <img src={service.img} alt="" />
            <h2>Booking Trip: {serviceId}</h2>
            <p>4. Clicking on the button will take the user to the place order page. This route will be a private/protected route. Please make sure that if the user is not logged in, the private route redirects to the login page. After login, the user will be redirected to the page he/she wanted to go to. Also, make sure, after reloading the page of a private route, the user is not redirected to the login page.</p>
            <p>
                5. The Place Order page should display detailed information of the item, user has clicked. It will display users name and email address from the login system and user will provide address and necessary information to place the order/booking/purchase.
            </p>
        </div>
    );
};

export default Booking;