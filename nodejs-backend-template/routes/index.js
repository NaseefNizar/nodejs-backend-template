import { stringConstants } from "../common/constants.js";
import logger from "../services/logger.js";

export const routes = (app) => {
    app.get("/", (req, res) => {
        logger.debug("This is the home '/' route.");
        res.send(stringConstants.SERVICE_STATUS_HTML)
    });

    // Use this reference for API requests
    // app.post(
    //     apiEndpoints.USER_DETAILS,
    //     [jwtCheck, decryptData, validationManger.validateUserDetails],
    //     new userDetails().saveUserDetails
    // );

}