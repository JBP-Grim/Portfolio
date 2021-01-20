import React from "react";
import AppBlockSection from '../general/AppBlockSection';
import Footer from "../general/Footer";
import ContactBar from "../general/ContactBar";
import LicItem from "./LicItems";
import CourseItem from "./CourseItem";
import DottedHr from "../general/DottedHr";
import {blocks as estudios} from "../../blocks";
import GoIndex from "../general/GoIndex";
import MainTitle from "../general/BlockTitle";

const licStudies = estudios[1].profesional;
const courseStudies = estudios[1].courses;

const studieTypeStyle={
    color:"white",
    textShadow: "1px 1px black"
}

const EducacionBody = ()=>{

    return(
        <div>
            <MainTitle name="Educación"/>
            <AppBlockSection />
            <DottedHr/>
            <section className="container" id="educationSection" style={{margin:"0 auto 200px"}}>
                <div className="contentDiv" id="licSection" style={{backgroundColor:"rgba(5,52,54,1)", borderRadius:"30px 30px 0 0"}}>
                    <div style={studieTypeStyle}>
                        <h1>Universidad</h1>
                        <hr style={{backgroundColor:"white", opacity:"30%"}}/>
                    </div>
                    <br/>

                     {licStudies.map(currentInfo => 
                        <LicItem key={currentInfo.id} title={currentInfo.title} institución={currentInfo.institución} url={currentInfo.url}/>
                     )}
                </div>

                <div className="contentDiv" id="courseSection" style={{backgroundColor:"#0b6a6e"}}>
                    <div style={studieTypeStyle}>
                        <h1>Cursos tomados</h1>
                        <hr style={{backgroundColor:"white", opacity:"30%"}}/>
                    </div>
                    <br/>

                    {courseStudies.map(currentInfo => 
                        <CourseItem key={currentInfo.id} title={currentInfo.title} concept={currentInfo.concept} link={currentInfo.link} certificate={currentInfo.certificate}/>
                     )}
                </div>
                <div className="contentDiv" id="languageSection" style={{backgroundColor:"#0e898f", borderRadius:"0 0 30px 30px"}}>
                    <div style={studieTypeStyle}>
                        <h1>Idiomas</h1>
                        <hr style={{backgroundColor:"white", opacity:"30%"}}/>
                        <div style={{textAlign:"center", paddingTop:"40px", textShadow: "none", color:"white"}} className="row">
                            <div className="col-lg-6 col-md-12">
                                <h1>Español (nativo).</h1>
                                <img style={{width:"50%"}} src="elements/images/esp.png"/>
                            </div>
                            <div style={{paddingTop:"40px"}} className="col-lg-6 col-md-12">
                                <h1>Inglés</h1>
                                <img style={{width:"50%"}} src="elements/images/ing.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="seccondSection">
                <div id="footerDiv">
                    <Footer />
                </div>
            </section>
            <GoIndex/>
            <div id="contactBar">
                <ContactBar />
            </div>
        </div>
    );
}

export default EducacionBody;