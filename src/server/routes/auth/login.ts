import * as express from 'express';
import { authenticate } from 'passport';
import * as jwt from 'jsonwebtoken';
import { jwtConfig } from '../../config/users';
import { ReqUser } from '../../../../types';

const router = express.Router();

router.post('/', authenticate('local'), async (req: ReqUser, res) => {
    try {
        const token = jwt.sign(
            { userid: req.user.id, email: req.user.email, role: 1 },
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