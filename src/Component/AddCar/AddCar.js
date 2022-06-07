import React from 'react';
import "./Addcar.css";

import { useForm } from 'react-hook-form';

export default function AddCar() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:8000/addCar', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Car added");
                    reset();
                }
            })
    };
    return (
        <div className='row'>
            <div id="AddCar" className='addcar col-xl-12'>
                <h2 className="my-3 p-2 text-center text-light">Please Add Car</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                    <div className="col-xl-6 mr-2 p-3">
                    <input
                        {...register("brand")}
                        placeholder="Brand Name"
                        className="form-control"
                    />
                    </div>
                    <div className="col-xl-6 mr-2 p-3">
                    <input
                        {...register("title")}
                        placeholder="Car Title"
                        className="form-control"
                    />
                    </div>
                   
                    <div className="col-xl-6 mr-2 p-3">
                    <input
                        {...register("price")}
                        placeholder="Price"
                        className="form-control"
                    />
                    </div>
                    <div className="col-xl-6 mr-2 p-3">
                    <input
                        {...register("rating")}
                        placeholder="Overall Rating"
                        className="form-control"
                    />
                    </div>
                    <div className="col-xl-12 mr-2 p-3">
                    <textarea
                        {...register("description")}
                        placeholder="Description"
                        className="form-control"
                    />
                    </div>
                    <div className="col-xl-6git  mr-2 p-3">
                    <input
                        {...register("image", { required: true })}
                        placeholder="Image Link"
                        className="form-control"
                    />
                    </div>
                    {errors.exampleRequired && <span>This field is required</span>}

                    
                    <div className="sub-btn col-xl-12 m-2">
                    <input type="submit" value="Add"  />
                         </div>
                    </div>

                    
                </form>
            </div>
        </div>
    )
}
