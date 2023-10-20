import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {
    const loadedCoffee = useLoaderData()

    const handleUpdateCoffee = e => {
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

        fetch(`http://localhost:3000/coffee/${loadedCoffee._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Coffee updated successfully')
                }
            })
    }
    return (
        <div className='p-10 bg-green-200 mx-auto'>
            <h2 className='text-4xl mb-4'>Update a coffee</h2>
            <form onSubmit={handleUpdateCoffee}>
                <div className='flex'>
                    <div className="form-control me-4 md:w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' defaultValue={loadedCoffee.name} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='chef' defaultValue={loadedCoffee.chef} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='flex'>
                    <div className="form-control me-4 md:w-full">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='supplier' defaultValue={loadedCoffee.supplier} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='taste' defaultValue={loadedCoffee.taste} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='flex'>
                    <div className="form-control me-4 md:w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='category' defaultValue={loadedCoffee.category} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' defaultValue={loadedCoffee.details} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='photo' defaultValue={loadedCoffee.photo} className="input input-bordered w-full" />
                    </label>
                </div>
                <input type="submit" value="Update Coffee" className="btn btn-white w-full mt-4 capitalize" />
            </form>
        </div>
    );
};

export default UpdateCoffee;