import { useState } from "react";
import Filter from "./13.03.2021/Filter/Filter";
import PersonList from "./13.03.2021/PersonList/PersonList";
function App() {
  const persons = [
    {
      name: "Elaman",
      img: "https://avatars.githubusercontent.com/u/1479020?s=400&v=4",
      github: "https://github.com/elaman",
      role: "Teacher",
      wpm: 10,
      commits: 100,
    },
    { 
      name: "Choro",
      role: "Assistant", 
      wpm: 78, 
      commits: 10401 },
    {
      name: "Tynchtyk",
      img: "https://avatars.githubusercontent.com/u/45353719?s=460&v=4",
      role: "Teacher",
      wpm: 102,
      commits: 0,
    },
    {
      name: "Danila",
      github: "https://github.com/DanilBond",
      role: "Student",
      wpm: -5,
      commits: 1244,
    },
    {
      name: "Madina",
      github: "https://github.com/MadinaTadjidinova",
      img:"https://avatars.githubusercontent.com/u/75364399?s=460&u=bc77810078d496e3dfe66f27906b01f5db7f208b&v=4",
      role: "Student",
      wpm: 37,
      commits: 5000,
    },
    {
      name: "Tatyna",
      github: "https://github.com/KubatovaTatyna",
      img:"https://avatars.githubusercontent.com/u/75364411?s=460&u=b024420280528948f320ad191779a670439e54ec&v=4",
      role: "Student",
      wpm: 27,
      commits: 572541,
    },
    {
      name: "Emirlan",
      github: "https://github.com/EmirlanDogdurbaev",
      img:"https://avatars.githubusercontent.com/u/75364762?s=460&u=1945ae5a1c13d5c73dd12e500b24e1965c06decc&v=4",
      role: "Student",
      wpm: 20,
      commits: 56566,
    },
    {
      name: "Baitemir",
      github: "https://github.com/BaitemirAsanbaev",
      img:"https://avatars.githubusercontent.com/u/65547734?s=460&u=7fc2c86db4a7a0feaef6f973739812aa62546604&v=4",
      role: "Student",
      wpm: 35,
      commits: 556,
    },
    {
      name: "Yntymak",
      github: "https://github.com/YntyCtrl",
      img:"https://avatars.githubusercontent.com/u/75364447?s=460&u=e5cab283f880cac68f5e9cec3b09e4559c5f5b8f&v=4",
      role: "Student",
      wpm: 40,
      commits: 55,
    },
    {
      name: "Tamara",
      github: "https://github.com/Aiylchieva-Tamara",
      role: "Student",
      wpm: 32,
      commits: 999,
    },
    {
      name: "Nurkyz",
      github: "https://github.com/Nurkyz-Chynybaeva",
      img:"https://avatars.githubusercontent.com/u/75364428?s=460&u=7598357a919d059b77d53b1b6fff021ba8d86522&v=4",
      role: "Student",
      wpm: 39,
      commits: 26,
    },
    {
      name: "Kunduz",
      github: "https://github.com/Kunduz-Imanalieva",
      img:"https://avatars.githubusercontent.com/u/72619839?s=460&u=f76175f3d594fdca199795acdff22ed731fc7537&v=4",
      role: "Student",
      wpm: 38,
      commits: 99,
    },
    { name: "Adis",
      role: "Student", 
      wpm: 39, 
      commits: 56 },
    {
      name: "Islam",
      github: "https://github.com/islam-jumabekov",
      role: "Student",
      wpm: 20,
      commits: 25,
    },
    {
      name: "Felix",
      github: "https://github.com/FelixMablletov",
      role: "Student",
      wpm: 25,
      commits: 99,
    },
    {
      name: "Erjan",
      github: "https://github.com/Erjankydyrov",
      img:"https://avatars.githubusercontent.com/u/75364569?s=460&u=41423e83599f6073887a5c5bce317657a3e8cb0b&v=4",
      role: "Student",
      wpm: 19,
      commits: 9959,
    },
    {
      name: "Ermek",
      github: "https://github.com/ermek75743",
      img:"https://media-exp1.licdn.com/dms/image/C4E03AQE54g8q8fxJiA/profile-displayphoto-shrink_200_200/0/1610769375988?e=1616630400&v=beta&t=PtGNfzdOd4eTBlVTysjPmp1lLDxIrVmzrnc2-En39oQ",
      role: "Student",
      wpm: 28,
      commits: 6655,
    },
    {
      name: "Aiymkyz",
      github: "https://github.com/soltonbekov-aiymkyz",
      role: "Student",
      wpm: 37,
      commits: 226,
    },
    { 
      name: "Keremet",
      role: "Student",
      wpm: 41, 
      commits: 999 },
    {
      name: "Karlygach",
      github: "https://github.com/Karlygachbakytova",
      role: "Student",
      wpm: 25,
      commits: 66,
    },
    {
      name: "Keremet",
      github: "https://github.com/keremet-kerimova",
      img:"https://avatars.githubusercontent.com/u/75364381?s=460&u=45e3b4a4b507e9aa2183b3241f23a50bee90a033&v=4",
      role: "Student",
      wpm: 32,
      commits: 52,
    },
    { 
      name: "Kutman", 
      role: "Student", 
      wpm: 33, 
      commits: 99 },
    {
      name: "Chyngyz",
      github: "https://github.com/chyngyzbekbolov",
      role: "Student",
      wpm: 36,
      commits: 559,
    },
  ];

  const [filterStudents, setFilterStudents] = useState(false);
  const [filterWPM, setFilterWPM] = useState(false);
  const [filterCommits, setFilterCommits] = useState(false);

  const [filterWordA, setFilterWordA] = useState(false);

  return (
    <div className="App">
      <Filter state={filterStudents} change={setFilterStudents}>
        Only students
      </Filter>
      <Filter state={filterWPM} change={setFilterWPM}>
        35WPM
      </Filter>
      <Filter state={filterCommits} change={setFilterCommits}>
        1000 Commits
      </Filter>

      <Filter state={filterWordA} change={setFilterWordA}>
        word "A"
      </Filter>

      <PersonList
        persons={persons}
        filterStudents={filterStudents}
        filterWPM={filterWPM}
        filterCommits={filterCommits}
        filterWordA={filterWordA}
      />
    </div>
  );
}

export default App;
