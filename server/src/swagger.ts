// swagger.ts
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
const AppName = "InfernoAPI";
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: AppName,
      version: "1.0.0",
      description: `🔥 Your sins, our endpoints. Welcome to hell’s gateway.`,
    },
    servers: [
      {
        url: "http://localhost:5000", // Change as needed
      },
    ],
  },
  apis: ["./src/routes/*.ts", "./src/controllers/*.ts"], // where your routes/controllers live
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
