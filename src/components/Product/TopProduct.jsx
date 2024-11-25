import React from 'react'
import Img1 from '../../assets/shirt/shirt.png'
import Img2 from '../../assets/shirt/shirt2.png'
import Img3 from '../../assets/shirt/shirt3.png'
import { FaStar } from 'react-icons/fa'

const Product = () => {

    const ProductData = [
        {
            id: 1,
            img: Img1,
            title: "Women Ethnic",
            des: "Mens Wear",
            rating: 5.0,
            color: "green",
            aosDelay: "0",
        },
        {
            id: 2,
            img: Img2,
            title: "Women Western",
            des: "Women Wear",
            rating: 4.5,
            color: "blue",
            aosDelay: "200",
        },
        {
            id: 3,
            img: Img3,
            title: "Men Sports",
            des: "Men Wear",
            rating: 4.0,
            color: "brown",
            aosDelay: "400",
        }
    ]

    return (
        <div className='container mx-auto px-4'>
            {/* Heading */}
            <div className='text-left mb-14'>
                <p data-aos="fade-up" className='text-sm text-primary'>Top Rated Product</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Product</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil ratione quos quidem inventore perferendis consequuntur vitae vero reprehenderit sed cupiditate!</p>
            </div>
            {/* Body section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 place-items-center'>
                {
                    ProductData.map((data) => (
                        <div
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            key={data.id}
                            className='relative rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white
                            shadow-xl transition duration-300 group max-w-[800px] mx-auto p-5'>
                            {/* Image section */}
                            <div className='relative h-[150px] -mt-20 flex justify-center'>
                                <img src={data.img} alt={data.title}
                                    className='w-[140px] h-auto transform group-hover:scale-105 transition duration-300 drop-shadow-md' />
                            </div>
                            {/* Content section */}
                            <div className='text-center mt-8'>
                                <div className='flex items-center justify-center gap-1'>
                                    <FaStar className='text-yellow-500' />
                                    <span>{data.rating}</span>
                                </div>
                                <h3 className='text-xl font-bold mt-2'>{data.title}</h3>
                                <p className='text-gray-500 group-hover:text-white transition duration-300 text-sm'>{data.des}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Product;
