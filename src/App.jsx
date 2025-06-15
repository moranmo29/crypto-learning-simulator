import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Header from './components/Header';
import Home from './pages/Home';
import SelectPlatform from './pages/SelectPlatform';
import BinanceDashboard from './pages/BinanceDashboard';
import MetaMaskWallet from './pages/MetaMaskWallet';
import TransferFunds from './pages/TransferFunds';
import TransactionExplorer from './pages/TransactionExplorer';
import NftMint from './pages/NftMint';
import MyNfts from './pages/MyNfts';
import SmartContract from './pages/SmartContract';
import About from './pages/About';

// Configure future flags for React Router
const router = {
    future: {
        v7_startTransition: true,
        v7_relativeSplatPath: true
    }
};

// Main App component with routing setup
// קומפוננטת האפליקציה הראשית עם הגדרות ניתוב
function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <Router future={router.future}>
                <div className="min-h-screen bg-gray-100">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/select-platform" element={<SelectPlatform />} />
                        <Route path="/dashboard" element={<BinanceDashboard />} />
                        <Route path="/wallet" element={<MetaMaskWallet />} />
                        <Route path="/transfer" element={<TransferFunds />} />
                        <Route path="/explorer/:hash" element={<TransactionExplorer />} />
                        <Route path="/nft-mint" element={<NftMint />} />
                        <Route path="/my-nfts" element={<MyNfts />} />
                        <Route path="/smart-contract" element={<SmartContract />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </Router>
        </I18nextProvider>
    );
}

export default App; 