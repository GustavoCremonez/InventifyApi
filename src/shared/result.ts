export class Result<T> {
    code: number;

    data: T;

    message: string;

    constructor(code: number, data: T, message){
        this.code = code;
        this.data = data;
        this.message = message;
    }

    public static sucess<T>(dataInfo: T): Result<T> {
        return new Result<T>(200, dataInfo, null);
    }

    public static failure<T>(message: string): Result<T> {
        return new Result<T>(500, null, message);
    }
}