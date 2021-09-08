import * as express from 'express';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'error, my code sucks' });
    }
})

export default router;