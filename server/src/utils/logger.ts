import winston from "winston";

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/app.log" }),
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.prettyPrint()
  ),
});

export default logger;

export const errorLogger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/error.log" }),
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.prettyPrint()
  ),
});