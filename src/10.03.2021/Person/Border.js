import classes from "./Simple_btn.module.css";
const Border = ({children}) => {
    return ( <div>
        <button className={classes.Border}>{children}</button>
    </div> );
}
export default Border;