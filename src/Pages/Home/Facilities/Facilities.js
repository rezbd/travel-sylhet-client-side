import React from 'react';
import './Facilities.css';

const Facilities = () => {
    return (
        <div>
            <h2>Our Facilities</h2>
            <div className="container px-4">
                <div className="row gx-5">
                    <div className="col-md-4">
                        <div className="p-3 border bg-light">
                            <p>Package Tours</p>
                            <p>River Cruise</p>
                            <p>City Sightseeing</p>
                            <p>Cultural and Festival Tour</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 border bg-light">
                            <p>Special Interest Tour</p>
                            <p>Tailor made Tours</p>
                            <p>Hotel Reservation</p>
                            <p>Transport Rentals</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 border bg-light">
                            <p>Outbound Tours</p>
                            <p>Coordinating Study Tours</p>
                            <p>Interpreter Service</p>
                            <p>Domestic Air Tickets</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Facilities;