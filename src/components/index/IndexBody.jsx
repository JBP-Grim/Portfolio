import React from "react";

import AppBlockSection from '../general/AppBlockSection';
import AppDescription from './AppDescription';
import Footer from "../general/Footer";
import ContactBar from "../general/ContactBar";

const totalScreenHeight = window.innerHeight;
const padding = (Number(totalScreenHeight) - 585) / 2;

const IndexBody = ()=>{
    return(
        <div>
            <section id="top">
                <div id="topPresentation" style={{height:totalScreenHeight}}>
                    <div className='ripple-background'>
                        <div className='circle xxlarge shade1'></div>
                        <div className='circle xlarge shade2'></div>
                        <div className='circle large shade3'></div>
                        <div className='circle mediun shade4'></div>
                        <div className='circle small shade5'></div>
                    </div>
                    <div className="context topTextContainer" style={{paddingTop:padding + "px"}}>
                        <div className="topText">
                            <div className="row">
                                <div className="col">
                                    <h1 className="topPresentation">Hola, soy Josué Barberena.</h1>
                                    <hr/>
                                    <h3>Programador Front-end Jr.</h3>
                                </div>
                                <div className="col">
                                    <div className="imgCase">
                                        <img className="topImg" src="https://media3.giphy.com/media/ZVik7pBtu9dNS/giphy.gif?cid=ecf05e4732e30c97babacc86b976e45a42b3b8a4c37dd70b&rid=giphy.gif"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="scrollTxt">
                            <p>Scroll para continuar</p>
                            <i className="scrollIcon fas fa-chevron-right fa-2x"></i>
                        </div>
                    </div>
                </div>
                <div id="curtain" style={{height:totalScreenHeight}}>
                    <div id="curtainContent">
                    <div className="spinner-grow text-light" role="status"></div>
                    <div className="spinner-grow text-light" role="status"></div>
                    <div className="spinner-grow text-light" role="status"></div>
                    </div>
                </div>
            </section>

            <section id="indexSeccondSection">
                <div id="descriptionRoot">
                    <AppDescription />
                </div>
                <AppBlockSection />
                <Footer />
            </section>
            
            <div id="contactBar">
                <ContactBar />
            </div>
        </div>
    );
}

export default IndexBody;