/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, supplier, taste, category, details, photoURL } = coffee;

    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                }).then((res) => res.json())
                    .then((data) => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter((cof) => cof._id !== _id);
                            setCoffees(remaining)
                        }
                    })

            }
        })
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl p-5 flex-col md:flex-row md:items-center md:justify-between">
            <div className="p-3">
                <img className="w-40 h-40" src={photoURL} alt="card-image" />
            </div>
            <div className="p-3">
                <h2 className="card-title">{name}</h2>
                <p>Quan: {quantity}</p>
                <p>Brand: {supplier}</p>
                <p>Flavour: {taste}</p>
                <p>Category: {category}</p>
                <p>Details: {details}</p>
            </div>
            <div className="btn-group btn-group-vertical p-3 space-y-1">
                <button className="btn">View</button>
                <Link to={`updatecoffee/${_id}`}>
                    <button className="btn">Edit/Update</button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="btn">Delete</button>
            </div>
        </div>
    );
};

export default CoffeeCard;