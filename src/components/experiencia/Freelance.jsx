import React from "react";

const Freelance = (props) =>{

    return(
        <div className="experienceElement">
            <h1><i class="fas fa-dot-circle"></i> {props.title}</h1>
            <div className="innerExperienceElement">
                <h2> Descripción <i class="fas fa-feather-alt"></i></h2>
                <p>{props.concept}</p>
                <hr/>
                <div className="row" style={{}}>
                    <div className="col">
                        <h2>Institución <i class="fas fa-university"></i></h2>
                        <p>{props.institution}</p>
                    </div>
                    <div className="col">
                        <h2>Link del sitio <i class="fas fa-link"></i></h2>
                        <p><a href={props.link} target="blank">{props.link}</a></p>
                        <p><a href={props.git} target="blank"><i class="fab fa-github"></i> Código en gitHub.</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Freelance;