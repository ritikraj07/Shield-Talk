// app.ts
import express from "express";
import path from "path";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import config from "./config";
import authRoutes from "./routes/auth.route";
import userRoutes from "./routes/user.route";
import { swaggerUi, swaggerSpec } from "./swagger";
import { verifyUser } from "./middlewares/auth.middleware";

const app = express();
const version = config.VERSION || "v1";

// ✅ Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors({ origin: "http://localhost:3000", credentials: false }));
app.use(morgan("dev"));
app.use(helmet());
app.use(`/${version}`, express.static(path.join(__dirname, "public")));

// ✅ Routes
app.use(`/${version}/api/auth`, authRoutes);
app.use(`/${version}/api/users`, verifyUser, userRoutes);

// ✅ Swagger Docs
app.use(
  `/${version}/api-docs`,
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    customCss: ".topbar { display: none }",
    customSiteTitle: "ShieldTalk API 🔥",
  })
);

// ✅ Root
app.get("/", (_req, res) => {
  res.status(200).json({ message: "Welcome to ShieldTalk API" });
});

// ✅ 404
app.use((_req, res) => {
  res.status(404).json({ message: "API route not found" });
});

export default app;
