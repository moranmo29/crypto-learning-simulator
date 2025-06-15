import { useState } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * MetaMaskWallet Component
 * 
 * Simulates a MetaMask wallet interface with account creation and balance display.
 * 
 * קומפוננט ארנק MetaMask
 * 
 * מדמה ממשק ארנק MetaMask עם יצירת חשבון ותצוגת יתרה.
 */
const MetaMaskWallet = () => {
    const { t } = useTranslation();
    const [step, setStep] = useState(1);
    const [password, setPassword] = useState('');
    const [seedPhrase, setSeedPhrase] = useState('');
    const [verified, setVerified] = useState(false);
    const [walletCreated, setWalletCreated] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [address, setAddress] = useState('');

    const generateSeedPhrase = () => {
        const words = [
            'abandon', 'ability', 'able', 'about', 'above', 'absent', 'absorb', 'abstract', 'absurd', 'abuse',
            'access', 'accident', 'account', 'accuse', 'achieve', 'acid', 'acoustic', 'acquire', 'across', 'act'
        ];
        const phrase = Array.from({ length: 12 }, () => words[Math.floor(Math.random() * words.length)]).join(' ');
        setSeedPhrase(phrase);
    };

    const handleCreateWallet = () => {
        setIsCreating(true);

        // Simulate wallet creation delay
        // סימולציה של השהיית יצירת ארנק
        setTimeout(() => {
            const newAddress = '0x' + Math.random().toString(16).slice(2, 42);
            setAddress(newAddress);
            setWalletCreated(true);
            setIsCreating(false);
        }, 2000);
    };

    const handleVerifySeed = () => {
        setVerified(true);
        setStep(3);
    };

    const handleComplete = () => {
        setWalletCreated(true);
        setStep(4);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold mb-8 text-center">MetaMask Wallet Simulation</h1>

                {!walletCreated ? (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold">{t('create_wallet')}</h2>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                {t('enter_password')}
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter password (min 8 characters)"
                            />
                        </div>
                        <div className="relative group">
                            <button
                                onClick={handleCreateWallet}
                                disabled={isCreating}
                                className={`w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors ${isCreating ? 'bg-gray-600 cursor-not-allowed' : ''
                                    }`}
                            >
                                {isCreating ? t('creating') : t('create_wallet')}
                            </button>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                {t('tooltip_wallet')}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-green-600">Wallet Created Successfully!</h2>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-sm font-medium text-gray-400 mb-1">
                                    {t('wallet_address')}
                                </h3>
                                <span className="text-green-400">{t('connected')}</span>
                            </div>
                            <div className="relative group">
                                <p className="text-sm break-all">{address}</p>
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                    {t('tooltip_wallet')}
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-400 mb-1">
                                {t('balance')}
                            </h3>
                            <p className="text-2xl font-bold">0.00 ETH</p>
                        </div>
                        <div className="pt-4">
                            <button
                                onClick={() => setWalletCreated(false)}
                                className="w-full py-2 px-4 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors"
                            >
                                {t('disconnect')}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MetaMaskWallet; 