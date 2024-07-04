# Todo List Application

This is a simple Todo List application built with React.js. The application allows users to add, edit, delete, and mark tasks as completed. The tasks are stored in `localStorage` to persist data even after refreshing the page.

![alt text](image.png)

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Persist tasks using `localStorage`

## Installation

1. Clone the repository:

bash
git clone https://github.com/your-username/todo-list-app.git
cd todo-list-app


2. Install the dependencies:
npm install


## 3. Start the application:
npm start

The application will be available at http://localhost:3000.



Usage
Type a task in the input field and press the "Add" button or the "Enter" key to add the task to the list.
Click the edit button (pencil icon) next to a task to edit the task. Make changes in the input field and press the "Edit" button or the "Enter" key to save the changes.
Click the delete button (trash icon) next to a task to delete the task.
Click on a task to mark it as completed. Completed tasks will have a line-through style.
Press the "Remove All" button to clear all tasks from the list.



File Structure
src/
App.js: The main component that renders the Todo component.
components/todoreact
todo.js: The Todo component containing the main functionality of the application.
style.css: The CSS file for styling the application.



Code Explanation
Todo.js
This file contains the main Todo class component with the following state variables:

inputdata: Stores the current input value.
items: Stores the list of tasks.
isEditItem: Stores the ID of the item being edited.
toggleButton: Boolean value to toggle between add and edit modes.
Methods
addItem: Adds a new task or updates an existing task.
editItem: Prepares the selected task for editing.
deleteItem: Deletes a task from the list.
markItem: Toggles the completion status of a task.
removeAll: Clears all tasks from the list.
componentDidUpdate: Updates localStorage whenever the items state changes.
handleInputChange: Updates the inputdata state when the input value changes.
handleKeyPress: Adds a task when the "Enter" key is pressed.



Dependencies
react: JavaScript library for building user interfaces.
react-dom: Package for working with the DOM in React.
react-scripts: Scripts and configuration used by Create React App.
