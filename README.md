# Node.js Backend Project | Modern Backend Development for 2025 🔥

Master Node.js, Express.js, SQLite, PostgreSQL, Prisma, and Docker with this ultimate backend development course! Learn how to build REST API endpoints, implement JWT authentication, and handle CRUD database interactions through practical projects and foundational theory.  

---

### **Description**  

A full-stack project using Node.js, Express.js, PostgreSQL, Prisma, and Docker.

---

### **🚀 What This Project Covers**  
This backend project demonstrates essential skills for building and deploying robust, real-world applications using Node.js.

- REST API Development – Designing and implementing scalable API endpoints.  
- Secure Authentication – Using JWT (JSON Web Tokens) for user authentication and authorization. 
- Database Integration – Working with SQLite and PostgreSQL databases.  
- SQL & ORM Mastery – Writing efficient SQL queries and leveraging Prisma ORM for database management.
- ORM basics and advanced queries with Prisma.  
- Containerization with Docker – Streamlining deployment using Docker.
- Code Architecture & Debugging – Structuring backend projects effectively and troubleshooting issues. 

---

## Overview

This is an **Dockerized** and authentication-protected Todo App using **Node.js**, **Express.js**, **bcrypt**, **JWT authentication**, **Prisma**, and **PostgreSQL**. The app allows users to:
- **Register**: Create a new account.
- **Login**: Authenticate and receive a JWT token.
- **Manage Todos**: Perform auth protected CRUD operations on their own todo tasks after logging in.

## Project Structure

Here’s the corrected and complete project structure diagram for the auth-protected Todo App:

```
NodeJS-Backend-Project/
│
├── public/
│   └── index.html              # The frontend HTML file for authentication and todo management
│
├── prisma/
│   ├── schema.prisma           # The frontend HTML file for authentication and todo management
│   └── migrations/             #
│
├── src/
│   ├── controllers/            # (Optional) For future separation of concerns
│   └── middlewares/
│       └── authMiddleware.js    # Middleware for verifying JWT and protecting routes
│   └── routes/
│       └── authRoutes.js        # Routes for user registration and login
│       └── todoRoutes.js        # Routes for authenticated CRUD operations on todos
│   └── prismaClient.js          # Prisma client database setup and table creation
│   └── server.js                # Main server entry point that sets up routing and middleware
│
├── Dockerfile                   # Docker container setup instructions
├── docker-compose.yaml          # Docker setup config file
├── package.json                 # Project dependencies and scripts
├── package-lock.json            # Lockfile for exact dependency versions
└── todo-app.rest                # REST client file for emulating API requests
```

### Explanation of Key Directories and Files

- **`prisma/`**: Contains Prisma's schema (`schema.prisma`) and migration files. After each schema change, migration files are generated here to apply database changes.
- **`public/`**: Contains the frontend HTML file. This file interacts with the backend API for user registration, login, and todo management.
- **`src/`**: The core backend code.
  - **`controllers/`** (optional): A directory to organize logic and separate it from the routes if needed in the future.
  - **`middlewares/`**: Contains middleware for handling JWT-based authentication, protecting routes that require authentication.
  - **`routes/`**: Contains API routes for handling authentication and CRUD operations for todos.
  - **`prismaClient.js`**: Sets up the Prisma client for database interaction.
  - **`server.js`**: The entry point for the Express.js application, which configures the app, routes, and middleware.
- **`.env`**: Stores environment variables like `DATABASE_URL` and `JWT_SECRET`. These variables are used to configure Prisma, JWT, and database connections.
- **`Dockerfile`**: The Dockerfile for building the Node.js application in a containerized environment.
- **`docker-compose.yaml`**: Configuration for Docker Compose, which sets up both the Node.js app and PostgreSQL in separate containers.
- **`package.json`**: Defines the Node.js dependencies and scripts used to run the application (e.g., `npm start`).
- **`README.md`**: Project documentation, including setup instructions and directory structure (this file).

### Example Workflow

1. **Define or Update Schema**: Modify the `schema.prisma` file to change your database structure.
2. **Create Migrations**: Use Prisma to generate and apply migrations.
3. **Run Docker Compose**: Build and run the Node.js app and PostgreSQL using Docker Compose.
4. **Interact with the API**: Use the frontend or API client (e.g., Postman) to register, login, and manage todos.

This project structure and workflow will help organize your code and make it easier to maintain and scale as your application grows.

## Getting Started

0. **Install Docker Desktop**

1. **Clone the Repository**:

```bash
git clone https://github.com/your-username/NodeJS-Backend-Project.git
cd NodeJS-Backend-Project
```

2. **Generate the Prisma Client**:

`npx prisma generate`

3. **Build your docker images**:

`docker compose build`

4. **Create PostgreSQL migrations and apply them**:

`docker compose run app npx prisma migrate dev --name init`

*Also* - to run/apply migrations if necessary:

`docker-compose run app npx prisma migrate deploy`

5. **Boot up 2x docker containers**:

`docker compose up`

*or*

`docker compose up -d`

If you want to boot it up without it commandeering your terminal (you'll have to stop if via Docker Desktop though).

6. **To login to docker PostgreSQL database (from a new terminal instance while docker containers are running) where you can run SQL commands and modify database!**:

`docker exec -it postgres-db psql -U postgres -d todoapp`

7. **To stop Docker containers**:

`docker compose down`

8. **To delete all docker containers**:

`docker system prune`

9. **Access the App**:

Open `http://localhost:5003` (or `localhost:3000` if changed) in your browser to see the frontend. You can register, log in, and manage your todo list from there.

## Emulating HTTP Requests (REST Client)

The **REST Client** file (`todo-app.rest`) is provided to help you test the API using HTTP requests directly. You can run these requests using the **REST Client** extension for VS Code or other compatible tools.

### `todo-app.rest`

The `todo-app.rest` file includes requests for:
- **Registering a user**: Sends a `POST` request to create a new user.
- **Logging in**: Sends a `POST` request to authenticate a user and retrieve a JWT token.
- **Fetching todos**: Sends a `GET` request to fetch the authenticated user's todos (JWT required).
- **Adding a todo**: Sends a `POST` request to create a new todo (JWT required).
- **Updating a todo**: Sends a `PUT` request to update an existing todo (JWT required).
- **Deleting a todo**: Sends a `DELETE` request to remove a todo (JWT required).

### How to Use the REST Client

1. Install the **REST Client** extension for VS Code.
2. Open `todo-app.rest`.
3. Run the requests by clicking on the "Send Request" link above each block of HTTP code.
4. Make sure to copy the token from the login response and replace `{{token}}` with the actual JWT token for protected routes.

## Conclusion

This guide covers the main components of the app and how to get it up and running on your local machine. It highlights key considerations for Node.js version compatibility and provides a ready-to-use `todo-app.rest` file for testing. You can now explore the app's functionality, including authentication and CRUD operations on todos!