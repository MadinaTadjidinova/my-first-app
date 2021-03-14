import PersonList from "./13.03.2021/PersonList/PersonList";

function App() {
  const persons = [
    { name: "Elaman",  role: "Teacher", wpm: 10, commits: 100},
    { name: "Choro", role: "Assistant", wpm: 78, commits: 10401 },
    { name: "Tynchtyk", role: "Teacher", wpm: 102, commits: 0 },
    { name: "Danila", role: "Student", wpm: -5, commits: 1244 },
    { name: "Madina", img: "https://avatars.githubusercontent.com/u/75364399?s=460&u=bc77810078d496e3dfe66f27906b01f5db7f208b&v=4", src: "", role: "Student", wpm: 30, commits: 5000 },
    { name: "Tatyna", role: "Student", wpm: 27, commits: 572541 },
    { name: "Emirlan", img: "https://avatars.githubusercontent.com/u/75364762?s=460&u=1945ae5a1c13d5c73dd12e500b24e1965c06decc&v=4", role: "Student", wpm: 20, commits: 56566 },
    { name: "Baitemir", img: "https://avatars.githubusercontent.com/u/65547734?s=460&u=7fc2c86db4a7a0feaef6f973739812aa62546604&v=4", role: "Student", wpm: 35, commits: 556 },
    { name: "Yntymak", role: "Student", wpm: 40, commits: 55 },
    { name: "Tamara", role: "Student", wpm: 32, commits: 999 },
    { name: "Nurkyz", img: "https://avatars.githubusercontent.com/u/75364428?s=460&u=7598357a919d059b77d53b1b6fff021ba8d86522&v=4", role: "Student", wpm: 39, commits: 26 },
    { name: "Kunduz", img: "https://avatars.githubusercontent.com/u/72619839?s=460&u=f76175f3d594fdca199795acdff22ed731fc7537&v=4", role: "Student", wpm: 38, commits: 99 },
    { name: "Adis", role: "Student", wpm: 39, commits: 56 },
    { name: "Islam", role: "Student", wpm: 20, commits: 25 },
    { name: "Felix", role: "Student", wpm: 25, commits: 99 },
    { name: "Erjan", role: "Student", wpm: 19, commits: 9959 },
    { name: "Ermek", img: "https://media-exp1.licdn.com/dms/image/C4E03AQE54g8q8fxJiA/profile-displayphoto-shrink_200_200/0/1610769375988?e=1616630400&v=beta&t=PtGNfzdOd4eTBlVTysjPmp1lLDxIrVmzrnc2-En39oQ", role: "Student", wpm: 28, commits: 6655 },
    { name: "Aiymkyz", role: "Student", wpm: 37, commits: 226 },
    { name: "Keremet", role: "Student", wpm: 41, commits: 999 },
    { name: "Karlygach", role: "Student", wpm: 25, commits: 66 },
    { name: "Keremet", img: "https://avatars.githubusercontent.com/u/75364381?s=460&u=45e3b4a4b507e9aa2183b3241f23a50bee90a033&v=4", role: "Student", wpm: 32, commits: 52 },
    { name: "Kutman", role: "Student", wpm: 33, commits: 99 },
    { name: "Chyngyz", role: "Student", wpm: 36, commits: 559 },
  ];

  const students = persons.filter(person => person.role == "Student");
  const fast = students.filter(person => person.role )
  return (
    <div className="App">
      <PersonList persons={fast} />
    </div>
  );
}
export default App;

