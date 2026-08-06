import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaAdapter } from '@auth/prisma-adapter';

async function test() {
  try {
    console.log('Testing prisma connection...');
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const adapter = new PrismaPg(pool);
    const prisma = new PrismaClient({ adapter });
    
    await prisma.$connect();
    console.log('Connected to Prisma.');
    
    console.log('Testing Prisma Adapter...');
    const authAdapter = PrismaAdapter(prisma);
    
    // Simulate what NextAuth does
    console.log('Creating a dummy user via adapter...');
    const user = await authAdapter.createUser({
      email: 'test_google_oauth@example.com',
      name: 'Test Google',
      image: 'http://example.com/image.png',
      emailVerified: new Date(),
    });
    console.log('User created:', user);
    
    console.log('Fetching user...');
    const fetchedUser = await authAdapter.getUserByEmail('test_google_oauth@example.com');
    console.log('Fetched user:', fetchedUser);
    
    // Cleanup
    await prisma.user.delete({ where: { email: 'test_google_oauth@example.com' } });
    console.log('Cleanup done.');
    
  } catch (e) {
    console.error('ERROR OCCURRED:', e);
  }
}

test();
