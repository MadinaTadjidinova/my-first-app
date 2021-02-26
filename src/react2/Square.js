


  const Square = ({ items }) => {
      let list = items.map(item => {
          return <li>{item}</li>
      })

      return <ul type="square">{list}</ul>
  }

  export default Square;