import Person from "../Person/Person";
import classes from "./PersonList.module.css";

const PersonList = ({ persons, filterStudents, filterWPM, filterCommits, filterWordA }) => {
  // Dlinnyi
  let students = persons;
  if (filterStudents) {
    students = persons.filter(person => person.role == "Student");
  }
  // Korotkiy
  // const students = persons.filter(person => !filterStudents || person.role == "Student");

  let wpm = students;
  if (filterWPM) {
    wpm = students.filter(person => person.wpm > 34);
  }

  let commits = wpm;
  if (filterCommits) {
    commits = students.filter(person => person.commits > 999);
  }


  let name = persons;
  if(filterWordA){
      name = persons.sort((a, b) => (a.name > b.name) ? "A" : "A")
  }

  return (
    <div className={classes.PersonList}>
      {commits.map(person => <Person {...person} />)}
    </div>
  );
}

export default PersonList;