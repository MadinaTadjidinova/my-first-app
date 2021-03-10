import classes from "./Background.module.css";
const Background = ({children}) => {
    return ( <div>
        <button className={classes.Background}>{children}</button>
    </div> );
}
export default Background;