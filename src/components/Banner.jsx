
import bannerImg from '../assets/images/more/3.png'
export default function Banner() {
    return (
        <div className='relative h-[550px] flex justify-center lg:justify-end items-center'>

            <img src={bannerImg} alt="" className='object-cover h-full w-full absolute -z-10' />

            <div className='flex flex-col gap-5 lg:w-1/2 p-3 items-center lg:items-start'>
                <h2 className='text-center lg:text-left font-rancho text-6xl text-white'>Would you like a Cup of Delicious Coffee?</h2>
                <p className='text-center lg:text-left font-raleway text-white w-11/12'>It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!!
                    Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <div>
                    <button className='btn rounded-sm  text-xl font-rancho bg-[#E3B577] hover:bg-transparent border-[#E3B577] hover:border-[#E3B577] hover:text-white'>Learn More</button>
                </div>

            </div>
        </div>


    )
}
