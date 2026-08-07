require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });
const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const email = process.argv[2];

  if (!email) {
    console.error("Please provide an email address.");
    console.error("Usage: node make-admin.js <email>");
    process.exit(1);
  }

  try {
    const user = await prisma.user.update({
      where: { email },
      data: { role: 'SUPER_ADMIN' }
    });
    console.log(`✅ Successfully upgraded ${user.email} to SUPER_ADMIN.`);
  } catch (error) {
    if (error.code === 'P2025') {
      console.error(`❌ User with email ${email} not found in the database.`);
    } else {
      console.error("❌ Error updating user:", error);
    }
  } finally {
    await prisma.$disconnect();
  }
}

main();
