import classes from "./Simple_btn.module.css";
const Dotted = ({children}) => {
    return ( <div>
        <button className={classes.Dotted}>{children}</button>
    </div> );
}
export default Dotted;