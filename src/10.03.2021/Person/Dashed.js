import classes from "./Simple_btn.module.css";
const Dashed = ({children}) => {
    return ( <div>
        <button className={classes.Dashed}>{children}</button>
    </div> );
}
export default Dashed;