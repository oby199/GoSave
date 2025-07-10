// Simple test script to verify basic functionality
const fs = require('fs');
const path = require('path');

console.log('🧪 Running Simple Tests for Savings Circle Demo\n');

// Test 1: Check if main files exist
console.log('1. Checking file structure...');
const requiredFiles = [
  'App.tsx',
  'package.json',
  'contracts/SavingsCircle.sol',
  'build/contracts/SavingsCircle.json',
  'screens/HomeScreen.tsx',
  'screens/CircleScreen.tsx'
];

let fileTestsPassed = 0;
requiredFiles.forEach(file => {
  if (fs.existsSync(path.join(__dirname, file))) {
    console.log(`   ✅ ${file} exists`);
    fileTestsPassed++;
  } else {
    console.log(`   ❌ ${file} missing`);
  }
});

// Test 2: Check package.json structure
console.log('\n2. Checking package.json...');
try {
  const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
  
  if (packageJson.scripts && packageJson.scripts.test) {
    console.log('   ✅ Test script found');
    fileTestsPassed++;
  } else {
    console.log('   ❌ Test script missing');
  }
  
  if (packageJson.dependencies && packageJson.dependencies['@celo/contractkit']) {
    console.log('   ✅ Celo dependencies found');
    fileTestsPassed++;
  } else {
    console.log('   ❌ Celo dependencies missing');
  }
  
  if (packageJson.dependencies && packageJson.dependencies['react-native']) {
    console.log('   ✅ React Native found');
    fileTestsPassed++;
  } else {
    console.log('   ❌ React Native missing');
  }
} catch (error) {
  console.log('   ❌ Error reading package.json:', error.message);
}

// Test 3: Check contract compilation
console.log('\n3. Checking smart contracts...');
try {
  const savingsCircleContract = JSON.parse(fs.readFileSync(path.join(__dirname, 'build/contracts/SavingsCircle.json'), 'utf8'));
  
  if (savingsCircleContract.abi && savingsCircleContract.abi.length > 0) {
    console.log('   ✅ SavingsCircle contract ABI found');
    fileTestsPassed++;
  } else {
    console.log('   ❌ SavingsCircle contract ABI missing');
  }
  
  if (savingsCircleContract.bytecode && savingsCircleContract.bytecode !== '0x') {
    console.log('   ✅ SavingsCircle contract bytecode found');
    fileTestsPassed++;
  } else {
    console.log('   ❌ SavingsCircle contract bytecode missing');
  }
} catch (error) {
  console.log('   ❌ Error reading contract:', error.message);
}

// Test 4: Check React components
console.log('\n4. Checking React components...');
const componentFiles = [
  'screens/HomeScreen.tsx',
  'screens/CircleScreen.tsx',
  'screens/NewCircleScreen.tsx',
  'screens/AddMemberScreen.tsx',
  'components/StyledText.js'
];

componentFiles.forEach(file => {
  if (fs.existsSync(path.join(__dirname, file))) {
    console.log(`   ✅ ${file} exists`);
    fileTestsPassed++;
  } else {
    console.log(`   ❌ ${file} missing`);
  }
});

// Test 5: Check navigation setup
console.log('\n5. Checking navigation...');
const navigationFiles = [
  'navigation/AppNavigator.tsx',
  'navigation/MainTabNavigator.tsx'
];

navigationFiles.forEach(file => {
  if (fs.existsSync(path.join(__dirname, file))) {
    console.log(`   ✅ ${file} exists`);
    fileTestsPassed++;
  } else {
    console.log(`   ❌ ${file} missing`);
  }
});

// Summary
const totalTests = requiredFiles.length + 4 + componentFiles.length + navigationFiles.length;
console.log(`\n📊 Test Summary:`);
console.log(`   Passed: ${fileTestsPassed}/${totalTests}`);
console.log(`   Success Rate: ${Math.round((fileTestsPassed / totalTests) * 100)}%`);

if (fileTestsPassed === totalTests) {
  console.log('\n🎉 All basic tests passed! The project structure looks good.');
} else {
  console.log('\n⚠️  Some tests failed. Check the missing files above.');
}

console.log('\n💡 To run the full test suite, you would need to:');
console.log('   1. Install dependencies: npm install --legacy-peer-deps');
console.log('   2. Run React tests: npm test');
console.log('   3. Run contract tests: npx truffle test'); 