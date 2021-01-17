import React from "react";

const hrDotStyle={
    borderTop:"dotted 1rem white",
    width:"92px",
    margin:"150px auto"
}

function DottedHr() {
    return(
        <hr style={hrDotStyle}/>
    )
}
export default DottedHr;
