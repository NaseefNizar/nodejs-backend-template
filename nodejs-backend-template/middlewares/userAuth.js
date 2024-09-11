import "dotenv/config";
import jwksRsa from "jwks-rsa";
import Utils from "../utils";
import { apiFailureMessage } from "../common/constants";
import logger from "../services/logger";

// JWKS (JSON Web Key Set) endpoint to authenticate and verify JWTs (JSON Web Tokens) securely.
var client = new jwksRsa.JwksClient({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "",
});

const jwtCheck = async (req, res, next) => {
    try {
        // token validation code here
        next();
    } catch (err) {
        logger.error(err);
        return Utils.handleError(
            { message: apiFailureMessage.TOKEN_EXPIRED, code: 403 },
            req,
            res
        );
    }
};

export default jwtCheck;
