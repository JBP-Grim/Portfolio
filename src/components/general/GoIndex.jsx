import React from "react";

const divStyle={
    width:"100px",
    height:"90px",
    position:"fixed",
    top:"0",
    right:"50px",
    backgroundColor:"rgb(22, 22, 22)",
    borderRadius:"0 0 10px 10px",
    textAlign:"center",
    zIndex:"1"
}

const GoIndex = () =>
    <div style={divStyle}>
        <a className="goIndexa" href="main-page"><i className="fas fa-home fa-3x"  style={{padding:"15px 0 0"}}></i></a>
    </div>
;

export default GoIndex;