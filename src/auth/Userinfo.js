import axios from "axios";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import wave from "../images/wave.png"
import bg from "../images/bg.svg"
import uiperson from "../images/avatar.svg"
import "../App.css"


const Userinfo = (props) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    error: null,
  });

 

  const { firstName, lastName, error } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  

  const handleSubmited = async (e) => {
    
    try {
      setData({ ...data, error: null });
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    };
      const res = await axios.post(
        "https://be.bhyve-app.com:3020/user/basic/profile",
        { firstName:firstName, lastName:lastName },
        config
      );
     
      props.history.push("/skill");
    } catch (err) {
      setData({ ...data, error: err.response.data.error });
    }
  };
  const {register, handleSubmit, errors}=useForm();

  return (
    
    <div>
  <img className="wave" src={wave} />
  <div className="container">
    <div className="img">
      <img src={bg} />
    </div>
    <div className="login-content">
      <form onSubmit={handleSubmit(handleSubmited)}>
        <img src={uiperson} />
        <h2 className="title">Personal data</h2>
        <div className="input-div one">
          <div className="i">
            <i className="fas fa-user" />
          </div>
          <div className="div">
          <label htmlFor="firstName">firstName</label>
            <input className="form-control"
                type="text"
                name="firstName"
                
                onChange={handleChange}
                ref={register({reqired:true,minLength:5})} className="input" />
                {errors.firstName && <p>this field is required</p>}
          </div>
        </div>
        <div className="input-div pass">
          <div className="i"> 
            <i className="fas fa-lock" />
          </div>
          <div className="div">
          <label htmlFor="lastName">lastName</label>
            <input  className="form-control"
                type="text"
                name="lastName"
                
                onChange={handleChange}
                ref={register({ reqired:"Password Required",minLength:{value:4,message:"password minimun of 8"}})}/>
              {errors.lastName && <p>{errors.lastName.message}</p>}
          </div>
        </div>
         {error ? <p className="text-danger">{error}</p> : null}
         
        <input type="submit" className="btn" defaultValue="Login" />
      </form>
    </div>
  </div>
</div>
  );
};

export default Userinfo;
