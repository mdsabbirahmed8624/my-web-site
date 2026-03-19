# OrbitCart Ecommerce Platform

Deployment-ready full-stack ecommerce starter built with Node.js, Express, MongoDB, and a responsive vanilla frontend. It includes a storefront, product detail pages, cart and checkout flow, JWT cookie auth, customer order history, and an admin dashboard for product and order management.

## Included Features

- Responsive storefront with search, category filters, price filters, and sorting
- Product detail page with add-to-cart flow
- Local cart with checkout form and sandbox order creation
- Secure register/login with bcrypt password hashing and JWT cookies
- Customer account page with order history and returning-customer metrics
- Admin dashboard with:
  - product create, edit, and delete
  - order status and payment status updates
  - customer lifetime value and order frequency visibility
- MongoDB models for Users, Products, and Orders
- Deployment helpers via `Dockerfile` and environment template

## Tech Stack

- Backend: Node.js, Express, Mongoose, JWT, bcryptjs
- Database: MongoDB
- Frontend: HTML, CSS, JavaScript
- Security: Helmet, rate limiting, input validation

## Project Structure

```text
.
|-- public/
|   |-- css/styles.css
|   |-- js/
|   |   |-- api.js
|   |   |-- app.js
|   |   |-- store.js
|   |   `-- pages/
|   `-- *.html
|-- src/
|   |-- config/
|   |-- controllers/
|   |-- data/
|   |-- middleware/
|   |-- models/
|   |-- routes/
|   `-- utils/
|-- .env.example
|-- Dockerfile
`-- package.json
```

## Local Setup

1. Copy `.env.example` to `.env`.
2. Update `MONGODB_URI` and `JWT_SECRET`.
3. Install dependencies.
4. Seed the sample catalog.
5. Start the development server.

### Windows PowerShell Commands

PowerShell script execution is restricted on this machine, so use `npm.cmd` instead of `npm`:

```powershell
Copy-Item .env.example .env
npm.cmd install
npm.cmd run seed
npm.cmd run dev
```

The app runs at [http://localhost:5000](http://localhost:5000).

## Default Development Admin

In development mode, if you keep the sample `.env` values, the app bootstraps this admin account automatically:

- Email: `admin@example.com`
- Password: `Admin12345!`

Change these values before deploying to production.

## Available Scripts

- `npm.cmd run dev` starts the server in watch mode
- `npm.cmd start` starts the production server
- `npm.cmd run seed` inserts sample products and creates the admin user if missing
- `npm.cmd run check` runs a basic syntax check on the server entry file
- `npm.cmd run smoke` runs an end-to-end smoke test against auth, products, orders, and admin CRUD
- `npm.cmd test` runs the same smoke suite

## Deployment Notes

- Set real production values for `MONGODB_URI`, `JWT_SECRET`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD`
- Build and run with Docker if you want a simple VPS or cloud deployment path
- The Express server serves both the API and the frontend, so one Node deployment is enough
- A `Procfile` is included for process-manager or PaaS environments that support it

## Pre-Launch Checklist

Before you make it live, do these steps in order:

1. Set a production `.env` with a strong `JWT_SECRET` and non-default admin credentials
2. Run `npm.cmd install`
3. Run `npm.cmd run smoke`
4. Start the app with `npm.cmd start`
5. Confirm `/api/health` returns `ok`
6. Verify login, cart, checkout, account, and admin flows in the browser
7. Point your domain or reverse proxy at the Node process

## Phase Mapping

This starter already covers the core roadmap items from your 5-phase plan:

- Phase 1: Frontend UI, product cards, responsive layout
- Phase 2: Express API, MongoDB schemas, auth, product CRUD, order saving
- Phase 3: Admin dashboard, customer tracking, search/filter system, sandbox order flow
- Phase 4: Helmet, validation, rate limiting, environment variables, structured error handling
- Phase 5: Deployment-ready packaging and clear extension points for payment gateways and supplier integrations

## Suggested Next Integrations

- SSLCommerz or bKash sandbox payment callbacks
- Image uploads with Cloudinary or S3
- Supplier sync jobs for AliExpress-style dropshipping feeds
- Inventory sync webhooks and low-stock alerts
- Email notifications for order confirmation and shipping updates
