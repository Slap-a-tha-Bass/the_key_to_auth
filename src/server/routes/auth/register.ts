import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import { jwtConfig } from '../../config/users';
import db_users from '../../db/queries/users';
import { generateHash } from '../../utils/passwords';

const router = express.Router();

router.post('/', async (req, res) => {
    const newUser = req.body;
    try {
        newUser.password = generateHash(newUser.password);
        const result = await db_users.insert(newUser);
        
        const token = jwt.sign(
            { userid: result.insertId, email: newUser.email, role: 1 },
            jwtConfig.secret,
            { expiresIn: jwtConfig.expires }
        );
      
        res.json(token);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'error, my code sucks' });
    }
})

export default router;