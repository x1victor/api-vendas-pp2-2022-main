
class AppError {
    public message: string;
    public statusCode: number;

    // new AppError('produto ja existe') - statusCode = 400
    // new AppError('produto ja existe', 404) - statusCode = 404
    constructor(message: string, statusCode = 400){
        this.message = message;
        this.statusCode = statusCode
    }
}

export default AppError