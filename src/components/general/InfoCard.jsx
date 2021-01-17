import React from "react";

const cardStyle={
    height:"170px",
    width:"320px",
    background:"linear-gradient(0deg, rgba(4,48,50,1) 0%, rgba(7,81,84,1) 100%)",
    textAlign:"center",
    transition:"transform .2s",
    borderRadius:"10px",
    boxShadow: "5px 10px 10px #085153"
}

const anchorStyle = {
    textDecoration:"none",
    color:"white"
}

const h4Style={
    paddingTop:"20%"
}

const NewCard = (props)=>{

    const cardStyleHover={
        height:"170px",
        width:"320px",
        background:"url(' " +props.image +" ') no-repeat",
        backgroundSize: "cover",
        textAlign:"center",
        transition:"transform .2s",
        borderRadius:"10px",
        boxShadow: "10px 10px 10px #085153",
        textShadow: "1px 1px #000000"
    }

    let [getStyle, setStyle] = React.useState(cardStyle);
    
    return (  
        <div style={{marginTop:"40px"}} className="col">
            <a style={anchorStyle} href={((props.title).toLowerCase()).replace(/\s+/g, '')}>
                <div id={props.id} style={getStyle} onMouseEnter={()=>setStyle(cardStyleHover)} onMouseLeave={()=>setStyle(cardStyle)} className="blockCard">
                    <h4 style={h4Style}>{props.title}</h4>
                </div>
            </a>
        </div>
    )
};

export default NewCard;