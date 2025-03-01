export const httpConstants = {
    METHOD_TYPE: {
        POST: "POST",
        GET: "GET",
        PUT: "PUT",
        DELETE: "DELETE",
    },
    HEADER_TYPE: {
        URL_ENCODED: "application/x-www-form-urlencoded",
        APPLICATION_JSON: "application/json",
    },
    HEADER_KEYS: {
        DEVICE_TYPE: "device-type",
        DEVICE_ID: "device-id",
        SESSION_TOKEN: "session-token",
        PUSH_TOKEN: "push-token",
    },
    DEVICE_TYPE: {
        ANDROID: "android",
        IOS: "ios",
        WEB: "web",
    },
    CONTENT_TYPE: {
        URL_ENCODE: "application/x-www-form-urlencoded",
    },
    WEBSERVICE_PATH: {
        SYNC_ATTENDANCE: "sync-attendance/",
    },

    RESPONSE_STATUS: {
        SUCCESS: true,
        FAILURE: false,
    },
    RESPONSE_CODES: {
        UNAUTHORIZED: 401,
        SERVER_ERROR: 500,
        NOT_FOUND: 404,
        OK: 200,
        NO_CONTENT_FOUND: 204,
        BAD_REQUEST: 400,
        FORBIDDEN: 403,
        GONE: 410,
        UNSUPPORTED_MEDIA_TYPE: 415,
        TOO_MANY_REQUEST: 429,
        INVALID_PARAMS: 400,
    },
    LOG_LEVEL_TYPE: {
        INFO: "info",
        ERROR: "error",
        WARN: "warn",
        VERBOSE: "verbose",
        DEBUG: "debug",
        SILLY: "silly",
        FUNCTIONAL: "functional",
        HTTP_REQUEST: "http request",
    },
};

export const stringConstants = {
    SERVICE_STATUS_HTML:
        '<body style="font-family: Helvetica !important; background-color: black; max-height: 100vh !important; font-size: 24px !important;">' +
        '<div style="display: flex; flex:1; height: 100% ; justify-content: center; align-items: center; color: #605DFF !important;">' +
        "⚡ Node.js micro-service template 🔋 is working fine</div></body>",
};


export const genericConstants = {
    DEVICE_TYPE: {},
};

export const apiSuccessMessage = {
    // Standard message
    FETCH_SUCCESS: "Information fetched successfully",
    ADD_SUCCESS: "Information added successfully",
    UPDATED_RECORD: "Record updated successfully",
    DATA_DOES_NOT_EXIST: "Data is not available in DB",
};

export const apiEndpoints = {
    USER_TOKEN: "/api/v1/login-token", // Route reference
};

export const apiFailureMessage = {
    INVALID_PARAMS: "Invalid Parameters",
    INVALID_REQUEST: "Invalid Request",
    INVALID_SESSION_TOKEN: "Invalid session token",
    INTERNAL_SERVER_ERROR: "Internal server Error",
    BAD_REQUEST: "Bad Request!",
};

export const fileStatus = {
    PENDING: "PENDING",
    REJECTED: "REJECTED",
    IN_PROCESS: "IN_PROCESS",
    COMPLETED: "COMPLETED",
};

export const apiResponseLimit = {
    limit: 20,
    skip: 0,
};

export const jwtConstants = {
    MESSAGE: "Authentication successful",
    MS_ALG_TYPE: "HS512",
};