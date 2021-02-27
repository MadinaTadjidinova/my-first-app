const UpperCaseList = ({ items }) => {
    let list = items.map(item => {
        return <li>{item.toUpperCase()} </li>
    })

    return <ul type="square">{list}</ul>
}

export default UpperCaseList;