import React from 'react'
import BannerImg from '../../assets/women/women2.jpg'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'; // Make sure it's from io5
import { GiFoodTruck } from 'react-icons/gi';

function Banner() {
    return (
        <div className='min-h-[559px] flex justify-center items-center py-12 sm:py-0'>
            <div className="container">
                <div className="grid grid:cols-1 sm:grid-cols-2 gap-6 items-center">
                    <div data-aos="zoom-in">
                        <img src={BannerImg} alt="" className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover' />
                    </div>
                    <div className='space-y-6'>
                        <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'>Winter Sale upto 50% Off</h1>
                        <p data-aos="fade-up" data-aos-delay="300" className='leading-7'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                        </p>
                        <div className='flex flex-col gap-4'>
                            <div data-aos="fade-up" className='flex items-center gap-4'>
                                <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400' />
                                <p>Quality Products</p>
                            </div>
                            <div data-aos="fade-up" className='flex items-center gap-4'>
                                <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400' />
                                <p>Fast Delivery</p>
                            </div>
                            <div data-aos="fade-up" className='flex items-center gap-4'>
                                <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400' />
                                <p>Fast Delivery</p>
                            </div>
                            <div data-aos="fade-up" className='flex items-center gap-4'>
                                <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400' />
                                <p>Fast Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner