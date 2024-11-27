import { Link, useLoaderData } from "react-router-dom"
import { GiCoffeeCup } from "react-icons/gi";
import CoffeeCard from "./CoffeeCard";

export default function PopulerProucts() {
    const coffees = useLoaderData()
    console.log(coffees)
    return (
        <div className="w-10/12 mx-auto mb-20">
            <div className="my-10 flex justify-center items-center flex-col gap-3">
                <p className="font-raleway text-center">--- Sip & Savor ---</p>
                <h2 className="text-3xl font-rancho text-center text-[#331A15] font-bold">Our Popular Products</h2>
                <Link to={'/addcoffee'} className='btn rounded-sm  text-xl font-rancho bg-[#E3B577]  border-black text-black'>Add Coffee <GiCoffeeCup /></Link>
            </div>
            <div className="grid grid-cols-2 gap-7">
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} />)
                }
            </div>

        </div>
    )
}
