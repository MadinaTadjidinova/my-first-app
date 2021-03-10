
import classes from "./Simple_btn.module.css";
const Simple_btn = ({children}) => {
    return ( <div>
        <button className={classes.Simple_btn}>{children}</button>
    </div> );
}
export default Simple_btn;