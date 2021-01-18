import React from "react";

const Profesional = (props) =>{

    return(
        <div className="experienceElement">
            <h1><i class="fas fa-dot-circle"></i> {props.title}</h1>
            <div className="innerExperienceElement">
                <h2> Descripción <i class="fas fa-feather-alt"></i></h2>
                <p>{props.concept}</p>
                <hr/>
                <div className="row" style={{}}>
                    <div className="col-sm-12 col-lg-6">
                        <h2>Institución <i class="fas fa-university"></i></h2>
                        <p>{props.institution}</p>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <h2>Periodo <i class="fas fa-calendar-day"></i></h2>
                        <p>{props.time}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profesional;