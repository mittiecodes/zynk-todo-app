# Zynk — Full-Stack Todo App

A full-stack task management app built with React on the frontend and Node.js/Express on the backend, using MongoDB as the database. Built to practice end-to-end CRUD operations, REST API integration with Axios, and component-based UI development.

---

## Tech Stack

**Frontend**
- React 19 (functional components + hooks)
- Vite (dev server + bundler)
- Material UI (MUI v9) for UI components
- Axios for HTTP requests
- React Icons

**Backend**
- Node.js + Express.js
- MongoDB + Mongoose (ODM)
- CORS middleware for cross-origin requests
- Nodemon for development

---

## Features

- Add a new task
- Mark a task as done / undone (toggle)
- Delete a task
- All tasks fetched from and persisted in MongoDB

---

## Architecture

```
zynk-todo-app/
├── zynk-frontend/      # React + Vite app (runs on port 5173)
│   └── src/
│       └── ...         # Components, API calls via Axios
│
└── zynk-server/        # Express REST API (runs on port 3006)
    ├── index.js        # Server entry point + route definitions
    └── Models/
        └── Todo.js     # Mongoose schema
```

The frontend communicates with the backend via REST API calls using Axios. The backend exposes four endpoints that map directly to CRUD operations on the MongoDB `todos` collection.

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/get` | Fetch all todos |
| POST | `/add` | Create a new todo |
| PUT | `/update/:id` | Toggle `done` status |
| DELETE | `/delete/:id` | Delete a todo by ID |

The toggle (PUT) uses a MongoDB aggregation pipeline with `$set` and `$not` to flip the boolean `done` field in a single atomic operation — avoiding a separate read before the update.

---

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB running locally on port `27017`

### Run the Backend
```bash
cd zynk-server
npm install
npm start
# Server runs on http://localhost:3006
```

### Run the Frontend
```bash
cd zynk-frontend
npm install
npm run dev
# App runs on http://localhost:5173
```

---

## What I Learned / Practiced

- Setting up a React + Vite project from scratch
- Connecting a React frontend to a Node/Express backend using Axios
- Writing REST API routes in Express with proper HTTP methods
- Defining a Mongoose schema and performing CRUD operations on MongoDB
- Using MUI components to build a clean, functional UI
- Managing component state with React hooks (`useState`, `useEffect`)
- Understanding CORS and why it's needed in full-stack local development

---

## Future Improvements

- [ ] Add user authentication (JWT)
- [ ] Deploy frontend (Vercel) and backend (Render)
- [ ] Add due dates and priority levels
- [ ] Move API base URL to environment variables (`.env`)
- [ ] Add loading and error states in the UI

---

## Author

**Mrittika** — Frontend Developer  
[LinkedIn](https://www.linkedin.com/in/mrittikac27) · [GitHub](hhttps://github.com/mittiecodes)
