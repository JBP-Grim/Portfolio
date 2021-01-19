import React from "react";
import {contacts} from "../../blocks";

const arrowDiv = {
    height:"65px",
    backgroundColor:"rgb(87, 87, 87)"
}

const iconCol = {
    padding:"10px 0 10px 10px",
    height:"90px",
    minWidth:"83px",
    maxWidth:"83px",
    textAlign:"center"
}

const txtCol = {
    padding:"25px 0",
    height:"90px",
    textAlign:"center"
}

const responsiveDivStyle={
    backgroundColor:"rgb(22, 22, 22)",
    width:"100%",
    height:"100%",
    position:"absolute",
    bottom:"0"
}

const iStyle = {
    textAlign:"center",
    marginTop:"20px"
}

const ContactBar = () => 

    <div style={{height:"100%", position:"relative"}}>
        <nav>
            <div style={arrowDiv}>
                <h2 style={{padding:"15px 0 0 60px ", color:"white", margin:"auto"}} className="navText">Contactame!</h2>
                <i style={{color:"rgb(22, 22, 22)"}} className="fas fa-arrow-circle-right fa-3x navIcon"></i>
            </div>
            <hr/>
            <ul style={{marginTop:"20px"}}>
                <li>
                    <div className="navDiv">
                        <div className="row">
                            <div style={iconCol} className="col">
                                <i className="fab fa-github fa-3x"></i>
                            </div>
                            <div style={txtCol} className="col">
                                <a style={{color:"#0e999e"}} href="https://github.com/OMEGONCIO" target="blank" className="navText">{contacts.github}</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                <div className="navDiv">
                        <div className="row">
                            <div style={iconCol} className="col">
                            <i className="far fa-envelope fa-3x"></i>
                            </div>
                            <div style={txtCol} className="col">
                                <a style={{color:"#0e999e"}} href={"mailto:" + contacts.email}  className="navText">{contacts.email}</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                <div className="navDiv">
                        <div className="row">
                            <div style={iconCol} className="col">
                            <i className="fas fa-mobile-alt fa-3x"></i>
                            </div>
                            <div style={txtCol} className="col">
                                <p className="navText">Celular: &nbsp;{contacts.phone}</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <img style={{width:"20rem", paddingLeft:"40px", position:"absolute", bottom:"5px"}} src="../../elements/images/knight.png" />
        </nav>
        <div id="navResponsiveDiv" style={responsiveDivStyle}>
            <div className="row">
                <div style={iStyle} className="col-4">
                    <a href="main-page"><i style={{position:"relative", bottom:"8px", left:"10px"}} className="fas fa-home fa-3x"></i></a>
                </div>
                <div style={iStyle} className="col-4">
                    <a href={"mailto:" + contacts.email}><i className="far fa-envelope fa-2x"></i></a>
                </div>
                <div style={iStyle} className="col-4">
                    <a href="https://github.com/OMEGONCIO" target="blank"><i className="fab fa-github fa-2x"></i></a>
                </div>
            </div>
        </div>
    </div>
;

export default ContactBar;