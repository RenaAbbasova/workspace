npm install concurrently --save-dev
npm run install-all
npm start
npm run dev

1. `npm start`: Start both client (in development mode) and server in production mode
2. `npm run dev`: Start both client and server in development mode
3. `npm run server`: Start only the server in production mode
4. `npm run server:dev`: Start only the server in development mode
5. `npm run client`: Start only the client in development mode
6. `npm run install-all`: Install all dependencies for root, client, and server
7. `npm run start-services`: Start Docker services (run from server directory)
8. `npm run stop-services`: Stop Docker services (run from server directory)
9. `npm run build`: Build the client application for production

To use these scripts effectively:

1. Ensure you're in the root directory of your project when running these commands.
2. Run `npm run install-all` first to install all dependencies.
3. Use `npm run dev` during development to start both client and server with hot-reloading.
4. Use `npm start` to run the application in a production-like environment.
5. Use `npm run build` to create a production build of your client application.
