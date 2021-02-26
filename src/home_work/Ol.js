const OL = (props) => {
    let list = [];
    for(let i = 0; i < props.items.length; i++){
        list.push(<li>{props.items[i]}</li>)
    }
    return <ol>
        {list}
    </ol>
}
 
  export default OL;