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

    
  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };
  
    return (
        <div>
            <div>
                <h1 className="font-semibold text-3xl text-center">Events</h1>
            </div>
            <div>
            
    <div className="mb-3">
      <TETabs fill>
        <TETabsItem
          onClick={() => handleFillClick("tab1")}
          active={fillActive === "tab1"}
        >
          All
        </TETabsItem>
        <TETabsItem
          onClick={() => handleFillClick("tab2")}
          active={fillActive === "tab2"}
        >
          For You
        </TETabsItem>
        <TETabsItem
          onClick={() => handleFillClick("tab3")}
          active={fillActive === "tab3"}
        >
          This Day
        </TETabsItem>

        <TETabsItem
          onClick={() => handleFillClick("tab4")}
          active={fillActive === "tab4"}
        >
          This Week
        </TETabsItem>
        <TETabsItem
          onClick={() => handleFillClick("tab5")}
          active={fillActive === "tab5"}
        >
          Music
        </TETabsItem>
        <TETabsItem
          onClick={() => handleFillClick("tab6")}
          active={fillActive === "tab6"}
        >
         Union
        </TETabsItem>
        
      </TETabs>

      <TETabsContent>
        <TETabsPane show={fillActive === "tab1"}> <Card/></TETabsPane>
        <TETabsPane show={fillActive === "tab2"}> <Card/></TETabsPane>
        <TETabsPane show={fillActive === "tab3"}> <Card/></TETabsPane>
        <TETabsPane show={fillActive === "tab4"}> <Card/></TETabsPane>
        <TETabsPane show={fillActive === "tab5"}> <Card/></TETabsPane>
        <TETabsPane show={fillActive === "tab6"}> <Card/></TETabsPane>
      </TETabsContent>
    </div>  
            </div>
           
        </div>
    );
};

export default Events;