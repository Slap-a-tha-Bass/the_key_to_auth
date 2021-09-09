import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import { jwtConfig } from '../../config/users';

const router = express.Router();

router.get('/', (req, res) => {
    const bearerToken = req.headers.authorization?.split(' ');
    const token = bearerToken && bearerToken[0] === 'Bearer' ? bearerToken[1] : null;
    if (!token || !bearerToken) {
        res.status(401).json({ message: "Unauthorized." });
        return;
    };

    const payload = jwt.verify(token, jwtConfig.secret);
    console.log(payload);

    res.json({ message: "Users initiated!" });
})

export default router;