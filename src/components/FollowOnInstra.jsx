import { useEffect, useState } from "react"


export default function FollowOnInstra() {
    const [cups, setCups] = useState([])
    useEffect(() => {
        fetch('/FollowInstra.json')
            .then(res => res.json()
                .then(data => setCups(data)))
    }, [])
    return (
        <div className="my-10 p-3 lg:w-10/12 mx-auto">
            <div className="my-10">
                <p className="font-raleway text-center">Follow Us Now</p>
                <h2 className="text-3xl font-rancho text-center text-[#331A15]">Follow on Instagram</h2>
            </div>
            <div className="grid grid-cols-4 gap-5">
                {
                    cups.map(cup => <img key={cup.id} src={cup.image} />)
                }
            </div>
        </div>
    )
}
