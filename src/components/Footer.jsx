
import footerImage from '../assets/images/more/13.jpg'
import footerImage2 from '../assets/images/more/24.jpg'
import logo from '../assets/images/more/logo1.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
export default function Footer() {
    return (
        <div>
            <div className='relative flex justify-center items-center'>
                <img src={footerImage} alt="Footer image" />
                <div className='flex justify-evenly absolute items-center'>
                    <div className='flex flex-col gap-5 w-1/2'>
                        <img src={logo} alt="Logo" className='w-16' />
                        <h2 className='font-rancho text-4xl text-[#331A15] font-semibold'>Espresso Emporium</h2>
                        <p className='font-raleway'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                        <div className='flex gap-2'>
                            <a href="" className='text-3xl text-[#331A15]'>    <FaFacebook /></a>
                            <a href="" className='text-3xl text-[#331A15]'><FaTwitter /></a>
                            <a href="" className='text-3xl text-[#331A15]'><FaInstagram /></a>
                            <a href="" className='text-3xl text-[#331A15]'><FaLinkedin /></a>
                        </div>
                        <h2 className='font-rancho text-4xl text-[#331A15] font-semibold'>Get in Touch</h2>
                        <div className='font-raleway flex flex-col gap-3'>
                            <p className='flex items-center gap-2 text-[#331A15]'>
                                <FaPhoneAlt /> +88 01533 333 333
                            </p>
                            <p className='flex items-center gap-2 text-[#331A15]'>
                                <IoMdMail /> info@gmail.com
                            </p>
                            <p className='flex items-center gap-2 text-[#331A15]'>
                                <FaLocationDot /> 72, Wall street, King Road, Dhaka
                            </p>
                        </div>
                    </div>

                    <div className='w-2/5 flex flex-col gap-5'>
                        <h2 className='font-rancho text-4xl text-[#331A15] font-semibold'>Connect with Us</h2>
                        <form className='flex flex-col gap-3 font-raleway'>
                            <input type="text" placeholder="Name" className="input" />
                            <input type="text" placeholder="Email" className="input" />
                            <input type="text" placeholder="Message" className="input h-36" />
                            <button type="submit" className="btn btn-outline text-lg text-[#331A15] hover:bg-[#331A15] hover:border-[#331A15] border-[#331A15] font-rancho w-1/3 rounded-full">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className='h-14 relative'>
                <img src={footerImage2} alt="Footer image" className='w-full h-full object-cover' />
                <h3 className='font-rancho text-xl text-white absolute top-0 h-14 w-full flex justify-center items-center'>Copyright Espresso Emporium ! All Rights Reserved</h3>
            </div>

        </div>



    )
}
