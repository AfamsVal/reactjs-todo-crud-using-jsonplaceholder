import React from 'react';

const ButtonComponent = (props) =>{
return(
    <React.Fragment>
       <button className="btn btn-danger btn-xs reduce" onClick={() => {props.btnClick(props.id)}}>x</button> 
    </React.Fragment>   
)
}

export default ButtonComponent;