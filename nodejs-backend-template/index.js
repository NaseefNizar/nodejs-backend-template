import express from "express";
import Utils from "./utils/index.js";
import { routes } from "./routes/index.js";
import { Config } from "./config/index.js";
import { httpConstants } from "./common/constants.js";
import expressConfig from './config/express.js'; // Assuming you have an express configuration file

const app = express();
expressConfig(app); // Initialize Express app

(async () => {
    class Server {
        static listen() {
            try {
                Promise.all([]) // Add your DB connection here and add to promise array if needed.
                    .then(() => {
                        app.listen(Config.PORT || "3000");
                        Utils.mvateLog(
                            "listen",
                            `Server Started On PORT ${Config.PORT || "3000"}`,
                            {},
                            "Markovate",
                            httpConstants.LOG_LEVEL_TYPE.INFO
                        );
                        routes(app);
                    })
                    .catch((error) =>
                        Utils.mvateLog(
                            "listen",
                            "failed to connect",
                            { err: error },
                            "Markovate",
                            httpConstants.LOG_LEVEL_TYPE.ERROR
                        )
                    );
            } catch (error) {
                Utils.mvateLog(
                    "listen",
                    "failed to connect",
                    { err: error },
                    "Markovate",
                    httpConstants.LOG_LEVEL_TYPE.ERROR
                )
            }

        }
    }
    Server.listen();
})()
