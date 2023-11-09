"use strict";

import {projectFactory} from "./projectFactory";

const projects = [];

/* Create new project DOM manipulation starts */

const newProjectButton = document.querySelector(".new-project");
const newProjectDialog = document.querySelector("#newProjectDialog");
const createProjectBtn = newProjectDialog.querySelector("#createProjectButton");
const cancelProjectBtn = newProjectDialog.querySelector("#cancelProjectButton");

newProjectButton.addEventListener("click", () => {
    newProjectDialog.showModal();
});

createProjectBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Do not submit form
    let newProjectTitle = document.getElementById("new-project-title").value;
    let newProject = projectFactory(newProjectTitle);
    projects.push(newProject);
    newProjectDialog.close();
    let newProjectTitleField = document.getElementById("new-project-title");
    newProjectTitleField.value = "";
});

cancelProjectBtn.addEventListener("click", (event) => {
    event.preventDefault(); // do not submit form
    let newProjectTitleField = document.getElementById("new-project-title");
    newProjectTitleField.value = "";
    newProjectDialog.close();
});

/* Create new project DOM manipulation ends */

/* Dislay projects in sidebar DOM manipulation starts */
/* Display contents of project in main area starts */

const projectTabContainer = document.querySelector(".project-tab-container");
const todoContainer = document.querySelector(".todo-container");

const newToDoDialog = document.querySelector("#newToDoDialog");

const createToDoBtn = newToDoDialog.querySelector("#createToDoButton");
const cancelToDoBtn = newToDoDialog.querySelector("#cancelToDoButton");

createProjectBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Do not submit form
    projectTabContainer.textContent = "";
    for (let project of projects) {
        let projectTab = document.createElement("div");
        projectTab.textContent = project.title;
        // Event listener below clears the main display, 
        // 
        // creates a button 
        // to add new todos to each project
        projectTab.addEventListener("click", () => {
            todoContainer.textContent = "";
            // display all todos
            //  will go here
            const newToDoBtn = document.createElement("button");
            newToDoBtn.textContent = "New ToDo";
            // Get position of current project in projects
            const projectNum = projects.indexOf(project);
            // Add position as an attribute to button
            newToDoBtn.setAttribute("data-project-number", projectNum);
            // Add event listener to button to create new todo
            // and add todo to corresponding project
            newToDoBtn.addEventListener("click", (event) => {
                const projectLoc = event.target.getAttribute("data-project-number");
                // Display the new ToDo modal
                newToDoDialog.showModal();
                // create event listener
                // get new todo information in event of create
                createToDoBtn.addEventListener("click", (event) => {
                    event.preventDefault(); // Do not submit form
                    let newToDoTitle = document.getElementById("new-todo-title").value;
                    // as a placeholder for a todo factory, add digit 1 to the project's todo list
                    projects[projectLoc].todos.push(1);
                    let newToDoTitleField = document.getElementById("new-todo-title");
                    newToDoTitleField.value = "";
                    newToDoDialog.close();
                });
                // create an event listener
                // cancel new todo in case of pushing cancel
                cancelToDoBtn.addEventListener("click", (event) => {
                    event.preventDefault(); // do not submit form
                    let newToDoTitleField = document.getElementById("new-todo-title");
                    newToDoTitleField.value = "";
                    newToDoDialog.close();
                });
                console.log(projects);
            });

            todoContainer.appendChild(newToDoBtn);
        });
        projectTabContainer.appendChild(projectTab);
    }
});

/* Display projects in sidebar DOM manipulation ends */
/* Display contents of projects in main area ends */

