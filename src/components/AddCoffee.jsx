
import bgImage from '../assets/images/more/11.png'
export default function AddCoffee() {
    const handleSubmit = (e) => {
        e.preventDefault()
        const from = e.target;
        const name = from.name.value;
        const chef = from.chef.value;
        const supplier = from.supplier.value;
        const taste = from.taste.value;
        const category = from.category.value;
        const details = from.details.value;
        const photo = from.photo.value;
        const newCoffee = {
            name,
            chef,
            supplier,
            taste,
            category,
            details,
            photo,
        }
        fetch('http://localhost:5001/addcoffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        console.log('Form submitted!', newCoffee)
    }
    return (
        <div className="relative flex justify-center items-center">
            <img src={bgImage} alt="" />
            <div className='w-9/12 mx-auto absolute bg-[#F4F3F0] px-24 py-10'>
                <div className='flex flex-col gap-3 mb-4'>
                    <h2 className="text-3xl font-rancho text-center text-[#331A15]">Follow on Instagram</h2>
                    <p className='font-raleway text-center w-10/12 mx-auto'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

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
                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="Enter photo URL" name='photo' className="input rounded-sm" required />
                    </div>
                    <div className="form-control mt-3 col-span-2">
                        <button className="btn rounded-sm bg-[#D2B48C] border-2 border-black font-rancho text-lg">Add Coffee</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
