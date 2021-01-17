import React from "react";

const divCardStyle = {
    background: "rgb(235,235,235)",
    background: "linear-gradient(180deg, rgba(235,235,235,1) 0%, rgba(172,172,172,1) 100%)",
    width:"310px",
    height:"500px",
    margin:"100px 0 0",
    borderRadius:"10px",
    boxShadow: "5px 10px 10px black",
    position:"relative"
}

const imgContainer = {
    overflow:"hidden",
    height:"200px"
}

const imgStyle = {
    width:"100%"
}

const textMargin = {
    padding:"15px"
}

const btnSectionStyle = {
    position:"absolute",
    bottom:"15px",
    right:"15px"
}

const ItemCard = (props) => {
    return(
        <div className="col">
            <div style={divCardStyle}>
                <h1 style={textMargin}>{props.title}</h1>
                <div style={imgContainer}>
                    <img style={imgStyle} src={props.img}></img>
                </div>
                <div style={textMargin}>
                    <p style={{fontSize:"1.12rem"}}>{props.description}</p>

                    <div style={btnSectionStyle}>
                        <a href={props.githubLink} target="blank" className="btn btn-dark"><i className="fab fa-github"></i> Código</a>

                        {props.siteLink !== "" && 
                            <a href={props.siteLink} target="blank" style={{margin:"0 0 0 10px"}} className="btn btn-dark"><i class="fas fa-globe"></i> Sitio web</a>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;