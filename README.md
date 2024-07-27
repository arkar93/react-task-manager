# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

API Endpoints

This application interacts with an Express server. The following endpoints are available:

    GET /tasks
        Fetches all tasks.
        Response: [ { "id": number, "name": string, "description": string }, ... ]

    POST /tasks
        Adds a new task.
        Request Body: { "name": string, "description": string }
        Response: { "id": number, "name": string, "description": string }

    DELETE /tasks/
        Deletes a task by ID.
        Response: 204 No Content if successful, 404 Not Found if the task does not exist.
