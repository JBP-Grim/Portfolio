import React from "react";

const LicItem = (props) => {
    const [getDivStile, setDivStyle] = React.useState({maxHeight:"0px"});

    function increaseHeight(){
        setDivStyle({
            maxHeight:"150rem"
        })
    }

    function decreseHeight(){
        setDivStyle({
            maxHeight:"0"
        })
    }

    return(
        <div onMouseOver={increaseHeight} onMouseLeave={decreseHeight} className="licDiv">
            <div className="row">
                <div className="col-1" style={{textAlign:"center"}}>
                    <i class="fas fa-dot-circle fa-3x"></i>
                </div>
                <div className="col-11">
                    <h2>{props.title}</h2>
                </div>
            </div>
            <div className="infoStudyContent" style={getDivStile}>
                <div className="row propTag">
                    <div className="col-8">
                        <p><strong>Institución:</strong> {props.institución}</p>
                    </div>
                    <div className="col">
                        <img style={{width:"100%"}} src="https://www.univdep.edu.mx/img/Logos/univdep_acronimo_azul.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default LicItem;