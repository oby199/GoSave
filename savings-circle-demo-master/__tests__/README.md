# 💰 Savings Circle Demo

A **Rotating Savings and Credit Association (ROSCA)** built on the **Celo blockchain** with a modern React Native mobile app.

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=github)](https://your-username.github.io/savings-circle-demo/)
[![Celo](https://img.shields.io/badge/Celo-Blockchain-yellow?style=for-the-badge&logo=celo)](https://celo.org/)
[![React Native](https://img.shields.io/badge/React-Native-blue?style=for-the-badge&logo=react)](https://reactnative.dev/)

## 🌟 Features

- **Smart Contract Automation** - Automated savings circle management
- **Celo Blockchain Integration** - Built on Celo's mobile-first blockchain
- **Mobile-First Design** - React Native app with responsive web interface
- **Transparent Transactions** - All transactions visible on blockchain
- **Stablecoin Support** - Uses Celo Dollar (cUSD) for stable value
- **Multi-Platform** - Works on iOS, Android, and Web

## 🚀 Live Demo

**[Try the Live Demo →](https://your-username.github.io/savings-circle-demo/)**

The demo showcases:
- ✅ Create new savings circles
- ✅ Add members and set contributions
- ✅ Contribute funds to circles
- ✅ View balances and transactions
- ✅ Rotating withdrawal system

## 📱 How It Works

### 1. Create a Circle
- Set circle name and contribution amount
- Add member wallet addresses
- Deploy smart contract on Celo

### 2. Members Contribute
- Monthly contributions in cUSD
- Automated smart contract tracking
- Transparent balance updates

### 3. Rotating Payouts
- Members take turns receiving the pool
- Automated withdrawal when eligible
- Smart contract enforces rules

### 4. Complete Cycle
- Each member receives once per cycle
- Circle continues for multiple cycles
- All transactions on blockchain

## 🛠️ Technology Stack

### Blockchain
- **Celo** - Mobile-first blockchain
- **Solidity** - Smart contract language
- **Truffle** - Development framework
- **Web3.js** - Blockchain interaction

### Mobile App
- **React Native** - Cross-platform mobile
- **Expo** - Development platform
- **TypeScript** - Type safety
- **Redux** - State management

### Web Interface
- **HTML5/CSS3** - Modern responsive design
- **JavaScript** - Interactive features
- **GitHub Pages** - Hosting platform

## 📁 Project Structure

```
savings-circle-demo/
├── contracts/           # Smart contracts
│   ├── SavingsCircle.sol
│   ├── MockStableToken.sol
│   └── ...
├── screens/            # React Native screens
│   ├── HomeScreen.tsx
│   ├── CircleScreen.tsx
│   └── ...
├── components/         # Reusable components
├── build/             # Compiled contracts
├── index.html         # Web demo
├── demo.html          # Alternative demo
└── README.md          # This file
```

## 🔧 Smart Contract

The `SavingsCircle.sol` contract implements:

```solidity
// Core functions
function addCircle(string name, address[] members, address token, uint256 amount)
function contribute(bytes32 circleId, uint256 amount)
function withdraw(bytes32 circleId)
function withdrawable(bytes32 circleId) returns (bool)

// Query functions
function circleMembers(bytes32 circleId) returns (address[])
function circlesFor(address user) returns (bytes32[])
function circleInfo(bytes32 circleId) returns (string, address[], address, uint256, uint256, uint256)
function balancesForCircle(bytes32 circleId) returns (address[], uint256[])
```

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/savings-circle-demo.git
cd savings-circle-demo
```

### 2. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 3. Run Web Demo
```bash
# Open index.html in browser
open index.html

# Or serve locally
python3 -m http.server 8000
# Visit http://localhost:8000
```

### 4. Start React Native App
```bash
npx expo start
```

### 5. Deploy Smart Contracts
```bash
# Compile contracts
npx truffle compile

# Deploy to testnet
npx truffle migrate --network alfajores
```

## 📱 Mobile App Development

### Prerequisites
- Node.js 14+
- Expo CLI
- iOS Simulator or Android Emulator

### Development Commands
```bash
# Start development server
npx expo start

# Run on iOS
npx expo start --ios

# Run on Android
npx expo start --android

# Build for production
npx expo build:web
npx expo build:ios
npx expo build:android
```

## 🔗 Blockchain Integration

### Celo Network Configuration
```javascript
// Connect to Celo testnet
const kit = newKit('https://alfajores-forno.celo-testnet.org');

// Load contract
const savingsCircle = new kit.web3.eth.Contract(
  SavingsCircleABI,
  deployedAddress
);
```

### Contract Interaction
```javascript
// Create a new circle
await savingsCircle.methods.addCircle(
  circleName,
  members,
  tokenAddress,
  depositAmount
).send({ from: userAddress });

// Contribute to circle
await savingsCircle.methods.contribute(
  circleId,
  amount
).send({ from: userAddress });
```

## 🧪 Testing

### Smart Contract Tests
```bash
npx truffle test
```

### React Component Tests
```bash
npm test
```

### Manual Testing
- [x] Contract compilation
- [x] Function signatures
- [x] React Native screens
- [x] Web interface
- [x] Mobile responsiveness

## 📊 Test Results

- ✅ **Project Structure:** 18/18 tests passed
- ✅ **Smart Contract:** 22/22 tests passed  
- ✅ **React Components:** 5/5 components verified
- ✅ **Dependencies:** All verified
- ✅ **Build Artifacts:** Present and valid

## 🌐 Deployment

### GitHub Pages
The web demo is automatically deployed to GitHub Pages:
- **URL:** `https://your-username.github.io/savings-circle-demo/`
- **Branch:** `main`
- **Source:** `/docs` folder

### Smart Contract Deployment
```bash
# Testnet (Alfajores)
npx truffle migrate --network alfajores

# Mainnet (requires real CELO)
npx truffle migrate --network mainnet
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Celo Foundation** - For the mobile-first blockchain platform
- **React Native** - For the cross-platform mobile framework
- **Expo** - For the development platform
- **OpenZeppelin** - For secure smart contract libraries

## 📞 Support

- **Issues:** [GitHub Issues](https://github.com/your-username/savings-circle-demo/issues)
- **Documentation:** [Wiki](https://github.com/your-username/savings-circle-demo/wiki)
- **Discussions:** [GitHub Discussions](https://github.com/your-username/savings-circle-demo/discussions)

---

**⭐ Star this repository if you find it helpful!**

**🔗 Live Demo:** [https://your-username.github.io/savings-circle-demo/](https://your-username.github.io/savings-circle-demo/) 