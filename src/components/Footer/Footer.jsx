import React from 'react';
import FooterImage from '../../assets/website/footer-pattern.jpg'; // Ensure this path is correct
import FooterLogo from '../../assets/logo.png'; // Ensure this path is correct
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons

function Footer() {
    return (
        <footer 
            className='text-white py-6 mt-10' 
            style={{ 
                backgroundImage: `url(${FooterImage})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}
        >
            <div className='container mx-auto px-4 bg-opacity-70'>
                <div className='flex flex-col md:flex-row justify-between items-start'>
                    <div className='mb-4 md:mb-0'>
                        <h2 className='flex items-center text-2xl font-bold'>
                            <img src={FooterLogo} className='max-w-[50px] mr-2' alt="Logo" />
                            LastOption
                        </h2>
                        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in beatae ea recusandae blanditiis veritatis.</p>
                    </div>
                    <div className='mb-4 md:mb-0'>
                        <h4 className='text-lg font-semibold'>Important Links</h4>
                        <ul className='mt-2 space-y-1'>
                            <li><a href="#" className='text-gray-400 hover:text-white'>Home</a></li>
                            <li><a href="#" className='text-gray-400 hover:text-white'>About</a></li>
                            <li><a href="#" className='text-gray-400 hover:text-white'>Contact</a></li>
                            <li><a href="#" className='text-gray-400 hover:text-white'>Blog</a></li>
                        </ul>
                    </div>
                    <div className='mb-4 md:mb-0'>
                        <h4 className='text-lg font-semibold'>Follow Us</h4>
                        <div className='flex gap-4 mt-2'>
                            <a href="#" className='text-gray-400 hover:text-white'><FaFacebook size={24} /></a>
                            <a href="#" className='text-gray-400 hover:text-white'><FaTwitter size={24} /></a>
                            <a href="#" className='text-gray-400 hover:text-white'><FaInstagram size={24} /></a>
                            <a href="#" className='text-gray-400 hover:text-white'><FaLinkedin size={24} /></a>
                        </div>
                    </div>
                    <div className='mb-4 md:mb-0'>
                        <h4 className='text-lg font-semibold'>Contact Us</h4>
                        <p className='mt-2'>Noida, Uttar Pradesh</p>
                        <p>+91 123456789</p>
                    </div>
                </div>
                <div className='text-center mt-6'>
                    <p className='text-sm text-gray-400'>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
