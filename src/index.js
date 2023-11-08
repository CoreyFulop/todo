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