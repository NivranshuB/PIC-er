import express from 'express';

const router = express.Router();

import game from './game';
router.use('/game', game);

import leaderboard from './leaderboard';
router.use('/leaderboard', leaderboard);

export default router;