// Part 1: Variables & Conditionals

let username = "Alex"; 
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome back, " + username + "!");
} else {
  console.log("Please log in to continue.");
}

// Part 2: Custom Functions

// Function 1: Add a project to the list
function addProject(name) {
  const list = document.getElementById("project-list");
  const li = document.createElement("li");
  li.textContent = name;
  list.appendChild(li);
}

// Function 2: Show contact info
function showContact() {
  const contactInfo = document.getElementById("contactInfo");
  contactInfo.textContent = "📧 alex@example.com";
}

// Part 3: Loops
// Example 1: For loop - add multiple projects
let projects = ["Portfolio Website", "Weather App", "Task Manager"];
for (let i = 0; i < projects.length; i++) {
  addProject(projects[i]);
}

// Example 2: For...of loop - log each project
for (let project of projects) {
  console.log("Project: " + project);
}

// Part 4: DOM Interactions

// Interaction 1: Change site title text
document.getElementById("site-title").textContent = "Alex's Portfolio";

// Interaction 2: Change tagline style
document.getElementById("tagline").style.color = "gray";

// Interaction 3: Add click event to button
document.getElementById("contactBtn").addEventListener("click", showContact);
