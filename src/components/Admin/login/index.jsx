import "./style.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [msg, setMsg] = useState("")
    const [data, setData] = useState({
      email: "", password: ""
    })
    const navigate = useNavigate();
    const handleDataChange = (e)=>{
      setData({...data, [e.target.name]: e.target.value})
    }

    const validateEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    const validatePassword = (password) => {
      return password.length >= 8;
    }

    const handleSubmit = async (s)=>{
      s.preventDefault();
      if (!validateEmail(data.email) || !validatePassword(data.password)) {
        setMsg("Invalid email or password format");
        return;
      }
      try{
        const response = await axios.post("http://127.0.0.1:8000/api/login", data)
         if (response.status === 200 && response.data.status === 'success'){
           localStorage.setItem("token", response.data.token)
           switch (response.data.role) {
              case "admin":
               return navigate("/admin");
              case "teacher":
                return navigate("/teacher");
              case "student":
                return navigate("/student");
              case "parent":
                return navigate("/parent");
              default:                
                return navigate("/");
           }
        } else {
          setMsg("Wrong email or password") 
        }
      }catch(e){
        console.log(e)
      }
    }

    return (
      <div className="hero">
        <div className="login">
          <p>Login </p>
          <p className="invalid">{msg} </p>
          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" onChange={handleDataChange}/>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" onChange={handleDataChange}/>
            <button className="submit" type="submit" onClick={handleSubmit}>Login</button>
          </form>
        </div>
        <div className="big-picture">
          <img src="https://cdn.kastatic.org/images/lohp/hero_student_collage_US_1x.png" alt="E-Learning Big Picture" />
          <p>Explore Our Courses</p>
          <button >Get Started</button>
        </div>
      </div>
      );
};

export default Login;
