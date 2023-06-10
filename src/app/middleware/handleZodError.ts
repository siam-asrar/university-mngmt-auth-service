import { ZodError, ZodIssue } from "zod";
import { IGenericErrorMessage, IGenericErrorResponse } from "../interfaces/error";


const handleZodError = (err: ZodError): IGenericErrorResponse => {
    const errors: IGenericErrorMessage[] = err.issues.map((i: ZodIssue) => {
        return {
            path: i.path as unknown as string,
            message: i.message,
        }
    })

    const statusCode = 400;

    return {
        statusCode: statusCode,
        message: 'Validation Error',
        errMessage: errors
    }
}

export default handleZodError