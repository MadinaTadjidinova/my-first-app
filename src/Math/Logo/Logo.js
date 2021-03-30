import classes from "./Logo.module.css";
import math1 from "../../Image/math1.jpg";

const Logo = () => {
    return (
      <div className={classes.Logo}>
        <img src={math1} alt="Logo of the Math project" />
        <div>Math</div>
      </div>
    );
  }
  
  export default Logo;