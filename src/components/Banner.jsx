
import bannerImg from '../assets/images/more/3.png'
export default function Banner() {
    return (
        <div className='relative flex justify-end items-center'>

            <img src={bannerImg} alt="" />

            <div className='absolute flex flex-col gap-5 w-1/2'>
                <h2 className='font-rancho text-6xl text-white'>Would you like a Cup of Delicious Coffee?</h2>
                <p className='font-raleway text-white w-11/12'>It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!!
                    Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <div>
                    <button className='btn rounded-sm  text-xl font-rancho bg-[#E3B577] hover:bg-transparent border-[#E3B577] hover:border-[#E3B577] hover:text-white'>Learn More</button>
                </div>
            </div>
        </div>


    )
}
