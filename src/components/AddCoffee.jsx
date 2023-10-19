import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleNewCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const chef = form.chef.value
        const supplier = form.supplier.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const newCoffee = {
            name, chef, supplier, category, details, photo
        }
        console.log(newCoffee);

        fetch('http://localhost:3000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleNewCoffee} className='p-10 bg-green-200 mx-auto'>
                <h2 className='text-4xl mb-4'>Add New Coffee</h2>
                <div className='flex'>
                    <div className="form-control me-4 md:w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Enter coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='chef' placeholder="Enter coffee chef" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='flex'>
                    <div className="form-control me-4 md:w-full">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='supplier' placeholder="Enter coffee supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='taste' placeholder="Enter coffee taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='flex'>
                    <div className="form-control me-4 md:w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='category' placeholder="Enter coffee category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' placeholder="Enter coffee details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='photo' placeholder="Enter coffee details" className="input input-bordered w-full" />
                    </label>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-white w-full mt-4 capitalize" />
            </form>
        </div>
    );
};

export default AddCoffee;