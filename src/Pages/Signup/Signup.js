import { useState } from "react";
import { Header } from "../../Components";
import JsonData from "../../assets/LoginData.json";
import { Link, useNavigate } from "react-router-dom";
const logindata = {
  name: "",
  pass: "",
  email: "",
  user_name: "",
};

export const Signup = () => {
  const [data, setData] = useState(logindata);
  const navigate = useNavigate();
  const onChangeInputs = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    let userjson = JSON.parse(localStorage.getItem("UserDetails"));
    userjson=userjson?userjson:[]
    userjson.push(data);
    localStorage.setItem("UserDetails", JSON.stringify(userjson));
    navigate('/signin')
  };

  return (
    <div className="signin-form-outer">
      <div className="signin-form-inner">
        <form onSubmit={submit}>
          <div class="container">
            <label>
              <b>Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              required
              onChange={onChangeInputs}
            />

            <label>
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="user_name"
              required
              onChange={onChangeInputs}
            />

            <label>
              <b>Email</b>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              required
              onChange={onChangeInputs}
            />

            <label>
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="pass"
              required
              onChange={onChangeInputs}
            />
            <button type="submit">Sign Up</button>
          </div>
        </form>
        <Link to='/signin' >Sign in</Link>
      </div>
     
    </div>
  );
};
