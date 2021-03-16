import classes from "./Person.module.css";

const Person = ({ name, role, wpm, commits, img, github }) => {
  return (
    <div className={classes.Person}>
       <div className={classes.alldiv}>
            <div className={classes.name}>{name}</div>
            <div className={classes.role}>{role}</div>
            <div className={classes.wpm}>{wpm}WPM</div>
            <div className={classes.commits}>{commits} commits</div>
        </div>

        <div className={classes.divimg}><img className={classes.img} src={img} alt={"img"}/></div>
        <div className={classes.diva}> <a className={classes.github} href={github}>  <img className={classes.gitimg} src={"https://pngimg.com/uploads/github/github_PNG15.png"} /></a> </div>
    </div>
  );
}

export default Person;