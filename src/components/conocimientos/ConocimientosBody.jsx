import React from "react";
import AppBlockSection from '../general/AppBlockSection';
import Footer from "../general/Footer";
import ContactBar from "../general/ContactBar";
import {blocks as items} from "../../blocks";
import ToolBlock from "./ToolBlock";
import DottedHr from "../general/DottedHr";
import GoIndex from "../general/GoIndex";
import MainTitle from "../general/BlockTitle";

let displayStat = false;

const knowItems = items[2].knowledge;

const ConocimientosBody = ()=>{

    let [getToolInfo, setToolInfo] = React.useState({
        name:"Nombre",
        info:"Información general de mis conocimientos"
    });

    let [getLevelStyle, setLevelStyle] = React.useState({
        height:"5%",
        backgroundColor:"white"
    });

    let [getInstructionStyle, setInstructionStyle] = React.useState({
        textAlign:"center", 
        padding:"0px 50px 60px", 
        marginTop:"50px"
    });

    function newTool(newInfo){
        if(displayStat === false){
            window.location.href="#itemInfoDiv";
        } else{
            window.location.href="#knowledgeGraphic";
        }

        displayStat = true;
        
        setTimeout(()=>{
            setToolInfo({
                name:newInfo.name,
                info:newInfo.info,
                img:newInfo.img
            });

            setLevelStyle({
                height:newInfo.level,
                background:newInfo.color,
                background:newInfo.gradient
            });

            setInstructionStyle({
                display:"none"
            });
        }, 600);
        
    }

    return(
        <div>
            <MainTitle name="Conocimientos"/>
            <AppBlockSection />
            <DottedHr/>
            
            <section id="knowledgeSection">
                <div id="itemInfoDiv">
                <img src="elements/images/cornerBg.png" style={{width:"100%"}} alt="description auto"/>
                    
                    <div style={{display:displayStat===false?"none":"block"}} id="knowledgeGraphic">
                        <h1>{getToolInfo.name}</h1>
                        <div id="graphicFrame">
                            <div className="itemLevel" style={getLevelStyle}>
                                <img src={getToolInfo.img} style={{width:"60%", textAlign:"center", position:"absolute", bottom:"20px", right:"20%", opacity:"100%"}} alt="description auto"/>
                            </div>
                            <div style={{position:"absolute", width:"100%", bottom:"77%"}}>
                                <hr/>
                                <h4 className="graphicLevel">Avanzado</h4>
                            </div>

                            <div style={{position:"absolute", width:"100%", bottom:"57%"}}>
                                <hr/>
                                <h4 className="graphicLevel">Alto</h4>
                            </div>

                            <div style={{position:"absolute", width:"100%", bottom:"37%"}}>
                                <hr/>
                                <h4 className="graphicLevel">Intermedio</h4>
                            </div>
                            
                            <div className="verticalInfo">
                                <h3>Nivel</h3>
                            </div>
                        </div>
                        <div style={{textAlign:"center", color:"black", position:"relative", top:"10px"}}>
                            <h3>Tecnología</h3>
                        </div>

                        <div id="knowledgeInfo">
                            <h3>{getToolInfo.info}</h3>
                        </div>
                    </div>

                    <div style={getInstructionStyle}>
                        <h1>Selecciona una herramienta para saber más.</h1>
                        <br/>
                        <i className="fas fa-arrow-circle-down fa-4x"></i>
                    </div>
                </div>
            
                <section id="itemsSection" className="container">
                    <div id="itemsDiv">
                        <br/>
                        <div className="row">
                            {knowItems.map((currentItem) => 
                                <ToolBlock 
                                    changeInfo={newTool} 
                                    key={currentItem.id} 
                                    url={currentItem.url} 
                                    name={currentItem.name} 
                                    info={currentItem.description} 
                                    level={currentItem.percent} 
                                    color={currentItem.color} 
                                    gradient={currentItem.gradient}
                                />
                            )}
                        </div>
                    </div>
                </section>
            </section>
            
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

export default ConocimientosBody;