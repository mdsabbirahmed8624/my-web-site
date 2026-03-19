import express from 'express';
import dotenv from 'dotenv';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const seedFilePath = path.join(__dirname, 'data', 'seeded-data.json');

let seededData = {
  products: [
    { id: 1, name: 'Sample Product', price: 11.99, stock: 100 },
    { id: 2, name: 'Another Product', price: 8.49, stock: 60 }
  ],
  orders: [],
  admin: {
    email: 'admin@example.com',
    role: 'admin'
  }
};

async function loadSeededData() {
  try {
    const raw = await fs.readFile(seedFilePath, 'utf8');
    seededData = JSON.parse(raw);
    console.log('Loaded seeded data from', seedFilePath);
  } catch {
    console.log('seeded-data.json not found; using default seed payload');
  }
}

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/', (req, res) => {
  res.send('OrbitCart backend is running.');
});

app.get('/api/products', (req, res) => {
  res.json({ products: seededData.products });
});

app.post('/api/orders', (req, res) => {
  const order = {
    id: seededData.orders.length + 1,
    ...req.body,
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  seededData.orders.push(order);
  res.status(201).json(order);
});

app.get('/api/admin', (req, res) => {
  res.json({ admin: seededData.admin });
});

loadSeededData().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to load seed data', err);
  process.exit(1);
});
