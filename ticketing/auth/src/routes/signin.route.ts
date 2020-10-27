import express from 'express';

const router = express.Router();

router.post(`/api/users/sign`, (req, res) => {
  res.send('Testing');
});

export { router as signinRouter };