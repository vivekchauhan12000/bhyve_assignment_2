import axios from "axios";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import wave from "../images/wave.png"
import bg from "../images/bg.svg"
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
      localStorage.setItem("token", res.data.token);
      props.history.push("/");
    } catch (err) {
      setData({ ...data, error: err.response.data.error });
    }
  };
  const {register, handleSubmit, errors}=useForm();

  return (
    
    <div className="container">
      <img className="wave" src={wave}/>
      <img className="img" src={bg}/>
      

      <div className="row">
      
      <div className="col-sm-2"/>
      <div className="col-sm-8">
        
       
        <div className="card p-5 shadow" style={{marginTop:"50px",borderRadius:"20px"}}>
        <h4 className="heading" style={{color:"#08AEEA"}}>Log into your account</h4>
          <form onSubmit={handleSubmit(handleSubmited)}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="text"
                name="email"
                
                onChange={handleChange}
                ref={register({reqired:true,minLength:5})}
              />
              {errors.email && <p>this field is required</p>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                
                onChange={handleChange}
                ref={register({ reqired:"Password Required",minLength:{value:8,message:"password minimun of 8"}})}
                />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            
            
              <button className="btn btn-primary" style={{margin:"10px"}} type="submit">
                Login
              </button>
            
          </form>
        </div>
      </div>
      <div className="col-sm-2" />
    </div>
    </div>
  );
};

export default Login;
