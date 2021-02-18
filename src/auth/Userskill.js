import axios from "axios";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import wave from "../images/wave.png"
import bg from "../images/bg.svg"
import uiperson from "../images/avatar.svg"
import "../App.css"
import Page from "../Pagination/Page"


const Userskill = (props) => {
 

 

 

  

  const handleSubmited =()=> {
    
     
     props.history.push("/");
   
  };
  //const {register, handleSubmit, errors}=useForm();

  return (
    
    <div>
      <img className="wave" src={wave} />
  
  <div className="container center">
   
  <div className="img">
      <img src={bg} />
    </div>
   
      <Page/>
     
  </div>
  
</div>
  );
};

export default Userskill;
