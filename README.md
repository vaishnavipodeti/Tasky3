# Tasky3 – Task Management Backend

A simple Task Management REST API built using **Node.js** and **Express.js**. This project demonstrates CRUD operations and persistent storage using a JSON file.

## Features

- Create a new task
- View all tasks
- Update an existing task
- Delete a task
- Store task data in a JSON file

## Technologies Used

- Node.js
- Express.js
- JavaScript
- REST API
- JSON File Storage
- Postman

## Project Structure

```text
tasky3/
├── app.js
├── helperFunction.js
├── tasks.json
├── package.json
├── package-lock.json
└── .gitignore
```

## Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/vaishnavipodeti/Tasky3.git
```

2. Navigate to the project folder:

```bash
cd Tasky3
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

The server runs at:

```text
http://localhost:3001
```

## API Endpoints

Base URL: `http://localhost:3001/api/tasks`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## Example Request Body

For POST:

```json
{
  "title": "Learn React",
  "deadline": "Monday"
}
```

For PUT:

```json
{
  "title": "Complete React project",
  "deadline": "Friday"
}
```

## Testing

All CRUD API endpoints were tested using **Postman**.

## Author

Vaishnavi
