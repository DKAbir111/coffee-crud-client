
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
export default function CoffeeCard({ coffee }) {
    const { name, chef, photo, price } = coffee;
    return (
        <div className='bg-[#F5F4F1] flex justify-evenly items-center p-5 rounded-md shadow-sm'>
            <div>
                <img src={photo} alt={name} />
            </div>
            <div className='font-raleway flex flex-col gap-3'>
                <p><span className='font-semibold'>Name:</span> {name}</p>
                <p><span className='font-semibold'>Chef:</span> {chef}</p>
                <p><span className='font-semibold'>Price:</span> {price} Taka</p>
            </div>
            <div className='flex flex-col gap-4'>
                <Link className='btn text-xl rounded-md bg-[#D2B48C] text-white'><FaEye /></Link>
                <Link className='btn text-xl rounded-md bg-[#3C393B] text-white'><MdOutlineEdit /></Link>
                <Link className='btn text-xl rounded-md bg-[#EA4744] text-white'><MdDelete /> </Link>
            </div>
        </div>
    )
}

CoffeeCard.propTypes = {
    coffee: PropTypes.object.isRequired,
}
