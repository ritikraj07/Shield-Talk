// app.ts
// ✅ Main app configuration – setup express, middleware, routes, swagger, etc.

import express from "express";
import path from "path";
import cors from "cors";
import morgan from "morgan";


import config from "./config";
import helmet from "helmet";
import userRoutes from "./routes/user.route"; // ✅ Keep imports organized: internal > custom > routes

import { swaggerUi, swaggerSpec } from "./swagger"; // Swagger docs
import authRoutes from "./routes/auth.route";
const app = express();

// ✅ Use lowercase and more descriptive variable names for constants
const version = config.VERSION || "v1";
console.log(`API Version: ${version}`);

// ✅ Middlewares
app.use(cors()); // Allow cross-origin requests
app.use(morgan("dev")); // Log HTTP requests
app.use(express.json()); // Parse JSON bodies
app.use(express.static(path.join(__dirname, "public"))); // Serve static files
// app.ts or server.ts

app.use(helmet());



app.use(`/${version}/auth`, authRoutes);

// ✅ Swagger Docs route — attach at correct path with versioning
app.use(
  `/${version}/api-docs`,
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    customCss: ".topbar { display: none }", // ✅ optional: hide Swagger topbar
    // customCssUrl: "/swagger-dark.css",
    // customJs: "/swagger-devil.js",
    // ❌ customCssUrl/customJs not working? Ensure files are actually served from /public and the paths are correct
    // ✅ Correct way to serve them is: put 'swagger-dark.css' and 'swagger-devil.js' in /public
    // ✅ Then use: customCssUrl: "/swagger-dark.css", customJs: "/swagger-devil.js"
    customSiteTitle: "InfernoAPI 🔥",
  })
);



// ✅ Routes
app.use(`/api/users`, userRoutes); // Always prefix APIs with version optionally

// ❌ You were importing 'version' from 'os' module earlier (unused) – removed
// ❌ Route like '/api/users' should ideally be '/v1/api/users' for versioning consistency

// ✅ 404 handler — always keep this at the end
app.use((_req, res) => {
  res.status(404).json({ message: "API route not found" });
});
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to InfernoAPI" });
})

export default app;

// ✅ Export app for testing