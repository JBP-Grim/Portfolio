import React from "react";

const divStyle = {
    backgroundColor:"rgba(5,52,54,1)",
    backgroundImage:"url('https://www.transparenttextures.com/patterns/black-linen.png')", 
    margin:"auto"
}

const Header = (porps) => {
    return(
        <div style={divStyle}>
            <h1 className="blockTitle">{porps.name}</h1>
        </div>
    )
}

export default Header;