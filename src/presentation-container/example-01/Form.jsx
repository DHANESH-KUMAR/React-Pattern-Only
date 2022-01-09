import React from "react";
import Button from "./Button";



//its Presentation Component here we're trying to set how things are looking
const Form=(props)=>{   
    const [formLoader,setFormLoader]=React.useState(false);
    
    function handleSubmit(e,data){
        e.preventDefault();
        
        //lets assume here we're calling REST call
        setFormLoader(true);
        
        //assuming rest call completed after 3ms then we need to change formLoader value
        setTimeout(()=>{
            setFormLoader(false);
        },3000);
    }
    
    return (
        <form name="presentation_form" onSubmit={handleSubmit}>
            <Button text="Submit" isLoading={formLoader} />
        </form>
    );
}

export default Form;