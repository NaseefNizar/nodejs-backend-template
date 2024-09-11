 'use strict'
 import { apiFailureMessage, httpConstants } from '../common/constants.js'
 import logger from "../services/logger.js";
 
class Utils {
   static response (res, data, message, success, code) {
     const responseObj = {
       responseData: data,
       message: message,
       success: success,
       responseCode: code
     }
     logger.info({"Timestamp":new Date().toISOString(),"Response": {"response": responseObj}});
     res.format({
       json: () => {
         res.send(responseObj)
       }
     })
   }

   static normalResponse (res, message) {
    const responseObj = message;
    logger.info({"Timestamp":new Date().toISOString(),"Response": {"response": responseObj}});
    res.format({
      json: () => {
        res.send(responseObj)
      }
    })
  }
 
   static responseForValidation (res, errorArray, success, code = 400) {
     const responseObj = {
       message: 'Invalid Request',
       errors: errorArray,
       success: success,
       responseCode: code
     }
     res.format({
       json: () => {
         res.send(responseObj)
       }
     })
   }

      /**
    * Handles errors and sends a response if the 'res' parameter is present.
    *
    * @param {Error} err - The error object to be handled
    * @param {Object} req - The request object
    * @param {Object} res - The response object
    * @return {boolean} Returns false if 'res' is not present
    */
   static handleError (err, req, res) {
     if (!res) { return false }
     err = err || {}
     const msg = err.message ? err.message : apiFailureMessage.INTERNAL_SERVER_ERROR
     const code = err.code ? err.code : httpConstants.RESPONSE_CODES.SERVER_ERROR
     logger.error({"Timestamp":new Date().toISOString(),"msg": {"response": res}});
     this.response(res, {}, msg, httpConstants.RESPONSE_STATUS.FAILURE, code)
   }
 
      /**
    * Awaits a promise, resolves with [null, data] on success or [err] on error.
    *
    * @param {Promise} promise - The promise to parse
    * @return {Array} An array containing null and the data or an error
    */
   static async parseResponse (promise) {
     return promise.then(data => {
       return [null, data]
     }).catch(err => [err])
   }
 
    /**
    * To throw error
    * @param data
    * @param message
    * @param code
    * @returns {{code: number, data: *, message: *}}
    */
   static error (data, message, code = 500) {
     return {
       data: data,
       message: message,
       code: code
     }
   }
 
   static getFormattedDate () {
     const date = new Date()
     return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
   }
 
   static mvateLog (functionName, message, payload, developerAlias, logType = 'INFO') {
     console.log(`[ ${this.getFormattedDate()} ] ${logType}: ${functionName}: ${message}: ${JSON.stringify(payload)}: Developer : ${developerAlias}`)
   }
}

export default Utils