import classes from "./Simple_btn.module.css";
const Pink = ({children}) => {
    return ( <div>
        <button className={classes.Pink}>{children}</button>
    </div> );
}
export default Pink;