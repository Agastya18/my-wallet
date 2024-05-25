import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import{ prisma} from "../db/prisma";
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';

export interface AuthRequest extends Request {
  user?: { 
    id: number;
    name: string;
    email: string;
   };
}
export const verifyUser = async(req: AuthRequest, res: Response, next: NextFunction) => {
    try {
    const token = req.cookies.authToken 
        //console.log(token)
         if (!token) {
             return res.status(401).json({ message: "No token, authorization denied" });
         }
         const decoded = jwt.verify(token, jwtSecret) as { id: number };

            const user = await prisma.user.findUnique({
                where: {
                    id: decoded.id
                },
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            });

            if (!user) {
                return res.status(401).json({ message: "Token is not valid" });
            }

            req.user = {
                id: user.id,
                name: user.name || '',
                email: user.email || ''
            };
            next();
           
            

        
        
        
    } catch (error) {
        console.log(error);
    }
}