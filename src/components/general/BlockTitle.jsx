import React from "react";

const divStyle = {
    backgroundColor:"rgba(5,52,54,1)",
    backgroundImage:"url('https://www.transparenttextures.com/patterns/black-linen.png')", 
    margin:"auto"
}

const h1Style={
    textAlign:"center", 
    padding:"100px 0", 
    fontSize:"8rem", 
    color:"rgb(221, 221, 221)"
}

const Header = (porps) => {
    return(
        <div style={divStyle}>
            <h1 style={h1Style}>{porps.name}</h1>
        </div>
    )
}

export default Header;