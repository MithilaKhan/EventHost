import Image from 'next/image';
import React from 'react';
import click1 from "@/assets/Resourcess/icon/click1.png" 
import qr from "@/assets/Resourcess/icon/click.png" 
import check from "@/assets/Resourcess/icon/check 1.png" 
import mail from "@/assets/Resourcess/icon/Vector-1.png" 

const QRScanner = () => {
    return (
        <div className="lg:mt-16 mt-10 lg:mb-16 mb-10">
            <div className=" mx-auto text-center lg:mb-10 mb-5 ">
                <h1 className="text-3xl font-semibold">Automated QR Scanner</h1>
                <p className="text-purple-500">Scan & Verify The Attendees Directly By Our QR Scanning Solution.</p>
            </div>

            <div className='grid lg:grid-cols-4 grid-cols-1 gap-3'>
{/* 1st  */}
            <div className="stats shadow lg:h-[209px] lg:w-[275px] bg-[#F1F3FF]">
  <div className="stat">
    
    <div tabIndex={0} role="button" className="stat-title btn  btn-circle avatar">
        <div className="w-8 rounded-full">
        <Image src={click1} alt="image" height={15} width={30} className=''/>
        </div>
      </div>

    <div className="lg:text-3xl text-xl   lg:font-bold font-semibold">One Click</div>
    <div className="lg:text-xl text-lg ">QR verification System</div>
  </div> 
</div>

{/* 2nd  */}
            <div className="stats shadow lg:h-[209px] lg:w-[275px] bg-[#F1F3FF]">
  <div className="stat">
    
    <div className="stat-title mt-4">
        {/* <div className="w-8 rounded-full">  */}
        <Image src={qr} alt="image" height={15} width={30} className=''/>
        {/* </div> */}
      </div>

    <div className="lg:text-3xl text-xl   lg:font-bold font-semibold">One Time</div>
    <div className="lg:text-xl text-lg ">QR Code</div>
  </div> 
</div>

{/* 3rd  */}
            <div className="stats shadow lg:h-[209px] lg:w-[275px] bg-[#F1F3FF]">
  <div className="stat">
    
    <div tabIndex={0} role="button" className="stat-title btn  btn-circle avatar">
        <div className="w-8 rounded-full">
        <Image src={check} alt="image" height={15} width={30} className=''/>
        </div>
      </div>

    <div className="lg:text-3xl text-xl   lg:font-bold font-semibold">Easy Access</div>
    <div className="lg:text-xl text-lg ">lorem ispum access</div>
  </div> 
</div>

{/* 4th  */}
            <div className="stats shadow lg:h-[209px] lg:w-[275px] bg-[#F1F3FF]">
  <div className="stat">
    
    <div  className="stat-title mt-4">     
        <Image src={mail} alt="image" height={15} width={30} className=''/>        
      </div>  

    <div className="lg:text-3xl text-xl   lg:font-bold font-semibold">Mail</div>
    <div className=" text-lg ">Send bulk personalized mail with attachments</div>
  </div> 
</div>

            </div>
        </div>
    );
};

export default QRScanner;