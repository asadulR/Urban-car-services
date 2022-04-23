import React from 'react';
import { useForm } from "react-hook-form";


const AddService = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/service/`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    
    };
    return (
        <div className='w-75 mx-auto'>
            <h2 className='text-center my-5 fw-bold'>Please add a service </h2>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-4 p-2' placeholder='Service name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-4 p-2' placeholder='Description' {...register("description")} />
                <input className='mb-4 p-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-4 p-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-4 py-2 fw-bold' type="submit" value='Add service'/>
            </form>
        </div>
    );
};

export default AddService;