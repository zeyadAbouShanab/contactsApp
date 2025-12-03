# Contacts App

A contacts management application with a **Spring Boot backend** and a **React frontend**.

## Project Structure

- `backend/` – Spring Boot REST API (runs on port 8080)
- `frontend/` – React application (runs on default React port 5173)

## Prerequisites

- Java 17+ (for Spring Boot)
- Gradle (for backend)
- Node.js 18+ and npm/yarn (for frontend)

## Running the Project

1. Start the backend first using IntelliJ or your preferred IDE. It will be available at **http://localhost:8080**.

2. Once the backend is running, start the frontend with `npm run dev`. The React app will open at **http://localhost:5173** and communicate with the backend API.

## Notes

- Make sure the backend is running before starting the frontend to avoid API errors.
- Adjust frontend API URL if running backend on a different host or port.  

## Notes for the reviewers
- I used Java instead of Kotlin because it's what I have been using in the past years, but I'm open to get back to Kotlin again
- H2 database was used because it's supported by springboot unlike sqlite which needs extra configuration
- Images are stored locally in a separate folder, I didn't use storage bucket due to lack of time and the need to set up a new account on firebase or s3