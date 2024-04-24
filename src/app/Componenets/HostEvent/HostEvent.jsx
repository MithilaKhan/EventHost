import Image from 'next/image';
import React from 'react';
import host from "@/assets/Resourcess/Group 29.png" ; 
import watch from "@/assets/Resourcess/Group.png" ; 
import { FaCircleCheck } from "react-icons/fa6";

const HostEvent = () => {
    return (
        <div className='lg:relative'>
<div className='h-[560px] bg-[#7342F9] rounded-4xl lg:mt-16 mt-10  '>
            <div className='grid lg:grid-cols-2 grid-cols-1 content-center justify-items-center lg:py-24 lg:px-16'>
                <div className='grid-cols-4'>
                <Image src={host} alt="image" height={300} width={400} className=''/>
                </div>

                <div className='grid-cols-8 text-white mt-8 '>
                    <h1 className='lg:text-2xl text-xl font-semibold mb-5'>Host Your Event Easily & Automatedly with Us  </h1>
                    <p className="lg:text-xl text-lg mb-5" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, error! </p>
                    <p className='flex gap-2 items-center mb-2'> <span> <FaCircleCheck /> </span> <span> Lorem ipsum dolor sit amet. </span> </p>
                    <p className='flex gap-2 items-center mb-2'> <span> <FaCircleCheck /> </span> <span> Lorem, ipsum dolor sit amet consectetur . </span> </p>
                    <p className='flex gap-2 items-center mb-2'> <span> <FaCircleCheck /> </span> <span> Lorem ipsum dolor sit amet. </span> </p>
                    <p className='flex gap-2 items-center mb-2'> <span> <FaCircleCheck /> </span> <span> Lorem, ipsum dolor sit amet consectetur . </span> </p>
                </div>
            </div>
        </div>

        <div className="lg:absolute lg:bottom-0 lg:right-0">
        <Image src={watch} alt="image" height={120} width={250} className=''/>
        </div>

        </div>
        
    );
};

export default HostEvent;