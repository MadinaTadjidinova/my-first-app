
import classes from "./Button.module.css";
const Button = ({children}) => {
    return ( <div>
        <button className={classes.button}>{children}</button>
    </div> );
}
export default Button;