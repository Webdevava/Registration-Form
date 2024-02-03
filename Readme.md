# Registration Form

This repository contains a simple Registration Form application with a client and server. The client is built using React and Vite, while the server is built using Node.js and Express.

## Client

The client directory contains the React application built with Vite. The `src` directory includes the following pages:

- `Login.jsx`
- `Registr.jsx`
- `Homepage.jsx`

React Router DOM is utilized for navigation within the application.

### Getting Started with Client

1. Navigate to the `client` directory:

    ```bash
    cd client
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

4. Open your browser and visit `http://localhost:5173` to access the application.

## Server

The server directory contains the Node.js application with the following main file:

- `index.js`

### Getting Started with Server

1. Navigate to the `server` directory:

    ```bash
    cd server
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the server in development mode using nodemon:

    ```bash
    npm run dev
    ```

   Or run the server in production mode:

    ```bash
    npm start
    ```

### Server Dependencies

- `bcryptjs`: Password hashing
- `body-parser`: Parse incoming request bodies
- `cookie-parser`: Parse cookie headers
- `cors`: Enable CORS (Cross-Origin Resource Sharing)
- `dotenv`: Load environment variables from a file
- `express`: Web framework for Node.js
- `jsonwebtoken`: JSON Web Token (JWT) implementation
- `mongoose`: MongoDB object modeling tool
- `nodemon`: Monitor for changes and automatically restart the server


### Feel free to contribute
