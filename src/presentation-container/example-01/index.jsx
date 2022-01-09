import React from "react";
import Form from "./Form";
import Button from "./Button";  

const Consumer=(props)=>{
    
    function onClick(e,d){
        console.log(e,d);
      }
    
      return (
      <>
        <Form />
        <br/>
        <Button style={{backgroundColor:"green"}} text="App On Click" onClick={(e, d) => onClick(e, d)} />
      </>
    );
    };

export default Consumer;