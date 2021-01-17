import React from "react";

const blockStyle = {
    width:"100%",
    height:"135px",
    margin:"0 35px 50px 35px",
    textAlign:"center"
}

const ToolBlock = (props) =>{

    const clickedInfo = {
        "name":props.name,
        "info":props.info,
        "level":props.level,
        "img":props.url,
        "color":props.color,
        "gradient":props.gradient
    };

    function handleClick() {
        props.changeInfo(clickedInfo);
    }

    return(
        
        <div id="knowledgeIcon" onClick={handleClick} className="col outerDiv" style={blockStyle}>
            <div className="hoverImages">
                <img style={{height:"90%"}} src={props.url} />
            </div>
        </div>
    )
}

export default ToolBlock;