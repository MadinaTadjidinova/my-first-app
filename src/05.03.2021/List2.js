import { React } from "react";
function List2({item}) {
    let fruit = item.map(item=>{
        return <li>{item}</li>
    })
    return <div>
        <ul>{fruit}</ul>
    </div>
}
export default List2;