import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";

export default function isAuthenticated(request: Request, response: Response, 
    next: NextFunction): void {
        // recupera o token informado
        const authHeaders = request.headers.authorization
        if (!authHeaders){
            throw new AppError("Token não informado", 400)
        }
        // front end informou token - verificaremos o token
        const [, token] = authHeaders.split(' ') // dividir baseado no caracter espaço
        try {
            const tokenVerified = verify(token, 'abababacaacacabaanadafagah')
            // vamos deixar ele consumir a API
            return next() // 
        } 
        catch {
            throw new AppError("Token inválido", 400)
        }

}