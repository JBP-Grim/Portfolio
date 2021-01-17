import React from "react";
import AppBlockSection from '../general/AppBlockSection';
import Footer from "../general/Footer";
import ContactBar from "../general/ContactBar";
import DottedHr from "../general/DottedHr";
import GoIndex from "../general/GoIndex";
import MainTitle from "../general/BlockTitle";
import ItemCard from "./ItemCard";
import {portfolio as portfolioData} from "../../blocks";

const works = portfolioData;

const Portafolio = () => {
    return(
        <div>
            <MainTitle name="Portafolio"/>
            <AppBlockSection />
            <DottedHr/>

            <div style={{backgroundColor:"rgba(5,52,54,1)",backgroundImage:"url('https://www.transparenttextures.com/patterns/black-twill.png')", padding:"0 0 150px"}}>
                <img src="elements/images/portafolioBg.png" style={{width:"100%"}}/>
                
                <section className="container">
                    <div className="row">
                        {works.map((currentInfo) =>
                            <ItemCard 
                                title={currentInfo.title}
                                img={currentInfo.img} 
                                description={currentInfo.description}
                                githubLink={currentInfo.githubLink}
                                siteLink={currentInfo.siteLink}
                            />
                        )}
                    </div>
                </section>
            </div>

            <GoIndex/>
            <Footer/>
            <div id="contactBar">
                <ContactBar />
            </div>
        </div>
    )
}

export default Portafolio;