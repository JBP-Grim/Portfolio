import React from 'react';
import ReactDOM from 'react-dom';
import IndexBody from "./components/index/IndexBody";
import ConocimientosBody from "./components/conocimientos/ConocimientosBody";
import EducacionBody from "./components/educacion/EducacionBody";
import ExperienciaBody from "./components/experiencia/ExperienciaBody";
import Portafolio from "./components/portafolio/PortafolioBody";

var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);

if (filename === "main-page"){
    ReactDOM.render(<IndexBody/>, document.getElementById("root"));
}
else if(filename === "conocimientos"){
    ReactDOM.render(<ConocimientosBody/>, document.getElementById("root"));
}
else if(filename === "educaci%C3%B3n"){
    ReactDOM.render(<EducacionBody/>, document.getElementById("root"));
}
else if(filename === "experienciaprofesional"){
    ReactDOM.render(<ExperienciaBody/>, document.getElementById("root"));
}
else if(filename === "portafolio"){
    ReactDOM.render(<Portafolio/>, document.getElementById("root"));
}