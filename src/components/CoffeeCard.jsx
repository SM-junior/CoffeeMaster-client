import { FaEye, FaPen, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    const { _id, name, photo, details, chef, supplier, origin } = coffee;

    const handleDelete = _id => {
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
                fetch(`http://localhost:3000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 items-center justify-between shadow-xl p-10 rounded-xl gap-10'>
            <div>
                <img src={photo} alt="" />
            </div>
            <div className='grid grid-cols-2 items-center text-left justify-between gap-10'>
                <div>
                    <p>Name: {name}</p>
                    <p>Chef: {chef}</p>
                    <p>Price: {supplier}</p>
                </div>
                <div className=''>
                    <Link><FaEye className='bg-amber-500 p-2 text-3xl text-white mb-3 rounded-md'></FaEye></Link>
                    <Link to={`updateCoffee/${_id}`}><FaPen className='bg-black p-2 text-3xl text-white mb-3 rounded-md'></FaPen></Link>
                    <Link onClick={() => handleDelete(_id)}><FaTrash className='bg-red-600 p-2 text-3xl text-white mb-3 rounded-md'></FaTrash></Link>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;