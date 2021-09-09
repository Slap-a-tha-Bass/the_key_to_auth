import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import { jwtConfig } from '../../config/users';
import db_users from '../../db/queries/users';
import { compareHash } from '../../utils/passwords';

const router = express.Router();

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    try {
        const [userFound] = await db_users.find('email', email);
        if (userFound && compareHash(password, userFound.password)) {
            const token = jwt.sign({ userid: userFound.id, email: userFound.email, role: 1 },
                jwtConfig.secret,
                { expiresIn: '30d' }
            );
            res.json(token);
            return;
        }
        return res.status(401).json({ message: "Invalid credentials" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'error, my code sucks' });
    }
})

export default router;