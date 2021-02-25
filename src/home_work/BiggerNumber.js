import React from "react";

function BiggerNumber(props){
    let a = props.a
    let b = props.b
        if (a < b){
            return <div>Bigger numer is {props.b }</div>
        }
        else {
            return <div>Bigger number is {props.a}</div>
        }
    }
    

export default BiggerNumber;