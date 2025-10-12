# GenZ.Fit — MERN (MongoDB, Express, React, Node)

A modern, responsive 3D fitness web app designed for Gen Z. Includes sections for Gyms, Classes, Diet Plans, and Mental Fitness, with 3D visuals to enhance UX.

## Tech Stack
- Frontend: React (Vite), react-router, planned 3D via @react-three/fiber + @react-three/drei, animations via framer-motion
- Backend: Node.js + Express
- Database: MongoDB (Mongoose)

## Project Structure
```
.
├─ client/                 # React app (Vite-ready structure)
│  ├─ index.html
│  └─ src/
│     ├─ main.jsx
│     ├─ App.jsx
│     ├─ index.css
│     ├─ components/
│     │  ├─ Navbar.jsx
│     │  └─ Hero3D.jsx
│     └─ pages/
│        └─ Home.jsx
└─ server/                 # Express API
   └─ src/
      ├─ server.js
      ├─ app.js
      ├─ config/
      │  └─ db.js
      ├─ routes/
      │  ├─ index.js
      │  ├─ gyms.routes.js
      │  ├─ classes.routes.js
      │  ├─ dietplans.routes.js
      │  └─ mental.routes.js
      ├─ controllers/
      │  ├─ gym.controller.js
      │  ├─ class.controller.js
      │  ├─ dietplan.controller.js
      │  └─ mental.controller.js
      └─ models/
         ├─ Gym.js
         ├─ Class.js
         ├─ DietPlan.js
         └─ MentalResource.js
```

## Next steps (will run after your permission)
To initialize dependencies and dev servers:

Frontend (Vite + React + 3D libs):
```
npm create vite@latest client -- --template react
cd client
npm install
npm install react-router-dom @react-three/fiber @react-three/drei framer-motion
npm run dev
```

Backend (Express + Mongoose):
```
mkdir -p server
cd server
npm init -y
npm install express mongoose cors dotenv
npm install -D nodemon
# add script "dev": "nodemon src/server.js" to package.json
cp .env.example .env
npm run dev
```

Set the following in `server/.env`:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/genzfit
CORS_ORIGIN=http://localhost:5173
```

## Features to implement
- Gyms: listings, locations, facilities
- Classes: types, schedules, bookings
- Diet Plans: nutrition plans, meals
- Mental Fitness: meditation/wellness resources

Please tell me which feature you’d like built first, and I’ll flesh out the backend endpoints, DB schema, and responsive React UI with 3D elements for it.

