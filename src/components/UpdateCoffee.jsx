import { toast } from 'react-toastify';
import bgImage from '../assets/images/more/11.png'
import { FaArrowLeft } from "react-icons/fa";
import { useLoaderData, useNavigate } from 'react-router-dom';
export default function UpdateCoffee() {
    const coffee = useLoaderData()
    const { _id, name, chef, supplier, taste, category, details, photo, price } = coffee
    const handleSubmit = (e) => {
        e.preventDefault()
        const from = e.target;
        const name = from.name.value;
        const chef = from.chef.value;
        const supplier = from.supplier.value;
        const taste = from.taste.value;
        const category = from.category.value;
        const details = from.details.value;
        const price = from.price.value;
        const photo = from.photo.value;
        const newCoffee = {
            name,
            chef,
            supplier,
            taste,
            category,
            details,
            photo,
            price
        }
        fetch(`http://localhost:5001/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Coffee updated successfully')
                    navigate(-1)
                }
                if (data.matchedCount > 0) {
                    toast.error('No changes made.')
                }

            })
    }
    const navigate = useNavigate()
    return (
        <div className="relative flex justify-center items-center mb-20 h-[800px]">
            <img src={bgImage} alt="" />
            <button onClick={() => navigate(-1)} className='btn rounded-sm  text-xl font-rancho bg-[#E3B577]  border-black text-black absolute top-7 left-3 lg:left-[180px]'><FaArrowLeft />Back to Home</button>
            <div className='lg:w-9/12 mx-auto absolute bg-[#F4F3F0] p-3 lg:px-24 py-10 mt-40'>

                <div className='flex flex-col gap-3 mb-4'>
                    <h2 className="text-3xl font-rancho text-center text-[#331A15]">Update Existing Coffee Details</h2>
                    <p className='font-raleway text-center lg:w-10/12 mx-auto'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                </div>
                <form action="" className='grid grid-cols-2 gap-5 font-raleway' onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={name} placeholder="Enter coffee name" name='name' className="input rounded-sm " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <input type="text" defaultValue={chef} placeholder="Enter Chef name" name='chef' className="input rounded-sm " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" defaultValue={supplier} placeholder="Enter coffee supplier" name='supplier' className="input rounded-sm " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" defaultValue={taste} placeholder="Enter coffee taste" name='taste' className="input rounded-sm " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" defaultValue={category} placeholder="Enter coffee category" name='category' className="input rounded-sm " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" defaultValue={details} placeholder="Enter coffee details" name='details' className="input rounded-sm" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" defaultValue={price} placeholder="Enter price" name='price' className="input rounded-sm" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" defaultValue={photo} placeholder="Enter photo URL" name='photo' className="input rounded-sm" required />
                    </div>
                    <div className="form-control mt-3 col-span-2">
                        <button className="btn rounded-sm bg-[#D2B48C] border-2 border-black font-rancho text-lg">Update Coffee</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
