/* eslint-disable react/prop-types */


const CoffeeCard = ({ coffee }) => {

    const { name, quantity, supplier, taste, category, details, photoURL } = coffee;

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
                <button className="btn">Edit</button>
                <button className="btn">Delete</button>
            </div>
        </div>
    );
};

export default CoffeeCard;