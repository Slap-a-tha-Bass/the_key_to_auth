import * as express from 'express';
import { ReqUser } from '../../../../types';
import { tokenCheck } from '../../middlewares/auth.mw';

const router = express.Router();

router.get('/', tokenCheck, (req: ReqUser, res) => {
    try {
        res.json({ message: `Enjoy your interweb time ${req.user.email}` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error, check it out yo."})
    }
});

export default router;

// const bearerToken = req.headers.authorization?.split(' ');
// const token = bearerToken && bearerToken[0] === 'Bearer' ? bearerToken[1] : null;
// if (!token || !bearerToken) {
//     res.status(401).json({ message: "Unauthorized." });
//     return;
// };

// const payload = <{ email: string }>jwt.verify(token, jwtConfig.secret);
// console.log(payload);