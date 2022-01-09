import React from "react";
import PropTypes from "prop-types";

//lets treat as Container Component here we are focsuing how thing work and performaing some logic
const Button=({text,onClick,isLoading,style})=>{

    const _style = {
      backgroundColor: "orange",
      minHeight:"40px",
      minWidth: "200px",
      border: "0",
      cursor: "pointer",
      fontWeight: "bold",
      color: "azure",
    };

    return (
      <button
        style={{ ..._style,...style }}
        onClick={(e) => {
          if (onClick) onClick(e, "other-data");
        }}
        
      > {withLoader()} </button>
    );
    
    function withLoader(){
        if(isLoading!=undefined){
            if(isLoading){
                return <span>Loading</span>
            }else{
                return <span>{text}</span>
            }
        }else{
            return <span>{text}</span>
        }
    }
}

Button.propTypes={
    text:PropTypes.string.isRequired,
    onClick:PropTypes.func,
    isLoading:PropTypes.bool,
    style:PropTypes.object  
}

export default Button;