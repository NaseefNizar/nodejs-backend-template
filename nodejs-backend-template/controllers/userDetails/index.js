import Utils from "../../utils/index.js";
import {
    apiSuccessMessage,
    httpConstants,
} from "../../common/constants.js";
import BLManager from "./manager.js";

// Create a manager and response function for each module

export default class Index {
    async saveUserDetails(request, response) {
        const [error, comapanyRes] = await Utils.parseResponse(
            new BLManager().saveUserDetails(
                request
            )
        );

        // check error
        if (error) {
            return Utils.handleError(error, request, response);
        }
        // return final response
        return Utils.response(
            response,
            comapanyRes,
            apiSuccessMessage.ADD_SUCCESS, // success message
            httpConstants.RESPONSE_STATUS.SUCCESS,
            httpConstants.RESPONSE_CODES.OK
        );
    }
}