import 'dotenv/config';
import * as bcrypt from 'bcrypt';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { PrismaClient } from '../src/generated/prisma/client.js';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const email = (process.env.SEED_ADMIN_EMAIL || 'admin@fja-conseils.fr')
    .trim()
    .toLowerCase();
  const plainPassword = process.env.SEED_ADMIN_PASSWORD;
  const nom = process.env.SEED_ADMIN_NOM || 'Administrateur FJA';
  const telephone = process.env.SEED_ADMIN_TELEPHONE || '0600000000';

  if (!plainPassword || plainPassword.length < 8) {
    throw new Error(
      'SEED_ADMIN_PASSWORD doit être défini dans .env (8 caractères minimum)',
    );
  }

  const passwordHash = await bcrypt.hash(plainPassword, 12);

  const admin = await prisma.admin.upsert({
    where: { email },
    update: {
      passwordHash,
      nom,
      telephone,
    },
    create: {
      email,
      passwordHash,
      nom,
      telephone,
    },
  });

  console.log(`Admin initialisé : ${admin.email} (id: ${admin.id})`);
}

main()
  .catch((e) => {
    console.error('Erreur seed :', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
