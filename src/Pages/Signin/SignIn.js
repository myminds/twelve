import { useState } from "react";
import { Header } from "../../Components";
import JsonData from '../../assets/LoginData.json'
import { useNavigate } from "react-router-dom";
const logindata = {
  name: "",
  pass: "",
};

export const SignIN = () => {
  const [data, setData] = useState(logindata);
  const navigate=useNavigate()
  const onChangeInputs = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const submit=(e)=>{
    e.preventDefault()
     if(JsonData.find((obj)=>(obj.name === data.name && obj.pass === data.pass))){
       localStorage.setItem("token",btoa(data))
       navigate('/dashboard')
     }
  }

 
  return (
    <div className="signin-form-outer">
      <div className="signin-form-inner">
        <form onSubmit={submit}>
          <div class="container">
            <label for="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="name"
              required
              onChange={onChangeInputs}
            />

            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="pass"
              required
              onChange={onChangeInputs}
            />
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
