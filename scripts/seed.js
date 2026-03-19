import fs from 'node:fs/promises';
import path from 'node:path';

const seedPayload = {
  admin: {
    email: process.env.ADMIN_EMAIL || 'admin@example.com',
    password: process.env.ADMIN_PASSWORD || 'Admin12345!',
    role: 'admin',
  },
  products: [
    { id: 1, name: 'Sample Product', price: 11.99, stock: 100 },
    { id: 2, name: 'Another Product', price: 8.49, stock: 60 }
  ],
  orders: []
};

async function seed() {
  const outputPath = path.resolve('src/data/seeded-data.json');
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, JSON.stringify(seedPayload, null, 2), 'utf8');
  console.log(`Seed file written to ${outputPath}`);
  console.log('admin login', seedPayload.admin.email, seedPayload.admin.password);
}

seed().then(() => {
  console.log('Seeding complete.');
  process.exit(0);
}).catch((err) => {
  console.error('Seeding failed:', err);
  process.exit(1);
});
