import { Link, useLoaderData } from "react-router-dom"
import { GiCoffeeCup } from "react-icons/gi";
import CoffeeCard from "./CoffeeCard";
import Swal from "sweetalert2";
import { useState } from "react";
import backgroundImg from '../assets/images/more/1.png'

export default function PopulerProucts() {
    const data = useLoaderData()
    const [coffees, setCoffees] = useState(data)
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                fetch(`http://localhost:5001/deletecoffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            const remainingCoffee = coffees.filter(coffee => coffee._id !== id)
                            setCoffees(remainingCoffee);
                        }
                    })
            }
        });
    }
    return (
        <div className="mx-auto mb-20 relative" id="main">
            <img src={backgroundImg} alt="" className="absolute -z-10" />
            <div className="w-10/12 mx-auto">
                <div className="my-10 flex justify-center items-center flex-col gap-3">
                    <p className="font-raleway text-center">--- Sip & Savor ---</p>
                    <h2 className="text-3xl font-rancho text-center text-[#331A15] font-bold">Our Popular Products</h2>
                    <Link to={'/addcoffee'} className='btn rounded-sm  text-xl font-rancho bg-[#E3B577]  border-black text-black'>Add Coffee <GiCoffeeCup /></Link>
                </div>
                <div className="grid grid-cols-2 gap-7">
                    {
                        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} handleDelete={handleDelete} />)
                    }
                </div>

            </div>
        </div>
    )
}
