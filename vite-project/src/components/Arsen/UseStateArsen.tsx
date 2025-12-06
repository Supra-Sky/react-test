import {   useContext, useState } from "react";
import './mainCss.css'
import { balanceValue } from "./Context";
  // interface BalanceProps{
  //   currentBalance: number
  // }
function UseStateArsen() {
const contextBalance = useContext(balanceValue)

let [username, setUsername] = useState("");
let [password, setPassword] = useState("");



function handleClickReg(){
localStorage.setItem("username", username);
localStorage.setItem("password", password);
alert("registered")

}

function handleClickAuth(){
 let a =   localStorage.getItem("username")
 let b =   localStorage.getItem("password")
 let c = JSON.stringify(a)
 let d = JSON.stringify(b)
 console.log(a, b);
 
   if(username === c && password === d){
alert("you are logged in")
}else{
  alert("Err pass or username!")
}
}
    return ( 
    
    <>
    
    <div className="contentBox" >
      <h2>Balance: {contextBalance.balance.toFixed(2)}$</h2>
    <h1>USESTATE</h1>
    <label>Username {username}</label>
   <input className="text-input" type="text" onChange={(e)=>setUsername(e.target.value)}/>
   

   <input className="text-input" type="password" onChange={(e)=>setPassword(e.target.value)}/>
  
   <button className="inline-btn" onClick={handleClickReg}>register</button>
<button className="inline-btn" onClick={handleClickAuth}>login</button>

    </div></>
     );
}


export default UseStateArsen;