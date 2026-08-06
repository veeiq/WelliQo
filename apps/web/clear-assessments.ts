import 'dotenv/config';
import { prisma } from './src/lib/prisma';

async function main() {
  const count = await prisma.assessmentResult.count();
  console.log('AssessmentResult count:', count);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Wait for the queries to finish and disconnect
  });
