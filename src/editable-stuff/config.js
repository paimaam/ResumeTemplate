// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Dileep",
  middleName: "",
  lastName: "Pai",
  message: "Talks on Technology",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/paimaam",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/dileep-pai-489774126/",
    },
  ],
};


const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/dileep_pai.jpg"),
  imageSize: 375,
  message:
    "My name is Dileep Pai. I’m working as senior software engineer in NEC SOFTWARE SOLUTIONS",
  resume: "https://test4466.blob.core.windows.net/dile/ResumeDileep.pdf",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "paimaam", //i.e."johnDoe12Gh"
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/dileep_pai.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/dileep_pai.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C#", value: 90 },
    { name: "SQL", value: 65 },
    { name: "Azure", value: 95 },
    { name: "React", value: 45 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 }
  ],
  softSkills: [
    { name: "LeaderShip", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Problem Solving", value: 75 },
    { name: "Organization", value: 80 },
    { name: "Creativity", value: 90 },
    { name: "Public Speaking", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I Deliver Sessions On Azure, If you wish to collaborate please contact",
  email: "dilludp123@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/tm.png'),
      date: 'April 2018 – September 2020',
    },
    {
      role: 'Developer Consultant',
      companylogo: require('../assets/img/vts.jfif'),
      date: 'October 2020 – May 2021',
    },
    {
      role: 'Senior Software',
      companylogo: require('../assets/img/nec.jfif'),
      date: 'May 2021 - Present',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
