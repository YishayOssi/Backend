import jwt from 'jsonwebtoken';
import { OPERATORS } from './data.js';
const SECRET = "1234";


export function checkUserAndCreateToken(username, password){
    const user = OPERATORS.find(u => u.username === username && u.password === password)
    if(!user) return null;

    const token = jwt.sign({ id: user.id, name: user.name}, SECRET)
    return { token: token, operator: {id: user.id, name: user.name, role: user.role}}
}



export function checkToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) return res.status(401).send("Token not found!");
        
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) return res.status(401).send("Token not working!");
            
        req.user = decoded;
        next();
    });
}



