import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div className="my-5 py-4">
            <h2 className="mb-4">Add a New Destination</h2>
            <form className="add-destination" onSubmit={handleSubmit(onSubmit)}>
                <h6>Destination</h6>
                <input {...register("destination", { required: true, maxLength: 20 })} placeholder="Destination" />
                <br />
                <h6>Famous For</h6>
                <textarea {...register("bestFor")} placeholder="Famous For" />
                <br />
                <h6>Tour Duration (in days)</h6>
                <input type="number" {...register("duration")} placeholder="Tour Duration" />
                <br />
                <h6>Price (per person)</h6>
                <input type="number" {...register("cost")} placeholder="Price" />
                <br />
                <h6>Location Image Link</h6>
                <input {...register("img")} placeholder="Location Image URL" />
                <br />
                <br />
                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    );
};

export default AddService;