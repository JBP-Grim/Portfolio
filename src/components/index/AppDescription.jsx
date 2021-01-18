import React from "react";

const currentAge = ((new Date().getFullYear()) - 1999); 
const imgStyle = {
    height:"220px", 
    width:"240px", 
    backgroundColor:"#0e999e",
    textAlign:"center",
    margin:"auto",
    position:"relative",
    bottom:"120px",
};
const txtStyle={
    position:"relative",
    bottom:"80px"
};

const Description = () =>
    <div className="descriptionDiv">
        <hr style={{borderTop:"solid 5px", borderRadius:"100%"}}/>
        <div style={imgStyle}>
            <img className="imgAvatar" src="https://cdn.dribbble.com/users/1210339/screenshots/2767019/avatar18.gif"></img>
        </div>
        <div className="descriptionDiv2" style={txtStyle}>
            <h1>Acerca de mi</h1>
            <p>
                Mi nombre es Josué Barberena Procel, tengo {currentAge} años y soy ingeniero en sistemas computacionales. 
                Me apasiona la programación y tengo especial interes en el área de Front-end para programación web, si bien no
                he tenido una vida laboral muy experimentada, estoy preparado y muy emocionado para formar parte de una empresa y poder brindar mis servicios como programador. 
            </p>
        </div>
    </div>
;

export default Description;