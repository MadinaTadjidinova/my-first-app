import React from "react";

function Water(props){
    let water = "water";
    if (props.frozen){
        water = "ice"
    }

    return <div>{water}</div>
    
    
}

export default Water; 