import { FaArrowLeft } from "react-icons/fa6";
import { useLoaderData, useNavigate } from "react-router-dom";
import bgImage from '../assets/images/more/11.png'


export default function CoffeeDetails() {
    const coffee = useLoaderData()
    const navigate = useNavigate()
    return (
        <div className="relative flex flex-col items-center px-5 py-10">
            <img src={bgImage} alt="" className="absolute -z-10" />
            <button onClick={() => navigate(-1)} className='btn rounded-sm  text-xl font-rancho bg-[#E3B577]  border-black text-black absolute top-7 left-36'><FaArrowLeft />Back to Home</button>
            {/* Main Content */}
            <div className="bg-[#F4F3F0] shadow-sm rounded-lg p-10 flex gap-10 items-center max-w-6xl w-full mt-20">
                {/* Image Section */}
                <div className="w-1/2 flex justify-center">
                    <img
                        src={coffee.photo}
                        alt={coffee.name}
                        className="rounded-md object-cover w-1/2"
                    />
                </div>

                {/* Details Section */}
                <div className="w-1/2">
                    <h2 className="text-4xl font-rancho text-[#4a2c21] mb-5 drop-shadow-lg">
                        Niceties
                    </h2>
                    <ul className="text-lg font-raleway text-[#4a2c21] space-y-3">
                        <li>
                            <strong className="font-semibold"> Name:</strong> {coffee.name}
                        </li>
                        <li>
                            <strong className="font-semibold"> Chef:</strong> {coffee.chef}
                        </li>
                        <li>
                            <strong className="font-semibold"> Supplier:</strong> {coffee.supplier}
                        </li>
                        <li>
                            <strong className="font-semibold"> Taste:</strong> {coffee.taste}
                        </li>
                        <li>
                            <strong className="font-semibold"> Category:</strong> {coffee.category}
                        </li>
                        <li>
                            <strong className="font-semibold"> Details:</strong> {coffee.details}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
