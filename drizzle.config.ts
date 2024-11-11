import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

console.log(process.env.DATABASE_URL);
export default defineConfig({
  schema: './src/drizzle/schema',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});