const fs = require('fs');
const path = require('path');

const imagePool = [
  '1512621776951-a57141f2eefd', // Healthy food bowl
  '1490645935967-10de6ba17061', // Citrus fruits
  '1494390248081-4e521a5940db', // Avocado toast
  '1505253716362-afaea1d3d1af', // Meat/protein
  '1478144592103-25e218a04891', // Green juice
  '1505576391880-b3f9d713dc4f', // Gym/weights
  '1517836357463-d25dfeac3438', // Yoga
  '1544367567-0f2fcb009e0b', // Sleep/bed
  '1506126613408-eca0710606f0', // Meditation/Mental health
  '1511690743698-d9e85f2fbf38', // Vitamins/Supplements
  '1498837167922-ddd27525d352', // Water/Hydration
  '1477332552846-ac036b00a132', // Berries
  '1528498033373-3f04ccd6e246', // Salad
  '1484369778216-9df9c6e3d231', // Nuts and seeds
  '1466637574689-1055d0640d24', // Running
  '1517404215738-152640280eb4', // Stretching
  '1434494878577-86c23bcb06b9', // Heart/Cardio
  '1476480862126-209bcaa8ea1d', // Tea/Relaxation
  '1502759683299-cd369a408bfa', // Cooking
  '1490818387583-1b0ba689a7f6', // Gut health/Kombucha
  '1445384763658-0400939829cd', // Fasting/Clock
  '1501504905252-473c47e087f8', // Coffee
  '1515023115689-589c33041d3c', // Weight lifting
  '1522898467257-ee3283f5e55e', // Journaling/Mental
  '1512436991641-b410eb820efb', // Massage/Recovery
  '1515378791033-b40a33502b4d', // Oatmeal
  '1495214787134-8c011e40a027', // Smoothie
  '1526401485004-46910ec67040', // Soup/Bone broth
  '1432433290474-069a2f7c000c', // Seafood/Omega3
  '1470124182015-1e0527376c7c', // Eggs/Breakfast
  '1546069901-ba959d3178ce', // Nature/hiking
  '1571019614242-c5c5dee9f50b', // Fitness tracking/watch
  '1483721310020-033529b31660', // Doctor/Stethoscope
  '1494597564530-871f2ba5d114', // Tape measure/Waist
  '1554284126-aa254e4df9b4', // Stretching/Park
  '1493690283958-32ed412701b2', // Sun/Outdoor
];

const filesToUpdate = process.argv.slice(2);

filesToUpdate.forEach(file => {
  if (!fs.existsSync(file)) {
    console.log(`File not found: ${file}`);
    return;
  }
  
  let content = fs.readFileSync(file, 'utf8');
  let matchCount = 0;
  
  // Replace each thumbnail with a new unique one from the pool
  const regex = /thumbnail:\s*['"]https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+\?.*?['"]/g;
  
  content = content.replace(regex, (match) => {
    // Pick an image sequentially to ensure variety
    const imageId = imagePool[matchCount % imagePool.length];
    matchCount++;
    return `thumbnail: 'https://images.unsplash.com/photo-${imageId}?auto=format&fit=crop&q=80&w=800'`;
  });
  
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated ${matchCount} thumbnails in ${path.basename(file)}`);
});
