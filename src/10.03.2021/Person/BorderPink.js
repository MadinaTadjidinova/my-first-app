import classes from "./Simple_btn.module.css";
const BorderPink = ({children}) => {
    return ( <div>
        <button className={classes.BorderPink}>{children}</button>
    </div> );
}
export default BorderPink;