import React from "react";
import './title_style.css';


const Title = (props) =>
{
    return(
        <h1>Name:{props.name} Surname:{props.surname}</h1>
    );
}
export default Title;
