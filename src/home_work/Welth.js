const Welth = ({ items }) => {
    let list = items.map(item => {
        return <li>{item.name} - {item.wealth}</li>
    })

    return <ul type="square">{list}</ul>
}

export default Welth;

