import React from "react";

import AppBlockSection from '../general/AppBlockSection';
import Footer from "../general/Footer";
import ContactBar from "../general/ContactBar";
import DottedHr from "../general/DottedHr";
import GoIndex from "../general/GoIndex";
import {blocks as experience} from "../../blocks";
import Profesional from "./Profesional";
import Freelance from "./Freelance";
import MainTitle from "../general/BlockTitle";

const profesionalExp = experience[0].jobs[0].formal;
const freelanceExp = experience[0].jobs[0].freelance;

const ExperienciaBody = ()=>{
    return(
        <div>
            <MainTitle name="Experiencia profesional"/>
            <AppBlockSection />
            <DottedHr/>

            <div style={{backgroundColor:"rgba(5,52,54,1)",backgroundImage:"url('https://www.transparenttextures.com/patterns/black-twill.png')", margin:"0 auto"}}>
                <img src="elements/images/waveBg.png" style={{width:"100%"}}/>
                <div id="experienceContent" className="container" style={{padding:"0 0 200px"}}>
                    <div id="profesionalContent" style={{margin:"0 auto 200px"}}>
                        <h1 style={{fontSize:"5rem"}}>Profesional</h1>
                        <hr style={{backgroundColor:"grey"}}/>
                        {profesionalExp.map(currentInfo => 
                            <Profesional 
                                key={currentInfo.id}
                                title={currentInfo.title}
                                concept={currentInfo.concept}
                                institution={currentInfo.institution}
                                time={currentInfo.time}
                            />
                        )}
                    </div>

                    <div id="freelanceContent">
                        <h1 style={{fontSize:"5rem"}}>Freelance</h1>
                        <hr style={{backgroundColor:"grey"}}/>
                        {freelanceExp.map(currentInfo => 
                            <Freelance 
                                key={currentInfo.id}
                                title={currentInfo.title}
                                institution={currentInfo.institution}
                                concept={currentInfo.concept}
                                link={currentInfo.link}
                                git={currentInfo.git}
                            />
                        )}
                    </div>
                </div>
            </div>

            <div id="footerDiv">
                <Footer />
            </div>
        <GoIndex/>
        <div id="contactBar">
            <ContactBar />
        </div>
    </div>
    );
}

export default ExperienciaBody;