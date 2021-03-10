import classes from "./Border.module.css";
const Border = ({children}) => {
    return ( <div>
        <button className={classes.Border}>{children}</button>
    </div> );
}
export default Border;