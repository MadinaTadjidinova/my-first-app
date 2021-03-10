import classes from "./Pink.module.css";
const Pink = ({children}) => {
    return ( <div>
        <button className={classes.Pink}>{children}</button>
    </div> );
}
export default Pink;