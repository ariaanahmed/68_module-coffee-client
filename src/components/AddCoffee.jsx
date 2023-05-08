import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoURL = form.photoURL.value;
        // create an object to send data's to backend
        const newCoffee = { name, quantity, supplier, taste, category, details, photoURL }
        console.log(newCoffee)

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        }).then((res) => res.json()).then((data) => {
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'user added successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })

                form.reset();
            }
        })
    }

    return (
        <div className="bg-gray-100 p-6 md:p-24">
            <h2 className="md:text-5xl capitalize font-bold py-5">add coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form name and quantity row */}
                <div className="md:flex md:gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee name</span></label>
                        <label className="input-group">
                            <span>Coffee</span>
                            <input type="text" name="name" placeholder="Enter your coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <span>Quantity</span>
                            <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex md:gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier name</span></label>
                        <label className="input-group">
                            <span>Supplier</span>
                            <input type="text" name="supplier" placeholder="Enter supplier name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <span>Taste</span>
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex md:gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span></label>
                        <label className="input-group">
                            <span>Category</span>
                            <input type="text" name="category" placeholder="Enter category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <span>Details</span>
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form photo url row */}
                <div>
                    <div className="form-control w-full mb-8">
                        <label className="label">
                            <span>Photo URL</span>
                        </label>
                        <label className="input-group">
                            <span>URL</span>
                            <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block" />
            </form>
        </div>
    );
};

export default AddCoffee;