import React from "react";

const totalScreenWidth = window.innerWidth;

let divCardStyle, imgContainer, imgStyle, textMargin, btnSectionStyle, pStyle;

if(totalScreenWidth <= 991){
     divCardStyle = {
        background: "rgb(235,235,235)",
        background: "linear-gradient(180deg, rgba(235,235,235,1) 0%, rgba(172,172,172,1) 100%)",
        width:"100%",
        height:"500px",
        margin:"100px 0 0",
        borderRadius:"10px",
        boxShadow: "5px 10px 10px black",
        position:"relative"
    }
    
     imgContainer = {
        overflow:"hidden",
        height:"200px"
    }
    
     imgStyle = {
        width:"100%"
    }
    
     textMargin = {
        padding:"15px"
    }
    
     btnSectionStyle = {
        position:"absolute",
        bottom:"15px",
        right:"15px"
    }

    pStyle={
        fontSize:"1rem"
    }
}
else{
     divCardStyle = {
        background: "rgb(235,235,235)",
        background: "linear-gradient(180deg, rgba(235,235,235,1) 0%, rgba(172,172,172,1) 100%)",
        width:"310px",
        height:"500px",
        margin:"100px 0 0",
        borderRadius:"10px",
        boxShadow: "5px 10px 10px black",
        position:"relative"
    }
    
     imgContainer = {
        overflow:"hidden",
        height:"200px"
    }
    
     imgStyle = {
        width:"100%"
    }
    
     textMargin = {
        padding:"15px"
    }
    
     btnSectionStyle = {
        position:"absolute",
        bottom:"15px",
        right:"15px"
    }

    pStyle={
        fontSize:"1.12rem"
    }
}



const ItemCard = (props) => {
    return(
        <div className="col-lg-4 col-md-12">
            <div style={divCardStyle}>
                <h1 style={textMargin}>{props.title}</h1>
                <div style={imgContainer}>
                    <img style={imgStyle} src={props.img} alt="description auto"></img>
                </div>
                <div style={textMargin}>
                    <p style={pStyle}>{props.description}</p>

                    <div style={btnSectionStyle}>
                        <a href={props.githubLink} target="blank" className="btn btn-dark"><i className="fab fa-github"></i> Código</a>

                        {props.siteLink !== "" && 
                            <a href={props.siteLink} target="blank" style={{margin:"0 0 0 10px"}} className="btn btn-dark"><i className="fas fa-globe"></i> Sitio web</a>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;