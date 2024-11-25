import React from 'react';
import Slider from 'react-slick'; // Ensure you have the react-slick package installed
import 'slick-carousel/slick/slick.css'; // Slick styles
import 'slick-carousel/slick/slick-theme.css';

const TestimonialsData = [
    {
        id: 1,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        img: "https://picsum.photos/101/101" // Replace with actual image or imported images
    },
    {
        id: 2,
        name: "Jane Doe",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        img: "https://picsum.photos/102/102"
    },
    {
        id: 3,
        name: "John Smith",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        img: "https://picsum.photos/103/103"
    },
    {
        id: 4,
        name: "Jane Smith",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        img: "https://picsum.photos/104/104"
    },
]

function Testimonials() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Shows 3 slides at once
        slidesToScroll: 1, // Scrolls one slide at a time
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        centerMode: false, // Disable centerMode to avoid partially showing cards
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="max-w-[1200px] mx-auto"> {/* Container to center the entire slider */}
            {/* Heading */}
            <div className='text-center mb-10 max-w-[600px] mx-auto mt-10'>
                <p data-aos="fade-up" className='text-sm text-primary'>Top Our Customers Are Saying</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonials</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil ratione quos quidem inventore perferendis consequuntur vitae vero reprehenderit sed cupiditate!
                </p>
            </div>

            {/* Testimonial slider */}
            <div className='overflow-hidden'>
                <Slider {...settings}>
                    {TestimonialsData.map((data) => (
                        <div
                            key={data.id}
                            className='flex flex-col items-center text-center gap-4 py-8 px-6 mx-4 bg-[#fff7e6] rounded-xl shadow-lg max-w-[300px]' // Width and margin for each card
                        >
                            <img src={data.img} alt={data.name} className='rounded-full w-20 h-20' />
                            <div className='flex flex-col items-center gap-4'>
                                <p className='text-xs text-gray-500'>{data.text}</p>
                                <h3 className='text-xl font-bold text-black/80 dark:text-light'>{data.name}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Testimonials;
