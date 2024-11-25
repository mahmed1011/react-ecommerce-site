// components/Navbar.js
import React, { useContext } from 'react'; 
import Logo from '../../assets/logo.png';
import { IoMdSearch } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";
import DarkMode from './DarkMode';
import { FaCaretDown } from "react-icons/fa";
import { Link } from 'react-router-dom'; 
import { CartContext } from '../../contextApi/CartContext'; 

const Menu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about-us" },
    { id: 3, name: "Kids Wear", link: "/kids/wear" },
    { id: 4, name: "Mens Wear", link: "/mens/wear" },
    { id: 5, name: "Electronics", link: "/electronics" },
];

const DropdownLink = [
    { id: 1, name: "Trending Products", link: "/trending/products" },
    { id: 2, name: "Best Selling", link: "/best/selling" },
    { id: 3, name: "Top Rated", link: "/top/rated" },
];

function Navbar() {
    const { cartItems } = useContext(CartContext);

    // Calculate total quantity of items in the cart
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            <div className='bg-primary/40 py-2'>
                <div className='container flex justify-between items-center'>
                    <div>
                        <Link to="/" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                            <img src={Logo} alt="" className='w-10' />LastOption
                        </Link>
                    </div>

                    <div className='flex gap-3'>
                        <div className='relative group hidden sm:block'>
                            <input type="text" placeholder='Search' className='w-[200px] sm:w-[200px] group-hover:w-[300px] 
                            transaction-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1
                            focus:border-primary dark:border-gray-500 dark:bg-gray-800 ' />
                            <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
                        </div>
                        <Link to="/cart" className="relative flex items-center gap-3">
                            <FaCartArrowDown className='text-xl text-white drop-shadow-sm cursor-pointer' />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                                {totalItems}
                            </span>
                        </Link>
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <ul className='sm:flex hidden items-center gap-4'>
                    {Menu.map((data) => (
                        <li key={data.id}>
                            <Link to={data.link} className='inline-block px-4 my-2 hover:text-primary duration-200'>
                                {data.name}
                            </Link>
                        </li>
                    ))}
                    <li className='group relative cursor-pointer'>
                        <span className='flex items-center gap-2 py-2'>
                            Trending Product 
                            <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
                        </span>
                        <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black'>
                            <ul>
                                {DropdownLink.map((data) => (
                                    <li key={data.id}>
                                        <Link to={data.link} className='inline-block w-full rounded-md py-2 hover:bg-primary/20'>
                                            {data.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
