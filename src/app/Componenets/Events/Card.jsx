import React from 'react';
import img1 from "@/assets/Resourcess/1.png" ;
import img2 from "@/assets/Resourcess/2.png" ;
import img3 from "@/assets/Resourcess/3.png" ;
import Fav from "@/assets/Resourcess/icon/Heart.png";
import vector from "@/assets/Resourcess/icon/Vector.png" 
import { FaLocationDot } from "react-icons/fa6";
import "./Events.css"

import Image from 'next/image';

const Card = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-3 grid-cols-1 mt-10 lg:gap-10 gap-5" >

            <div className="card  shadow-xl bg-[#F1F3FF] ">
  <figure className="relative px-5 pt-5">
  <Image src={img3} alt="image" height={120} width={400} className='rounded-lg'/>
  </figure>

  <div className=' absolute left-0 top-0 p-8'>
    <p className='bg-[#7342F9] text-white px-5 py-3 rounded-lg'>Online </p></div>

  <div className=' absolute top-0 right-0 p-8 '>
  <div className='flex gap-2 items-center bg-[#7342F9] text-white px-5 py-3 rounded-lg'> 
    <Image src={Fav} alt="image" height={10} width={20} className=''/>
    <span>Favorite</span>
  </div>
</div>

  <div className="card-body   pt-4 ">
    <div className=" flex ">
        <div>
        <p className='bg-[#7342F9] text-white px-5 py-2 rounded-lg w-1/3 '>Music </p>
        <p className="flex  gap-2 pb-2 mt-2 text-sm items-center"><span className="text-purple-600"> <FaLocationDot /> </span> <span>Celebrity Convention Hall </span> </p>
        <h1 className=" text-xl pb-2 font-semibold">ROUFIAN’S HSC-24 RAG DAy</h1>
        </div>
        <div className="p-3 bg-white w-1/3 lg:h-24 rounded-lg ">
        <p className='text-sm'>Apr</p>
        <h1 className='text-purple-600 text-xl font-semibold '>20</h1>
        <p className='text-sm'>10 PM</p>
        </div>
    </div>
    <div className="flex gap-3 items-center">
    <div className='button-3'>
  <div className='flex gap-2 items-center '> 
    <Image src={vector} alt="image" height={10} width={20} className=''/>
    <span>Get Ticket</span>
  </div>
</div>

<div className="p-1 bg-white flex rounded-lg items-center ">
        <h1 className='text-purple-600 text-lg font-semibold '>20</h1>
        <p className='text-sm'>Seat Left</p>
        </div>

        <p className="text-purple-600 text-sm">See More</p>
    </div>
  </div>
</div>


            <div className="card  shadow-xl bg-[#F1F3FF] ">
  <figure className="relative px-5 pt-5">
  <Image src={img1} alt="image" height={120} width={400} className='rounded-lg'/>
  </figure>

  <div className=' absolute left-0 top-0 p-8'>
    <p className='bg-[#7342F9] text-white px-5 py-3 rounded-lg'>Online </p></div>

  <div className=' absolute top-0 right-0 p-8 '>
  <div className='flex gap-2 items-center bg-[#7342F9] text-white px-5 py-3 rounded-lg'> 
    <Image src={Fav} alt="image" height={10} width={20} className=''/>
    <span>Favorite</span>
  </div>
</div>

  <div className="card-body   pt-4 ">
    <div className=" flex ">
        <div>
        <p className='bg-[#7342F9] text-white px-5 py-2 rounded-lg w-1/3 '>Music </p>
        <p className="flex  gap-2 pb-2 mt-2 text-sm items-center"><span className="text-purple-600"> <FaLocationDot /> </span> <span>Celebrity Convention Hall </span> </p>
        <h1 className=" text-xl pb-2 font-semibold">ROUFIAN’S HSC-24 RAG DAy</h1>
        </div>
        <div className="p-3 bg-white w-1/3 lg:h-24 rounded-lg ">
        <p className='text-sm'>Apr</p>
        <h1 className='text-purple-600 text-xl font-semibold '>20</h1>
        <p className='text-sm'>10 PM</p>
        </div>
    </div>
    <div className="flex gap-3 items-center">
    <div className='button-3'>
  <div className='flex gap-2 items-center '> 
    <Image src={vector} alt="image" height={10} width={20} className=''/>
    <span>Get Ticket</span>
  </div>
</div>

<div className="p-1 bg-white flex rounded-lg items-center ">
        <h1 className='text-purple-600 text-lg font-semibold '>20</h1>
        <p className='text-sm'>Seat Left</p>
        </div>

        <p className="text-purple-600 text-sm">See More</p>
    </div>
  </div>
</div>


            <div className="card  shadow-xl bg-[#F1F3FF] ">
  <figure className="relative px-5 pt-5">
  <Image src={img2} alt="image" height={120} width={400} className='rounded-lg'/>
  </figure>

  <div className=' absolute left-0 top-0 p-8'>
    <p className='bg-[#7342F9] text-white px-5 py-3 rounded-lg'>Online </p></div>

  <div className=' absolute top-0 right-0 p-8 '>
  <div className='flex gap-2 items-center bg-[#7342F9] text-white px-5 py-3 rounded-lg'> 
    <Image src={Fav} alt="image" height={10} width={20} className=''/>
    <span>Favorite</span>
  </div>
</div>

  <div className="card-body   pt-4 ">
    <div className=" flex ">
        <div>
        <p className='bg-[#7342F9] text-white px-5 py-2 rounded-lg w-1/3 '>Music </p>
        <p className="flex  gap-2 pb-2 mt-2 text-sm items-center"><span className="text-purple-600"> <FaLocationDot /> </span> <span>Celebrity Convention Hall </span> </p>
        <h1 className=" text-xl pb-2 font-semibold">ROUFIAN’S HSC-24 RAG DAy</h1>
        </div>
        <div className="p-3 bg-white w-1/3 lg:h-24 rounded-lg ">
        <p className='text-sm'>Apr</p>
        <h1 className='text-purple-600 text-xl font-semibold '>20</h1>
        <p className='text-sm'>10 PM</p>
        </div>
    </div>
    <div className="flex gap-3 items-center">
    <div className='button-3'>
  <div className='flex gap-2 items-center '> 
    <Image src={vector} alt="image" height={10} width={20} className=''/>
    <span>Get Ticket</span>
  </div>
</div>

<div className="p-1 bg-white flex rounded-lg items-center ">
        <h1 className='text-purple-600 text-lg font-semibold '>20</h1>
        <p className='text-sm'>Seat Left</p>
        </div>

        <p className="text-purple-600 text-sm">See More</p>
    </div>
  </div>
</div>


            </div>
        </div>
    );
};

export default Card;