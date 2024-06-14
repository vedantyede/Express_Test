# ExpressJS Authentication and Authorization

This is a simple ExpressJS project that demonstrates user authentication and authorization using JSON Web Tokens (JWT). It includes features like user registration, login, and protected routes that require authentication.

## Table of Contents

ExpressJS Authentication and Authorization
Table of Contents
Introduction
Features
Prerequisites
Installation
Configuration
Usage
Register a new user
Login
Access protected routes
API Endpoints
Project Structure
Technologies Used
Contributing
License

## Introduction

This project aims to provide a basic understanding of how to implement user authentication and authorization in an ExpressJS application. It uses JSON Web Tokens (JWT) for authentication and role-based access control (RBAC) for authorization.

## Features

User registration
User login
JSON Web Token (JWT) based authentication
Role-based access control (RBAC) for authorization
Protected routes that require authentication

## Prerequisites

Before running this project, ensure you have the following installed:
Node.js (v14 or later)
MongoDB (or a MongoDB Atlas cluster)

## Installation

1. Clone the repository:

```git clone https://github.com/your-username/expressjs-auth-project.git```

2. Navigate to the project directory:

```cd expressjs-auth-project```

3. Install the dependencies:

```npm install```

## Configuration

1. Create a `.env` file in the root directory of the project.

2. Add the following environment variables to the `.env` file:

```URI=mongodb://localhost:27017/your-database-name```
```PORT=3000```
```SECRET_ACCESS_TOKEN=your-secret-access-token```

Replace `your-database-name` with the name of your MongoDB database, and `your-secret-access-token` with a secret string of your choice.

## Usage

1. Register a new user

Send a POST request to /v1/auth/register with the following JSON payload:

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}

2. Login

Send a POST request to /v1/auth/login with the following JSON payload:

{
  "email": "john.doe@example.com",
  "password": "password123"
}

Upon successful login, you will receive a JSON Web Token (JWT) in the response. This token should be included in the Authorization header for subsequent requests to protected routes.

## Access protected routes

To access protected routes, include the JWT in the Authorization header of your requests:

```Authorization: Bearer <your-jwt-token>```

## API Endpoints

```POST /v1/auth/register```: Register a new user
```POST /v1/auth/login```: Login and obtain a JWT
```GET /v1``` (protected): Test protected route

## Project Structure

```
├── v1
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   └── routes
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Technologies Used

Node.js
Express.js
JSON Web Tokens (JWT)
MongoDB (with Mongoose)
bcrypt (for password hashing)
express-validator (for input validation)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

```This projest is Test Project.```
```May be later I will use it as a template for my future projects.```