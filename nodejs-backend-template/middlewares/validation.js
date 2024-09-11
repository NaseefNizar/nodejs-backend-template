import * as yup from "yup";

/**
 * Validates user login credentials.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 * @return {Promise<void>} Promise that resolves once validation is complete
 */
const validationManger = {
    validateUserLogin: async (req, res, next) => {
        const schema = yup.object().shape({
            email: yup.string().email(),
            password: yup.string().min(8).required(),
        });
        await validate(schema, req.body, res, next);
    }
}