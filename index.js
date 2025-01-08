const projects = [
    {
      name: "Abel Tracker",
      codeUrl: "https://github.com/marahsang/abel-tracker",
      livePreview: " https://marahsang.github.io/abel-tracker/",
    },
    {
      name: "Black Jack",
      codeUrl: "https://github.com/marahsang/black-jack",
      livePreview: "https://marahsang.github.io/black-jack/",
    },
    {
      name: "Odin Grid Project",
      codeUrl: "https://github.com/marahsang/Odin-Grid-Project",
      livePreview: "https://marahsang.github.io/Odin-Grid-Project/",
    },
    {
      name: "Landing Page",
      codeUrl: "https://github.com/marahsang/odin-lpage",
      livePreview: "https://marahsang.github.io/odin-lpage/",
    },
    {
      name: "Calculator",
      codeUrl: "https://github.com/marahsang/Calculator_Odin_Project",
      livePreview: "https://marahsang.github.io/Calculator_Odin_Project/",
    },
    {
    name: "Rock Paper Scissors",
    codeUrl: "https://github.com/marahsang/rock_paper_scissors",
    livePreview: "https://marahsang.github.io/rock_paper_scissors/",
    },
    {
        name: "Etch a Sketch",
    codeUrl: "https://github.com/marahsang/Etch-a-Sketch",
    livePreview: "https://marahsang.github.io/Etch-a-Sketch/",
    },
    {
        name: "Odin Recipes",
    codeUrl: "https://github.com/marahsang/odin-recipes",
    livePreview: "https://marahsang.github.io/odin-recipes/",
    }
  ];
  
  // Get the project list container
  const projectList = document.getElementById("projectList");
  
  // Populate projects dynamically
  projects.forEach((project) => {
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item");
    projectItem.innerHTML = `
      <span>${project.name}</span>
      <a href="${project.codeUrl}" target="_blank">View Code</a>
      <a href="${project.livePreview}" target="_blank">Live Preview</a>
    `;
    projectList.appendChild(projectItem);
  });