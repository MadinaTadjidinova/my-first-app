import classes from "./BorderPink.module.css";
const BorderPink = ({children}) => {
    return ( <div>
        <button className={classes.BorderPink}>{children}</button>
    </div> );
}
export default BorderPink;