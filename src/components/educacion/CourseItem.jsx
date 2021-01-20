import React from "react";

const CourseItem = (props) => {
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
                <div>
                    <i className="far fa-arrow-alt-circle-down fa-3x courseIcon"></i>
                    <h2 style={{display:"inline", marginLeft:"15px", position:"relative", bottom:"5px"}}>{props.title}</h2>
                </div>    
            <div className="infoStudyContent" style={getDivStile}>
                <div className="studyCollapse row">
                    <div className="col">
                        <p className="propTag" style={{paddingTop:"20px"}}><strong>Descripción:</strong> {props.concept}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="propTag" style={{paddingTop:"20px"}}><strong>Certificado:</strong> <a href={props.certificate} target="blank"> Click para ver el certificado.</a></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="propTag" style={{paddingTop:"20px"}}><strong>Curso:</strong><a href={props.link} target="blank"> Click para visitar el curso.</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default CourseItem;