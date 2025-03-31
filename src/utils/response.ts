export class ApiResponse {
    static createSuccess(message: string, payload: object): Response {
        return {
            isSuccess: true,
            message,
            payload,
        }
    }
    static createError(message: string, errorCode: string | number): Response {
        return {
            isSuccess: true,
            message,
            payload: {},
            errorCode
        }
    }
}

export type Response = {
    isSuccess: boolean,
    message: string,
    payload?: object,
    errorCode?: string | number
}