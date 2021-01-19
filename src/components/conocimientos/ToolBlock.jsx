import React from "react";

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
        
        <div id="knowledgeIcon" onClick={handleClick} className="col-lg-3 col-md-12 outerDiv">
            <div className="hoverImages">
                <img style={{height:"90%"}} src={props.url} />
            </div>
        </div>
    )
}

export default ToolBlock;