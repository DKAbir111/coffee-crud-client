
import { useNavigate } from 'react-router-dom'
import error from '../assets/images/404/404.gif'
export default function Error() {
    const navigate = useNavigate()
    return (
        <div className='flex justify-center items-center flex-col'>
            <img src={error} alt="" />
            <button onClick={() => navigate(-1)} className='btn rounded-md shadow-md border-none text-white bg-[#51C668]'>Go Back</button>
        </div>
    )
}
