import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MetaMaskWallet = () => {
    const { t } = useTranslation();
    const [step, setStep] = useState(1);
    const [password, setPassword] = useState('');
    const [seedPhrase, setSeedPhrase] = useState('');
    const [verified, setVerified] = useState(false);
    const [walletCreated, setWalletCreated] = useState(false);

    const generateSeedPhrase = () => {
        const words = [
            'abandon', 'ability', 'able', 'about', 'above', 'absent', 'absorb', 'abstract', 'absurd', 'abuse',
            'access', 'accident', 'account', 'accuse', 'achieve', 'acid', 'acoustic', 'acquire', 'across', 'act'
        ];
        const phrase = Array.from({ length: 12 }, () => words[Math.floor(Math.random() * words.length)]).join(' ');
        setSeedPhrase(phrase);
    };

    const handleCreateWallet = () => {
        if (password.length < 8) {
            alert('Password must be at least 8 characters long');
            return;
        }
        generateSeedPhrase();
        setStep(2);
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

                {step === 1 && (
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
                        <button
                            onClick={handleCreateWallet}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            {t('create_wallet')}
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold">{t('your_seed_phrase')}</h2>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="font-mono text-sm">{seedPhrase}</p>
                        </div>
                        <p className="text-sm text-red-600">
                            ⚠️ {t('warning')}: Save this seed phrase in a secure location. Never share it with anyone!
                        </p>
                        <button
                            onClick={handleVerifySeed}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            {t('verify_seed')}
                        </button>
                    </div>
                )}

                {step === 3 && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold">{t('verify_seed')}</h2>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="font-mono text-sm">{seedPhrase}</p>
                        </div>
                        <button
                            onClick={handleComplete}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            {t('confirm')}
                        </button>
                    </div>
                )}

                {step === 4 && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-green-600">Wallet Created Successfully!</h2>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="font-mono text-sm">
                                {t('wallet_address')}: 0x1234...5678
                            </p>
                            <p className="mt-2">
                                {t('balance')}: 0.00 ETH
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                                {t('send')}
                            </button>
                            <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                                {t('receive')}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MetaMaskWallet; 