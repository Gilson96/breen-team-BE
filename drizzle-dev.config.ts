import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

const pathToCorrectEnvFile = `./db/.env.development`;
import dotenv from 'dotenv';

dotenv.config({
  path: pathToCorrectEnvFile
});

export default defineConfig({
  out: './drizzle',
  schema: './db/data/schema',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL!
  },
  verbose: true
});
