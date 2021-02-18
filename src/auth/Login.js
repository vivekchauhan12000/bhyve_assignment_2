import axios from "axios";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import wave from "../images/wave.png"
import bg from "../images/bg.svg"
import uiperson from "../images/avatar.svg"
import "../App.css"


const Login = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    error: null,
  });

 

  const { email, password, error } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  

  const handleSubmited = async (e) => {
    
    try {
      setData({ ...data, error: null });
      const res = await axios.post(
        "https://be.bhyve-app.com:3020/user/signin",
        { username:email, password:password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("token", res.data.accessToken);
      console.log(res.data.accessToken)
      props.history.push("/userinfo");
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
       
        <h2 className="title">Sign in</h2>
        <div className="input-div one">
          <div className="i">
            <i className="fas fa-user" />
          </div>
          <div className="div">
          <label htmlFor="email">Email</label>
            <input className="form-control"
                type="text"
                name="email"
                
                onChange={handleChange}
                ref={register({reqired:true,minLength:5})} className="input" />
                {errors.email && <p>this field is required</p>}
          </div>
        </div>
        <div className="input-div pass">
          <div className="i"> 
            <i className="fas fa-lock" />
          </div>
          <div className="div">
          <label htmlFor="password">Password</label>
            <input  className="form-control"
                type="password"
                name="password"
                
                onChange={handleChange}
                ref={register({ reqired:"Password Required",minLength:{value:8,message:"password minimun of 8"}})}/>
              {errors.password && <p>{errors.password.message}</p>}
          </div>
        </div>
       
        <input type="submit" className="btn" defaultValue="Login" />
      </form>
    </div>
  </div>
</div>
  );
};

export default Login;
