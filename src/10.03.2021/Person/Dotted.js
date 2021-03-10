import classes from "./Dotted.module.css";
const Dotted = ({children}) => {
    return ( <div>
        <button className={classes.Dotted}>{children}</button>
    </div> );
}
export default Dotted;