export interface Result<T> {
    code: Number;

    data: T;

    message: String;
}