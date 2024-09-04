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

//TODO: update commit > "Add product management endpoints"
// Endpoint untuk menambah produk
app.post('/products', (req: Request, res: Response) => {
  const { name, price } = req.body;
  // Logika untuk menambah produk
  res.send('Product added');
});

// Endpoint untuk mendapatkan semua produk
app.get('/products', (req: Request, res: Response) => {
  // Logika untuk mendapatkan semua produk
  res.send('List of products');
});
