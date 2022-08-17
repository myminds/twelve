import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLogout } from "../utils";

export const Header = () => {
    const [active,setActive]=useState(1)
  const navigate = useNavigate();
  const onClickLogout = () => {
    setActive(3)
    isLogout(()=> navigate("/"));

   
  };
  return (
    <div className="header">
      <li className="logo" onClick={() => navigate("/dashboard")}>
        Gaurav Test
      </li>
      <div className="header-right">
        <li className={active=== 1 ?"active":""}>Home</li>
        <li className={active=== 2 ?"active":""}>Contact</li>
        <li onClick={()=>onClickLogout()} className={active=== 3 ?"active":""}>Log out</li>
      </div>
    </div>
  );
};
