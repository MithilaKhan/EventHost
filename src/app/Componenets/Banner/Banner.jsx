import React from 'react';
import "./Banner.css"
import Image from 'next/image'; 
import vector from "@/assets/Resourcess/icon/Vector.png" 
import banner from "@/assets/Resourcess/banner.png" ; 

const Banner = () => {
    // console.log('Banner background image:', banner); 
    return (
       
        <div>
<div className='banner-container' >
    <div className='image-container'>
        <Image src={banner} alt="image" height={441} width={1160} className='brightness-50'/>
    </div>
    <div className='content-container lg:ms-28 ms-10 '>
    <h1 className='lg:text-3xl text-xl font-bold text-white lg:mb-10 mb-5'> CMA Fest </h1>
            <p className='lg:text-xl text-lg text-white lg:mb-10 mb-5'>Make memories that will last a lifetime. See your favorite <br /> artists live at CMA Fest!</p>

          <div className='flex  gap-5 items-center'>
          <div className='button-3'>
  <div className='flex gap-3 items-center py-2'> 
    <Image src={vector} alt="image" height={10} width={20} className=''/>
    <span>Get Ticket</span>
  </div>
</div>
            
            <button className="btn btn-outline text-white">Explore All Events</button>
            </div>
    </div>
          
            
        </div>
        </div>
        
    );
};

export default Banner;