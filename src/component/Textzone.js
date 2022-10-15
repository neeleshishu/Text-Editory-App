//import React from "react";
import React,{useState} from 'react';


const Textzone = (props) => {
  const [Text,setText] = useState("enter text here");
  

  const handleChange = ()=>{
    let newtext = Text.toUpperCase();
    setText(newtext);
  }
  const handleChanges = ()=>{
    let newtext = Text.toLowerCase();
    setText(newtext);
  }
  const clearbutton = ()=>{
    let newtext = "";
    setText(newtext);
  }
  const handleChangess = ()=>{
    var text = document.getElementById("copy");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleonchange = (event)=>{
    setText(event.target.value);
  }
  const handleExtraSpaces = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
  }
 
  return ( 

    <>
    
    <div className="mb-3 mx-5 my-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label"><b>{props.heading}</b></label>
    <textarea className="form-control" id="copy" value = {Text} onChange={handleonchange} rows="3" style={{backgroundColor: props.mode==='dark'? 'grey': 'white', color:props.mode=== 'dark'?'white': 'black'}}></textarea>
  </div>
  <button type="button" className="btn btn-primary ms-5 my-2" onClick={handleChange}>Upper Text</button>
  <button type="button" className="btn btn-danger ms-5 my-2" onClick={handleChanges}>Lower Text</button>
  <button type="button" className="btn btn-success ms-5 my-2"  onClick={handleChangess}>Copy Text</button>
  <button type="button" className="btn btn-info ms-5 my-2"  onClick={clearbutton}>Clear Text</button>
  <button type="button" className="btn btn-info ms-5 my-2"  onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  
  
  <p className='mx-5 my-3'>the size of the text is {Text.split(" ").length} per word and {Text.length} per letter</p>
  <br/>
  <hr/>
  <h2 className='text-center'><u>Previous</u></h2>
  <p className='mx-5 my-3'><b>{Text}</b></p>
  
    </>
  );
}

export default Textzone
