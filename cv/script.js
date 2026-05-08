const skills = {
  Frontend: ["React", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
  Backend: ["Node.js", "Express", "REST APIs"],
  Database: ["MongoDB", "PostgreSQL"],
  Tools: ["Git", "GitHub", "VS Code", "Vercel", "Netlify", "Railway"]
};

const projects = [
  {
    title: "MeBlog",
    type: "CMS Blogging Platform",
    desc: "Built a full-stack CMS blogging platform with rich post editor, user authentication, and admin dashboard using the MERN stack. Deployed on Vercel.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://cms-frontend-three-kohl.vercel.app",
    github: "https://github.com/Abubakar-webmaker/cms-frontend"
  },
  {
    title: "TaskFlow Dashboard",
    type: "Productivity App",
    desc: "Developed a clean task management dashboard with boards, status tracking, and intuitive UI patterns.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/abubakar"
  },
  {
    title: "ClientPulse CRM",
    type: "CRM Tool",
    desc: "Created a lightweight CRM for freelancers with lead capture, client notes, and follow-up reminders.",
    tech: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/abubakar"
  }
];

const skillDiv = document.getElementById("skills");

Object.entries(skills).forEach(([category, items]) => {
  const block = document.createElement("article");
  block.className = "item";

  const title = document.createElement("h3");
  title.textContent = category;
  block.appendChild(title);

  const chips = document.createElement("div");
  chips.className = "chips";

  items.forEach((skill) => {
    const span = document.createElement("span");
    span.className = "skill";
    span.textContent = skill;
    chips.appendChild(span);
  });

  block.appendChild(chips);
  skillDiv.appendChild(block);
});

const projectDiv = document.getElementById("projects");

projects.forEach((project) => {
  const article = document.createElement("article");
  article.className = "project";

  article.innerHTML = `
    <div class="project-top">
      <h3>${project.title}</h3>
      <span class="project__type">${project.type}</span>
    </div>
    <p>${project.desc}</p>
    <div class="tags">
      ${project.tech.map((tech) => `<span class="tag">${tech}</span>`).join("")}
    </div>
    <a href="${project.github}" target="_blank" rel="noreferrer" class="project__link">GitHub →</a>
    ${project.live ? `<a href="${project.live}" target="_blank" rel="noreferrer" class="project__link">Live Demo →</a>` : ""}
  `;

  projectDiv.appendChild(article);
});

function printCV() {
  window.print();
}
