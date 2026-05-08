const skills = {
  Frontend: ["React", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
  Backend: ["Node.js", "Express", "REST APIs"],
  Database: ["MongoDB", "PostgreSQL"],
  Tools: ["Git", "GitHub", "VS Code", "Deployment"]
};

const projects = [
  {
    title: "ShopEase",
    type: "E-commerce Platform",
    desc: "Built a modern online store with product browsing, cart workflow, and a clean mobile-first interface.",
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "ChatFlow",
    type: "Realtime App",
    desc: "Developed a responsive chat experience with fast messaging, intuitive UI states, and scalable backend handling.",
    tech: ["Socket.io", "Node.js", "Express"]
  },
  {
    title: "PropFind",
    type: "Listing Platform",
    desc: "Created a property discovery experience with filter-friendly design and structured data presentation.",
    tech: ["React", "PostgreSQL", "API Integration"]
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
  `;

  projectDiv.appendChild(article);
});

function printCV() {
  window.print();
}
