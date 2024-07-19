# Delivery App

A full-stack delivery application with a React frontend and a NestJS backend, containerized using Docker.

## Table of Contents

1. [Overview](#overview)
2. [Images](#images)
3. [Features](#features)
4. [Technologies](#technologies)
5. [Setup](#setup)
6. [Running the Application](#running-the-application)
7. [Docker](#docker)

## Overview

This is a delivery application built with React on the frontend and NestJS on the backend. It supports managing products, orders, and user authentication. Docker is used to containerize both the frontend and backend applications.

## Images

Here are some visual representations of the application:

-   **Database Diagram**:
    ![Database Diagram](https://github.com/oXide0/delivery-app/blob/main/diagram.png)

-   **Frontend Screenshot**:
    ![Frontend Screenshot](https://github.com/oXide0/delivery-app/blob/main/dark-main.png)

-   **User Flow**:
    ![User Flow](https://github.com/oXide0/delivery-app/blob/main/user-flow.png)

## Features

-   **Frontend**:

    -   Product catalog with search and filter options
    -   Shopping cart management
    -   User authentication and registration
    -   Order management

-   **Backend**:
    -   RESTful API with NestJS
    -   Authentication using JWT
    -   MongoDB for data storage
    -   Email verification and order management

## Technologies

-   **Frontend**: React, Material-UI
-   **Backend**: NestJS, TypeScript
-   **Database**: MongoDB
-   **Authentication**: JWT
-   **Email**: Nodemailer
-   **Containerization**: Docker, Docker Compose

## Setup

### Prerequisites

-   Docker and Docker Compose installed
-   Node.js (for local development)

### Backend Setup

1. Navigate to the backend directory:

```bash
    cd backend
```

2. Navigate to the backend directory:

```bash
   npm install
```

3. Create a .env file in the backend directory with the following environment variables:

```bash
    JWT_SECRET=your_jwt_secret
    PORT=8000
    DB_HOST=localhost
    DB_USER=postgres
    DB_NAME=delivery
    DB_PASS=your_db_password
    DB_PORT=5432
    CLIENT_URL=http://localhost:8080
    MONGO_URI=mongodb://your_mongo_uri
    EMAIL=your_email
    EMAIL_PASSWORD=your_email_password
```

### Frontend Setup

1. Navigate to the frontend directory:

```bash
   cd frontend
```

2. Install dependencies:

```bash
   npm install
```

3. Start the frontend development server:

```bash
   npm run dev
```

### Running the Application

## Using Docker

1. Build and run the Docker containers using Docker Compose:

```bash
    docker-compose up --build
```

2.  Access the application:

-   Frontend: http://localhost:8080
-   Backend: http://localhost:8000

## Without Docker

1. Navigate to the backend directory and run:

-   Navigate to the backend directory and run:

```bash
    npm run start:dev
```

2. Start Frontend:

-   Navigate to the frontend directory and run:

```bash
    npm start
```

## Docker

-   Dockerfile: Located in the frontend and backend directories.
-   docker-compose.yml: Located in the root directory. Defines services for the frontend, backend, and database.

## Docker Commands

-   Build Docker images:

```bash
    docker-compose build
```

-   Start Docker containers:

```bash
    docker-compose up
```

-   Stop Docker containers:

```bash
    docker-compose down
```
