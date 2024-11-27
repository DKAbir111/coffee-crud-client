
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
export default function CoffeeCard({ coffee, handleDelete }) {
    const { _id, name, chef, photo, price } = coffee;

    return (
        <div className='bg-[#F5F4F1] flex justify-evenly items-center p-3 rounded-md shadow-sm'>
            <div>
                <img src={photo} alt={name} />
            </div>
            <div className='font-raleway flex flex-col gap-3'>
                <p><span className='font-semibold'>Name:</span> {name}</p>
                <p><span className='font-semibold'>Chef:</span> {chef}</p>
                <p><span className='font-semibold'>Price:</span> {price} Taka</p>
            </div>
            <div className='flex flex-col gap-4'>
                <Link to={`/coffeedetails/${_id}`} className='btn text-xl rounded-md bg-[#D2B48C] text-white'><FaEye /></Link>
                <Link to={`/updatecoffee/${_id}`} className='btn text-xl rounded-md bg-[#3C393B] text-white'><MdOutlineEdit /></Link>
                <button onClick={() => handleDelete(_id)} className='btn text-xl rounded-md bg-[#EA4744] text-white'><MdDelete /> </button>
            </div>
        </div>
    )
}

CoffeeCard.propTypes = {
    coffee: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
}
