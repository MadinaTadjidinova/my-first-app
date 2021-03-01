const Capitalize = ({ items }) => {
    let list = items.map(item => {
        if(!item)
        return <li>{item.charAt(0).toUperCase() + item.slice(1)} </li>
    })

    return <ul>{list}</ul>
}

export default Capitalize;