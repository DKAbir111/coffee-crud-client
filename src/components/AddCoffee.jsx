
import { toast } from 'react-toastify';
import bgImage from '../assets/images/more/11.png'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaFileUpload } from "react-icons/fa";
import { useRef, useState } from 'react';
import Title from './Title';

export default function AddCoffee() {
    const imageRef = useRef(null)
    const [imageUrl, setImageURl] = useState('')
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        const formData = new FormData();
        formData.append('image', file)
        try {
            fetch('https://api.imgbb.com/1/upload?key=5c73e82c6c39c531a41a2361f2681168', {
                method: 'POST',
                body: formData

            }).then(res => res.json())
                .then(data => {
                    setImageURl(data.data.
                        display_url)

                })

        } catch (err) {
            console.error(err);
            return;
        }
    }
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
        // const photo = from.photo.value;
        const newCoffee = {
            name,
            chef,
            supplier,
            taste,
            category,
            details,
            photo: imageUrl,
            price
        }
        fetch('https://crud-coffee-server.onrender.com/addcoffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success("New Coffee added");
                    from.reset()
                }
            })
    }
    const navigate = useNavigate()
    return (
        <div className="relative flex justify-center p-7 items-center h-[800px] mb-20">
            <Title title='AddCoffee' />
            <img src={bgImage} alt="" />
            <div className='absolute top-5 flex left-3 md:left-7 lg:left-44'>
                <button onClick={() => navigate('/')} className='btn rounded-sm  text-xl font-rancho bg-[#E3B577]  border-black text-black'><FaArrowLeft />Back to Home</button>
            </div>
            <div className='lg:w-9/12 mx-auto absolute bg-[#F4F3F0] p-3 md:p-7 lg:px-24 py-10 mt-40'>

                <div className='flex flex-col gap-3 mb-4'>
                    <h2 className="text-3xl font-rancho text-center text-[#331A15]">Add New Coffee</h2>
                    <p className='font-raleway text-center lg:w-10/12 mx-auto'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                </div>
                <form action="" className='grid grid-cols-2 gap-5 font-raleway' onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Enter coffee name" name='name' className="input rounded-sm " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <input type="text" placeholder="Enter Chef name" name='chef' className="input rounded-sm " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" placeholder="Enter coffee supplier" name='supplier' className="input rounded-sm " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" placeholder="Enter coffee taste" name='taste' className="input rounded-sm " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" placeholder="Enter coffee category" name='category' className="input rounded-sm " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" placeholder="Enter coffee details" name='details' className="input rounded-sm" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Enter price" name='price' className="input rounded-sm" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="Enter photo URL" value={imageUrl} name='photo' className="input rounded-sm" required />
                        <div className='absolute right-0 btn text-xl btn-ghost top-9 rounded-sm' onClick={() => imageRef.current.click()}><FaFileUpload /> </div>
                    </div>
                    <input type="file" ref={imageRef} placeholder="Enter photo URL" name='photo' onChange={handleFileUpload} className="hidden" required />
                    <div className="form-control mt-3 col-span-2">
                        <button className="btn rounded-sm bg-[#D2B48C] border-2 border-black font-rancho text-lg">Add Coffee</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
