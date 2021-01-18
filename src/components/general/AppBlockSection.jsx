import React from "react";
import InfoCard from "./InfoCard";
import {blocks as generalInfo} from "../../blocks";

const hrStyle={
    backgroundColor:"rgb(221, 221, 221)",
    borderTop:"solid 5px",
    borderRadius:"100%"
}

function App() {
    return(
    <div className="container" id="blockSection">
            <hr style={hrStyle}/>
            <br/>
            <div className="row">
                {generalInfo.map((currentInfo) =>
                     <InfoCard key={currentInfo.id} id={currentInfo.id} title={currentInfo.title} image={currentInfo.img}/>
                )}
        </div>
    </div>);
}
export default App;
