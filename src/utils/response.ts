export class ApiResponse {
    static createSuccess<TPayload extends Record<string, unknown>>(message: string, payload: TPayload): Response<TPayload> {
        return {
            isSuccess: true,
            message,
            payload,
        }
    }
    static createError(message: string, errorCode: string | number): Response<Record<string, unknown>> {
        return {
            isSuccess: false,
            message,
            payload: {},
            errorCode
        }
    }
}

export type Response<TPayload extends Record<string, unknown>> = {
    isSuccess: boolean;
    message: string | [];
    payload?: TPayload;
    errorCode?: string | number;
}