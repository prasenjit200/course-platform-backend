# Course Purchase Backend API

This is a backend project for a course management platform where users can register, log in, purchase courses, and view available courses. The API is built using Node.js, Express, MongoDB, Zod for validation, and JWT for authentication and authorization.

## Features

- **User Registration**: New users can register with a username and password.
- **Login and JWT Authentication**: Users log in with their credentials, and a JWT token is generated for session management and authorization.
- **View Courses**: Logged-in users can view all available courses.
- **Purchase Courses**: Authenticated users can purchase any course.
- **Validation**: User inputs (username, password) are validated using Zod.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express**: Web framework for building APIs.
- **MongoDB**: Database for storing users and courses.
- **Zod**: Schema validation for user input.
- **JWT (JSON Web Token)**: Used for secure authentication and authorization.

## API Endpoints

### Authentication

- **POST /register**: Registers a new user with `username` and `password`.
- **POST /login**: Authenticates a user and returns a JWT token.

### Courses

- **GET /courses**: Fetches all available courses (requires a valid JWT token).

