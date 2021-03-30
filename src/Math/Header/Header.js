import classes from "./Header.module.css";
import BackToSchoolFixedNoText from "../../Image/BackToSchoolFixedNoText.svg";

const Header = () => {
  return (
    <div className={classes.Header}>
      <img src={BackToSchoolFixedNoText} alt="blackboard" />;
    </div>
  );
};
export default Header;
