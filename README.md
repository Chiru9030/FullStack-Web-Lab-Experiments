# Full-Stack Web Development & Testing Lab Experiments 💻🔬

A curated laboratory repository documenting Full-Stack Web Development (FSD) and Full-Stack Testing (FST) coursework and practical implementations at **Woxsen University**.

---

## 📚 Laboratory Syllabus & Modules

| Experiment | Title | Core Technologies | Description |
|---|---|---|---|
| **Experiment 01** | [Express Routing & EJS Views](./Experiment-01_Express_Routing_and_EJS_Views) | Node.js, Express.js, EJS | Modular route structuring, RESTful route handlers (`/users`, `/blockposts`), static file serving, and dynamic server-side template rendering with EJS. |
| **Experiment 02** | [MongoDB & Mongoose ODM CRUD](./Experiment-02_MongoDB_Mongoose_CRUD) | MongoDB, Mongoose, Node.js | Schema definition, validation rules, relational references, query chaining (`.where()`, `.limit()`, `.select()`), and full lifecycle CRUD operations. |
| **Experiment 07–08** | [MERN Stack React + Node Integration](./Experiment-07-08_MERN_React_Node_Integration) | React 19, TypeScript, Vite, Express | Client-side Single Page Application (SPA) integration with Node/Express REST endpoints, multi-page routing (Home, About, Contact), and state synchronisation. |

---

## 🚀 Running the Experiments

### Experiment 01 — Express Routing & EJS
```bash
cd Experiment-01_Express_Routing_and_EJS_Views
npm install
node server.js
```
Open `http://localhost:3000` to view rendered EJS views and test routes.

---

### Experiment 02 — MongoDB CRUD Operations
```bash
cd Experiment-02_MongoDB_Mongoose_CRUD
npm install
node script.js
```
*Note: Ensure a local MongoDB instance is active on `mongodb://localhost:27017`.*

---

### Experiment 07–08 — MERN Integration
```bash
cd Experiment-07-08_MERN_React_Node_Integration

# 1. Start Backend Server (port 5000)
cd backend
npm install
node server.js

# 2. Start Frontend Development Server (in separate terminal)
cd ../frontend
npm install
npm run dev
```

---

## 📄 License
Academic coursework repository under the [MIT License](LICENSE).
