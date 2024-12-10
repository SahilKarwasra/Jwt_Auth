
# JWT Authentication with Google OAuth Integration

A Node.js application for user authentication using JSON Web Tokens (JWT) and Google OAuth 2.0, with user data stored in a PostgreSQL database. Designed to integrate seamlessly with Android apps and Postman for testing.


## Features

- User registration and login using JWT.
- Google OAuth 2.0 for social authentication.
- Secure password hashing with bcrypt.
- PostgreSQL database for storing user data.
- Well-structured codebase with Passport.js for authentication.
- Environment variables for secure configuration.


## Technologies Used

**Node.js:** Backend framework

**Express.js:** For handling API routes

**Passport.js:** For authentication strategies

**JWT (jsonwebtoken):** For secure user authentication

**PostgreSQL:** For user data storage

**bcrypt.js:** For hashing passwords

**dotenv:** For environment variable management



## .env

PORT=5000

DB_NAME= your db name

DB_USER= your db user

DB_PASSWORD= your password

DB_HOST=localhost

DB_DIALECT=mysql

JWT_SECRET= your jwt secret

JWT_EXPIRES_IN=1d

GOOGLE_CLIENT_ID= set your google client id

GOOGLE_CLIENT_SECRET= set your google client secret

GOOGLE_CALLBACK_URL= set your google callback url