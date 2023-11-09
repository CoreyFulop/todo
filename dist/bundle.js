/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectFactory */ \"./src/projectFactory.js\");\n\n\n\n\nconst projects = [];\n\n/* Create new project DOM manipulation starts */\n\nconst newProjectButton = document.querySelector(\".new-project\");\nconst newProjectDialog = document.querySelector(\"#newProjectDialog\");\nconst createProjectBtn = newProjectDialog.querySelector(\"#createProjectButton\");\nconst cancelProjectBtn = newProjectDialog.querySelector(\"#cancelProjectButton\");\n\nnewProjectButton.addEventListener(\"click\", () => {\n    newProjectDialog.showModal();\n});\n\ncreateProjectBtn.addEventListener(\"click\", (event) => {\n    event.preventDefault(); // Do not submit form\n    let newProjectTitle = document.getElementById(\"new-project-title\").value;\n    let newProject = (0,_projectFactory__WEBPACK_IMPORTED_MODULE_0__.projectFactory)(newProjectTitle);\n    projects.push(newProject);\n    newProjectDialog.close();\n    let newProjectTitleField = document.getElementById(\"new-project-title\");\n    newProjectTitleField.value = \"\";\n});\n\ncancelProjectBtn.addEventListener(\"click\", (event) => {\n    event.preventDefault(); // do not submit form\n    let newProjectTitleField = document.getElementById(\"new-project-title\");\n    newProjectTitleField.value = \"\";\n    newProjectDialog.close();\n});\n\n/* Create new project DOM manipulation ends */\n\n/* Dislay projects in sidebar DOM manipulation starts */\n/* Display contents of project in main area starts */\n\nconst projectTabContainer = document.querySelector(\".project-tab-container\");\nconst todoContainer = document.querySelector(\".todo-container\");\n\ncreateProjectBtn.addEventListener(\"click\", (event) => {\n    event.preventDefault(); // Do not submit form\n    projectTabContainer.textContent = \"\";\n    for (let project of projects) {\n        let projectTab = document.createElement(\"div\");\n        projectTab.textContent = project.title;\n        // Event listener below clears the main display, \n        // \n        // creates a button \n        // to add new todos to each project\n        projectTab.addEventListener(\"click\", () => {\n            todoContainer.textContent = \"\";\n            // display all todos\n            //  will go here\n            const newToDoBtn = document.createElement(\"button\");\n            newToDoBtn.textContent = \"New ToDo\";\n            // Get position of current project in projects\n            const projectNum = projects.indexOf(project);\n            // Add position as an attribute to button\n            newToDoBtn.setAttribute(\"data-project-number\", projectNum);\n            // Add event listener to button to create new todo\n            // and add todo to corresponding project\n            newToDoBtn.addEventListener(\"click\", (event) => {\n                const projectLoc = event.target.getAttribute(\"data-project-number\");\n                // as a placeholder for a todo, add digit 1 to the project's\n                // list of todos\n                projects[projectLoc].todos.push(1);\n                console.log(`${projects[projectLoc].todos}`);\n            });\n\n            todoContainer.appendChild(newToDoBtn);\n        });\n        projectTabContainer.appendChild(projectTab);\n    }\n});\n\n/* Display projects in sidebar DOM manipulation ends */\n/* Display contents of projects in main area ends */\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/projectFactory.js":
/*!*******************************!*\
  !*** ./src/projectFactory.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectFactory: () => (/* binding */ projectFactory)\n/* harmony export */ });\nfunction projectFactory(title) {\n    let todos = [];\n    return {title, todos};\n}\n\n//# sourceURL=webpack://todo/./src/projectFactory.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;