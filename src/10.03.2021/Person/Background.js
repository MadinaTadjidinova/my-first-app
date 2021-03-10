import classes from "./Simple_btn.module.css";
const Background = ({children}) => {
    return ( <div>
        <button className={classes.Background}>{children}</button>
    </div> );
}
export default Background;