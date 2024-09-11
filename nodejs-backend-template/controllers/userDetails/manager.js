import Utils from "../../utils/index.js";
import { httpConstants } from "../../common/constants.js";

export default class Manager {

    // Reference for methods
    async saveUserDetails(request) {
        try {
            // Code to get data from db
            return {}
        } catch (err) {
            throw Utils.error({}, err.message, httpConstants.RESPONSE_CODES.SERVER_ERROR);
        }
    }
}