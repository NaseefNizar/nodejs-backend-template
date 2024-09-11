import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

const express = (app) => {
  // logs incoming requests with endpoint and response time
  app.use(morgan(":method :url :response-time"));
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));
  // parse application/json
  app.use(bodyParser.json());
  app.use(cors({
    origin: "*",
  }));
};
export default express;