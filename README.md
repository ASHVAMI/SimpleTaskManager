# Simple Task Manager

A simple task management application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Redux for state management. This project demonstrates how to create a full-stack application with a RESTful API backend and a modern frontend UI.

## Features

- Create, read, update, and delete tasks
- Mark tasks as completed or incomplete
- Responsive user interface designed with Tailwind CSS

## Project Structure

- **Backend**: Node.js with Express.js for the server and MongoDB for the database.
- **Frontend**: React.js with Redux for state management and Tailwind CSS for styling.

## Installation

### Backend

1. **Navigate to the `backend` directory:**

    ```bash
    cd backend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file in the `backend` directory with the following content:**

    ```bash
    MONGO_URI=mongodb://localhost:27017/simpletaskmanager
    PORT=5000
    ```

4. **Start the backend server:**

    ```bash
    npm run dev
    ```

### Frontend

1. **Navigate to the `frontend` directory:**

    ```bash
    cd frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the frontend development server:**

    ```bash
    npm start
    ```

## Running the Project

1. **Ensure that MongoDB is running.**

2. **Start the backend server in one terminal:**

    ```bash
    cd backend
    npm run dev
    ```

3. **Start the frontend server in another terminal:**

    ```bash
    cd frontend
    npm start
    ```

4. **Open your browser and go to** `http://localhost:3000` **to see the application.**

## Endpoints

- **GET** `/api/tasks` - Retrieve all tasks
- **POST** `/api/tasks` - Create a new task
- **PUT** `/api/tasks/:id` - Update a task by ID
- **DELETE** `/api/tasks/:id` - Delete a task by ID

## Scripts

- **`npm run dev`** (backend) - Start the backend server with `nodemon` for development
- **`npm start`** (frontend) - Start the frontend development server

## Seeding the Database

To seed the database with initial tasks, run:

```bash
cd backend/scripts
node seedDB.js
