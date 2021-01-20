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

    return(<img style={imgStyle} src={props.img} alt="description auto"/>);
};

const Footer = () =>
    <div style={footerStyle}>
        <h5>J.B.P. Portafolio {currentYear}</h5>
        <hr/>
        <br/>
        <h5><a href="https://github.com/OMEGONCIO/Portfolio" target="blank" style={{color:"white"}}>Click aquí para ver código del sitio en <strong>GitHub</strong></a></h5>
        <i className="fab fa-github fa-3x"></i>
        <br/>
        <br/>
        <h5>Website desarrollado con:</h5>
        {footerIcons.map(currentInfo =><NewIcon key={currentInfo.id} img={currentInfo.img}/>)}
    </div>
;

export default Footer;