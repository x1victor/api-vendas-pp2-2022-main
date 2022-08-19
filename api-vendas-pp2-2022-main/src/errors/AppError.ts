class AppError{
    public massage: string;
    public statusCode: number;

    // new AppError('produto já existe') - statusCode = 400
    // new AppError('produto ja existe', 404) - statusCode = 404
    constructor(message: string,statusCode = 400) {
        this.massage = message;
        this.statusCode = statusCode
    }    
}