import e from "cors";
import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    try {
        const token = req.heaaders.authoriation?.split("")[1];
        if (!token) {
            return 
            res.status(401)
            .json({ message: "unauthorized"});
    
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded; // must contain id for decoding
        }
            next();
             
    }catch(error) {
        returnres.status(401)
        .json({ message: "Invalid token"});
    }
};
export default authMiddleware