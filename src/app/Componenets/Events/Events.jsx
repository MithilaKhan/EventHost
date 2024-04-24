"use client"
import React, { useState }  from 'react';
import Card from './Card';
import {
    TETabs,
    TETabsContent,
    TETabsItem,
    TETabsPane,
  } from "tw-elements-react";

const Events = () => {
    const [fillActive, setFillActive] = useState("tab1");

    
    const handleBasicClick = (value) => { 
        if (value === fillActive) {
            return;
        }
        setFillActive(value);
    };

    return (
        <div className=" lg:mt-16 mt-10">
            <div className="mx-auto">
                <h1 className="font-semibold text-3xl text-center">Events</h1>
                <p className="flex gap-5 lg:text-xl justify-center items-center"> <span> All</span>
                <span>For You</span>
                <span>This Day</span>
                <span>This Week</span>
                <span className="bg-[#7342F9] text-white px-5 py-2 rounded-lg ">Music</span>
                <span>Union</span></p>
            </div>
            <div>
             <Card/>
            </div>
           
        </div>
    );
};

export default Events;