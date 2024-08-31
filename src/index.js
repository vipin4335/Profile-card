import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import vipinImage from "./vipin.jpeg";
import "./styles.css";
const skills = [
  {
    skill: "JavaScript",
    level: "Advanced",
    color: "#F7DF1E", // yellow color
  },
  {
    skill: "React",
    level: "Intermediate",
    color: "#61DAFB", 
  },
  {
    skill: "CSS",
    level: "Advanced",
    color: "#264DE4", // blue color
  },
  {
    skill: "Node.js",
    level: "Intermediate",
    color: "#68A063", // green color
  },
  {
    skill: "Python",
    level: "Beginner",
    color: "#306998", // blue color
  },
];
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src={vipinImage} alt="VIPIN IMAGE" />;
}

function Intro() {
  return (
    <div>
      <h1>Vipin</h1>
      <p>
        Hi, I am Vipin, a passionate web developer with a love for creating
        dynamic and user-friendly web applications.
      </p>
    </div>
  );
}

function Skill({skill,level,color}) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{level==="Beginner"?"👩‍🦲":level==="Intermediate"?"🧔‍♂️":"💪"}</span>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {
          skills.map((skillData)=>(
          <Skill skill={skillData.skill} level={skillData.level} color={skillData.color} />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
