import React from 'react'
import Img from '../../assets/website/orange-pattern.jpg'

const BannerImg = {
    backgroundImage: `url(${Img})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%'
}

function Subscribe() {
    return (
        <div data-aos="zoom-in"
            className='bg-gray-100 mb-20 dark:bg-gray-800 text-white'
            style={BannerImg}>
            <div className='container backdrop-blur-sm py-10'>
                <div className='space-y-6 max-w-xl mx-auto'>
                    <h1 className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold'>Get Notified About New Products</h1>
                    <input data-aos="zoom-in" type="text" name="" id="" className='w-full p-3' placeholder='Enter your email' />
                </div>
            </div>
        </div>
    )
}

export default Subscribe