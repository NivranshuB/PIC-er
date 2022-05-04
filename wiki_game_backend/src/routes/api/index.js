import express from 'express';

const router = express.Router();

import game from './game';
router.use('/game', game);

export default router;