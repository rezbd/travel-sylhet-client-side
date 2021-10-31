import React from 'react';
import './Facilities.css';

const Facilities = () => {
    return (
        <div id="facilities">
            <div id="stats" className="container mb-5 mt-5">
                <div className="container text-center">
                    <h2 className="py-3">Our Facilities</h2>
                    <p className="py-2">
                        Travel Sylhet provides a wide range of facilities to our valuable customers.
                    </p>
                </div>
                <div className="container text-center">
                    <div className="row g-3">
                        <div className="col-12 col-lg-4">
                            <div className="p-3 border bg-stats shadow">
                                <h6>Package Tours</h6>
                                <h6>River Cruise</h6>
                                <h6>City Sightseeing</h6>
                                <h6>Cultural and Festival Tour</h6>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="p-3 border bg-stats shadow">
                                <h6>Special Interest Tour</h6>
                                <h6>Tailor made Tours</h6>
                                <h6>Hotel Reservation</h6>
                                <h6>Transport Rentals</h6>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="p-3 border bg-stats shadow">
                                <h6>Outbound Tours</h6>
                                <h6>Coordinating Study Tours</h6>
                                <h6>Interpreter Service</h6>
                                <h6>Domestic Air Tickets</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Facilities;