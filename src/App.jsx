import { useState } from "react"
import PersonalInfo from "./components/PersonalInfo.jsx"
import Education from "./components/Education.jsx"
import Experience from "./components/Experience.jsx"
import Projects from "./components/Projects.jsx"
import TechnicalSkills from "./components/TechnicalSkills.jsx"

function App() {
  const defaultPersonalInfo = {
    name: "Jake Ryan",
    location: "Texas, USA",
    phone: "123-456-7890",
    email: "jake@su.edu",
    linkedinLink: "#",
    githubLink: "#"
  };

  const defaultEducation = [
    {
      institution: "Southwestern University",
      location: "Georgetown, TX",
      degree: "Bachelor of Technology in Computer Science",
      dateRange: "Aug. 2018 - May. 2021",
      cgpa: "8.76/10"
    },
    {
      institution: "Blinn School",
      location: "Bryan, TX",
      degree: "Higher Secondary Education",
      dateRange: "Aug. 2017 - May. 2018",
      cgpa: "9.15/10"
    }
  ];

  const defaultExperience = [
    {
      position: "Information Technology Support Specialist",
      location: "Georgetown, TX",
      company: "Southwestern University",
      dateRange: "Sep. 2018 - Present",
      description: [
        "Communicate with managers to set up campus computers used on campus",
        "Assess and troubleshoot computer problems brought by students, faculty and staff",
        "Maintain upkeep of computers, classroom equipment, and 200 printers across campus",
      ]
    },
    {
      position: "Artificial Intelligence Research Assistant",
      location: "Georgetown, TX",
      company: "Southwestern University",
      dateRange: "May. 2019 - July. 2019",
      description: [
        "Explored methods to generate video game dungeons based off of The Legend of Zelda",
        "Developed a game in Java to test the generated dungeons",
        "Contributed 50K+ lines of code to an established codebase via Git"
      ]
    },
  ]

  const defaultProjects = [
    {
      name: "Gitlytics",
      technologies: "Python, Flask, React, PostgreSQL, Docker",
      liveLink: "#",
      codeLink: "#",
      description: [
        "Developed a full-stack web application using with Flask serving a REST API with React as the frontend.",
        "Implemented GitHub OAuth to get data from user's repositories.",
        "Visualized GitHub data to show collaboration.",
        "Used Celery and Redis for asynchronous tasks."
      ]
    },
    {
      name: "Simple Paintball",
      technologies: "Spigot API, Java, Maven, TravisCI, Git",
      liveLink: "#",
      codeLink: "#",
      description: [
        "Developed a Minecraft server plugin to entertain kids during free time for a previous job.",
        "Published plugin to websites gaining 2K+ downloads and an average 4.5/5-star review.",
        "Implemented continuous delivery using TravisCI to build the plugin upon new a release.",
        "Collaborated with Minecraft server administrators to suggest features and get feedback about the plugin."
      ]
    },
  ];

  const defaultTechnicalSkills = {
    languages: "Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R",
    frameworks: "React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI",
    developmentTools: "Git, Docker, TravisCI, Google Cloud Platform, VS Code",
    libraries: "Pandas, NumPy, Matplotlib"
  };

  const [personalInfo, setPersonalInfo] = useState(defaultPersonalInfo);
  const [education, setEducation] = useState(defaultEducation);
  const [experience, setExperience] = useState(defaultExperience);
  const [projects, setProjects] = useState(defaultProjects);
  const [technicalSkills, setTechnicalSkills] = useState(defaultTechnicalSkills);

  return (
    <div className="container mx-auto max-w-4xl p-4 my-8 bg-white shadow-lg">
      <PersonalInfo data={personalInfo} setData={setPersonalInfo} />
      <Education data={education} setData={setEducation} />
      <Experience data={experience} setData={setExperience} />
      <Projects data={projects} setData={setProjects} />
      <TechnicalSkills data={technicalSkills} setData={setTechnicalSkills} />
    </div>
  )
}

export default App
