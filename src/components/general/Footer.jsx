import React from "react";
import {footerIcons} from "../../blocks";

const currentYear = new Date().getFullYear(); 

const footerStyle = {
    textAlign:"center",
    padding:"30px 0",
    backgroundColor: "#0d5c5f",
    color: "rgb(221, 221, 221)",
    opacity: "0.8"
}

const NewIcon = (props)=>{ 
    const imgStyle = {
        width:"40px",
        margin:"20px 40px"
    }

    return(<img style={imgStyle} src={props.img}/>);
};

const Footer = () =>
    <div style={footerStyle}>
        <h5>J.B.P. Portafolio {currentYear}</h5>
        <hr/>
        <h5>Website desarrollado con:</h5>
        {footerIcons.map(currentInfo =><NewIcon key={currentInfo.id} img={currentInfo.img}/>)}
    </div>
;

export default Footer;