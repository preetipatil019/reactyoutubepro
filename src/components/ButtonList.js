import React from "react";
import Button from "./Button";

const list = ["All","Gaming","Songs", "Live", "Soccer","Cricket","Cooking","Valentines"];

const ButtonList = () => {
  return (
    <div className="flex">
      {
       list.map((name) =>  <Button name={name} />)
      }
    
    
    </div>
  );
};

export default ButtonList;
