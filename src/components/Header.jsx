import headerImg from '../assets/images/more/15.jpg'
import logo from '../assets/images/more/logo1.png'
export default function Header() {
    return (
        <div className="h-20 relative">
            <img src={headerImg} alt="Header image" className='w-full h-full object-cover' />
            <div className='flex absolute top-0 w-full h-20 justify-center items-center gap-1'>
                <img src={logo} alt="Logo" className='w-12' />
                <h2 className='font-rancho text-4xl text-white'>Espresso Emporium</h2>
            </div>
        </div>
    )
}
