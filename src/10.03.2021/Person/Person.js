import classes from "./Person.module.css";

const Person = ({ name, age, children, hobby }) => {
    return (<div className={classes.Person}>
        <h2 className={classes.name}>{ name }</h2>
        <h2 className={classes.hobby}>{ hobby }</h2>
        <h4 className={classes.age}>{ age } years old</h4>
        <h5>{ children }</h5>
      <span className="highlight">Hello</span>
     
    </div>);
}
export default Person;