import React from 'react';
import bg from "@/assets/Resourcess/navigation.png" ;
import title from "@/assets/Resourcess/icon/EventHost.png" ;
import person from "@/assets/Resourcess/person.jpg" ;
import cart from "@/assets/Resourcess/icon/Group 7.png";
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className='mt-3 lg:mb-16 mb-10'>
           <div className="navbar items-center text-white pb-4 pt-2 " style={{
      backgroundImage: `url(${bg.src})`,
      width: '100%',
      height: '100%',
      backgroundRepeat:"no-repeat" ,
    }}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li><a>Events</a></li>
      <li><a>About Us</a></li>     
      <li><a>Contact </a></li>
      </ul>
    </div>
    <div className="ms-10">
        <Image src={title} alt="image" height={100} width={100} className=''/>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Events</a></li>
      <li><a>About Us</a></li>     
      <li><a>Contact </a></li>
    </ul>
  </div>
  <div className="navbar-end  ">
    <div className="flex gap-3 items-center me-10 ">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-8 rounded-full">
        <Image src={person} alt="image" height={100} width={100} className=''/>
        </div>
      </div>

      <div className=''>
      <Image src={cart} alt="image" height={20} width={25} className=''/>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;