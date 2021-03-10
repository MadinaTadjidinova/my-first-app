import classes from "./Dashed.module.css";
const Dashed = ({children}) => {
    return ( <div>
        <button className={classes.Dashed}>{children}</button>
    </div> );
}
export default Dashed;