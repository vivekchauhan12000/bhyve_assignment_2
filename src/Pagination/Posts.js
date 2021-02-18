import React,{ useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";

const Posts = (props) => {
 
  const [din , Setdin]=useState([]);
  
  const handel=()=>{
    console.log(`${din} post data`)
  };

  const validation=()=>{
    if(din.length<5){
      handleSubmited()
    }else{

    }
  }

  let history = useHistory();

  const redirect = () => {
    history.push('/')
  }

  const handleSubmited = async (e) => {
    
    try {
      
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    };
      const res = await axios.post(
        "https://be.bhyve-app.com:3020/user/skills",
        { skills:din},
        config
      );
     
      props.history.push("/");
    } catch (err) {
      Setdin({ ...din, error: err.response.data.error });
    }
  };

  
  
  return (
    <ul className='list-group mb-4'>
      <form>
      {props.posts.map(post => (
        <div className="form-check" key={post.id} style={{margin:"5px"}}>
        
        <input type="checkbox" name="skill"  className="form-check-input" value={post.skillName} onChange={(event)=>{Setdin([...din, event.target.value])}}
       />
        <label className="form-check-label">{post.skillName}</label>
        </div>
        
      ))}

      <input type="submit" className="btn" defaultValue="Login" onClick={()=>handleSubmited()}/>
     
      </form>
      <input type="Home" className="btn" defaultValue="Home" onClick={redirect}/>
      {din.length<5 || <p>please add skill less than 5</p>}
    </ul>
  );
};

export default Posts;