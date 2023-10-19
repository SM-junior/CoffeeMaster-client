import { FaEye, FaPen, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee }) => {
    const { name, photo, details, chef, supplier, origin } = coffee;
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
                    <Link><FaPen className='bg-black p-2 text-3xl text-white mb-3 rounded-md'></FaPen></Link>
                    <Link><FaTrash className='bg-red-600 p-2 text-3xl text-white mb-3 rounded-md'></FaTrash></Link>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;