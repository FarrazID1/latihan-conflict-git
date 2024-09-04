//TODO: update commit > "Add user authentication endpoints"
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

// Endpoint untuk register user
app.post('/register', (req: Request, res: Response) => {
  const { username, passwordX } = req.body;
  // Logika untuk register user
  // res.send('User registered');
  res.status(201).json({
    message: 'User registered',
    data: {
      username,
      passwordX,
    },
  });
});

// Endpoint untuk login user
app.post('/login', (req: Request, res: Response) => {
  const { username, passwordX } = req.body;
  // Logika untuk login user
  res.send('User logged in');
});
