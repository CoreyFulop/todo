"use strict";

import {projectFactory} from "./projectFactory";

function todoFactory(title) {
    return {title};
}

const projects = [];
let currentProjectArrayLocation;

function displayProjectsInSidebar(sidebar, projectArray) {
    sidebar.textContent = "";
    for (let project of projectArray) {
        let projectTab = document.createElement("div");
        projectTab.textContent = project.title;
        projectTab.setAttribute("data-project-array-location", projectArray.indexOf(project));
        projectTab.addEventListener("click", (event) => {
            currentProjectArrayLocation = event.target.getAttribute("data-project-array-location");
        });
        projectTab.addEventListener("click", (event) => {
            todoContainer.textContent = "";
            for (let todo of projectArray[currentProjectArrayLocation].todos) {
                let singleTodoContainer = document.createElement("div");
                singleTodoContainer.textContent = todo.title;
                todoContainer.appendChild(singleTodoContainer);
            };
        });
        projectTab.addEventListener("click", () => {
            const newToDoBtn = document.createElement("button");
            newToDoBtn.setAttribute("data-project-array-location", projectArray.indexOf(project));
            newToDoBtn.textContent = "New ToDo";
            newToDoBtn.addEventListener("click", () => {
                newToDoDialog.showModal();
                document.getElementById("new-todo-title").value = ""; // Clear modal of previous inputs
            });
            todoContainer.appendChild(newToDoBtn);
        });
        sidebar.appendChild(projectTab);
    }
}

const projectTabContainer = document.querySelector(".project-tab-container");
const todoContainer = document.querySelector(".todo-container");

const newToDoDialog = document.querySelector("#newToDoDialog");
const createToDoBtn = newToDoDialog.querySelector("#createToDoButton");
const cancelToDoBtn = newToDoDialog.querySelector("#cancelToDoButton");

const newProjectButton = document.querySelector(".new-project");
const newProjectDialog = document.querySelector("#newProjectDialog");
const createProjectBtn = newProjectDialog.querySelector("#createProjectButton");
const cancelProjectBtn = newProjectDialog.querySelector("#cancelProjectButton");

createToDoBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Do not submit form
    let newToDoTitle = document.getElementById("new-todo-title").value;
    let newToDo = todoFactory(newToDoTitle)
    projects[currentProjectArrayLocation].todos.push(newToDo);
    newToDoDialog.close();
    // Mostly duplicated from display projects in sidebar function
    todoContainer.textContent = "";
    for (let todo of projects[currentProjectArrayLocation].todos) {
        let singleTodoContainer = document.createElement("div");
        singleTodoContainer.textContent = todo.title;
        todoContainer.appendChild(singleTodoContainer);
    };
    const newToDoBtn = document.createElement("button");
    newToDoBtn.setAttribute("data-project-array-location", currentProjectArrayLocation);
    newToDoBtn.textContent = "New ToDo";
    newToDoBtn.addEventListener("click", () => {
        newToDoDialog.showModal();
        document.getElementById("new-todo-title").value = ""; // Clear modal of previous inputs
    });
    todoContainer.appendChild(newToDoBtn);
    });

cancelToDoBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Do not submit form
    newToDoDialog.close();
    });

newProjectButton.addEventListener("click", () => {
    newProjectDialog.showModal();
    document.getElementById("new-project-title").value = ""; // Clear modal of previous inputs
    });

createProjectBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Do not submit form
    let newProjectTitle = document.getElementById("new-project-title").value;
    let newProject = projectFactory(newProjectTitle);
    projects.push(newProject);
    displayProjectsInSidebar(projectTabContainer, projects);
    newProjectDialog.close();
});

cancelProjectBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Do not submit form
    newProjectDialog.close();
});
