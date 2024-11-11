import { Pool } from 'pg';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { faker } from '@faker-js/faker';
import * as schema from './schema';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
  ssl: true,
});

const db = drizzle(pool, { schema });

function main() {
  Array(50)
    .fill('')
    .map(async () => {
      const user = await db
        .insert(schema.users)
        .values({
          email: faker.internet.email(),
          name: faker.person.firstName(),
          password: '',
        })
        .returning();

      return user[0].id;
    });
}

main();
