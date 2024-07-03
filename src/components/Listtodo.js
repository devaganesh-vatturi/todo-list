import React from 'react';
import { useState } from 'react';
import './Listtodo.css';
const Listtodo = () => {

    const [works,setWorks]=useState(["work at clg","work at office"]);

 function submitHandler(e){
  let newword= document.getElementById("textwrites").value;
  if(newword==="")
    {

    }
    else{

  document.getElementById("textwrites").value="";
  setWorks([...works,newword])
 }
 }
 function handleDelete(index)
 {
  setWorks(works.filter((element,i)=>i!==index))
 }
  return (
   <div>
    <center>
      <b id="head-name">TO DO List</b>
      <br/>
    <input type="text" id="textwrites"  placeholder="Enter Work TO DO "></input>
    <input type="submit" id="text-write-submit" onClick={submitHandler}></input>
    <br></br>
    <ul>
    {works.map((element,index)=>
    <div className="map-elements">
    <li id="map-element-list" key={index}>{element}</li>
    <button onClick={()=>handleDelete(index)}>Delete</button>
    </div>)}
    </ul>
   
    </center>
   </div>

  )
}

export default Listtodo;