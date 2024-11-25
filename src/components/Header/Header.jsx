import React from 'react'
import Image1 from '../../assets/hero/women.png'
import Image2 from '../../assets/hero/shopping.png'
import Image3 from '../../assets/hero/sale.png'
import Slider from "react-slick"

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "30% Off For All New Womens Arrivals",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
        id: 2,
        img: Image2,
        title: "50% Off For All New Mens Arrivals",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
        id: 3,
        img: Image3,
        title: "10% Off For All New Arrivals",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },

]

function Header() {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true
    }

    return (
        <div>
            <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650]
         bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark-text-white duration-200'>
                {/* background pattern */}
                <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>
                </div>
                {/* hero section */}
                <div className='container pb-8 sm:pb-0'>
                    <Slider {...settings}>
                        {ImageList.map((data) => (
                            <div>
                                <div className='grid grid-cols-1 sm:grid-cols-2'>
                                    {/* text-section */}
                                    <div className='justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left
                        order-2 sm:order-1 relative z-10 my-20'>
                                        <h1
                                        data-aos="zoom-out"
                                        data-aos-delay="500"
                                        data-aos-once="true"  
                                        className='text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white'>
                                            {data.title}
                                        </h1>
                                        <p
                                             data-aos="fade-up"
                                             data-aos-duration="500"
                                             data-aos-delay="100"
                                             data-aos-once="true"    
                                        className='text-sm py-5 text-gray-700 dark:text-white'>
                                            {data.description}
                                        </p>

                                        <div>
                                            <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white
                                py-2 px-4 rounded-full'>
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                    {/* Image section */}
                                    <div className='order-1 sm:order-2 '>
                                        <div data-aos="zoom-in"
                                        data-aos-once="true"
                                        className='relative z-10'>
                                            <img 
                                            src={data.img} alt="" className='w-[200px] h-[200px] sm:h-[450px] 
                                sm:w-[450px] sm:scale-125 object-contain mx-auto ' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ Slider>
                </div>
            </div>
        </div>
    )
}

export default Header