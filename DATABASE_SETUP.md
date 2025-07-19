# Database Setup Guide

This project uses Prisma with PostgreSQL for the database.

## Database Configuration

- **Database Name**: `reaction-game`
- **Table**: `users`
- **Fields**: `name`, `gender`, `score`, `image`, `location`

## Setup Instructions

### 1. Install PostgreSQL

Make sure you have PostgreSQL installed and running on your system.

### 2. Create the Database

```sql
CREATE DATABASE "reaction-game";
```

### 3. Update Environment Variables

Edit the `.env` file and update the `DATABASE_URL` with your PostgreSQL credentials:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/reaction-game"
```

Replace `username` and `password` with your actual PostgreSQL credentials.

### 4. Generate Prisma Client

```bash
pnpm db:generate
```

### 5. Push Schema to Database

```bash
pnpm db:push
```

This will create the `users` table with all the required fields.

## Available Scripts

- `pnpm db:generate` - Generate Prisma client
- `pnpm db:push` - Push schema changes to database
- `pnpm db:migrate` - Create and apply migrations
- `pnpm db:studio` - Open Prisma Studio to view/edit data

## API Endpoints

- `GET /api/users` - Get all users (ordered by score descending)
- `POST /api/users` - Create a new user

### Example POST request:

```json
{
  "name": "John Doe",
  "gender": "male",
  "score": 100,
  "image": "https://example.com/image.jpg",
  "location": "New York"
}
```

## Database Schema

The `users` table contains the following fields:

- `id` (String, Primary Key) - Auto-generated unique identifier
- `name` (String) - User's name
- `gender` (String) - User's gender
- `score` (Int) - User's score (defaults to 0)
- `image` (String, Optional) - URL to user's image
- `location` (String, Optional) - User's location
- `createdAt` (DateTime) - When the record was created
- `updatedAt` (DateTime) - When the record was last updated
