import logo from "../images/logo.png";
import img from "../images/imgmain.jpeg";
import "../index.css";
import Card from "./Card.js";
import { useState } from "react";

function App() {
  // criar o estado buttonCliked
  const [buttonClicked, setButtonCliked] = useState("");
  const handleClose = () => setButtonCliked(null);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-name">Aysla Loureiro</p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>

      <main className="App-main">
        <div className="grid-container">
          <button
            className="grid-item"
            onClick={() => setButtonCliked("about me")}
          >
            About me{" "}
          </button>
          <button
            className="grid-item"
            onClick={() => setButtonCliked("Skills")}
          >
            Skills
          </button>
          <button
            className="grid-item"
            onClick={() => setButtonCliked("Projects")}
          >
            Projects
          </button>
        </div>
        <div className="main-container">
          <img src={img} className="main-img"></img>
          <div className="main-description">
            <ul>
              <li>Portuguese/Intermediate English</li>
              <li>Right to work UK and EU</li>
              <li>HTML | CSS | JAVASCRIPT | REACT</li>
            </ul>
          </div>
        </div>
        <div class="cards-wrapper">
          {buttonClicked === "about me" ? (
            <Card
              title="Who am i?"
              description="My name is Aysla, and I’m a programming student living in London.
              I’m passionate about learning new technologies and developing my
              skills in coding. Besides my studies, I enjoy staying active and
              spend a lot of time at the gym, which helps me stay focused and
              energized. Combining my interest in technology and fitness keeps
              me motivated every day!"
              onClose={handleClose}
            />
          ) : null}
          {buttonClicked === "Skills" ? (
            <Card
              title="Skills/Tech-Skills"
              skills={[
                "Easy adaptation",
                "Great interpersonal relationship",
                "Proactive",
                "Communicative",
                "Problem Solving skill",
                "Git/GitHub",
                "HTML5",
                "CSS3",
                "JavaScript",
                "React",
              ]}
              onClose={handleClose}
            />
          ) : null}
          {buttonClicked === "Projects" ? (
            <Card
              title="My projects"
              projects={[
                {
                  name: "web_project_around",
                  url: "https:ayslaloureiro.github.io/web_project_around",
                },
                {
                  name: "web_project_around_react",
                  url: " https://ayslaloureiro.github.io/web_project_around_react/",
                },
              ]}
              onClose={handleClose}
            />
          ) : null}
        </div>
      </main>
      <footer className="footer">© 2024 Aysla Loureiro</footer>
    </div>
  );
}

export default App;
