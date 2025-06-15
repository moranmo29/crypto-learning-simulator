import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

/**
 * TransferFunds Component
 * 
 * Simulates transferring funds between wallets with transaction status updates.
 * 
 * קומפוננט העברת כספים
 * 
 * מדמה העברת כספים בין ארנקים עם עדכוני סטטוס עסקה.
 */
const TransferFunds = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        walletAddress: '',
        coin: 'ETH',
        amount: ''
    });
    const [transactionStatus, setTransactionStatus] = useState(null);
    const [transactionHash, setTransactionHash] = useState('');

    // קבועים
    // Constants
    const AVAILABLE_COINS = ['BTC', 'ETH', 'USDT'];
    const TRANSACTION_FEE = '0.001 ETH';

    // טיפול בשינויי טופס
    // Handle form changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // יצירת מזהה עסקה אקראי
    // Generate random transaction hash
    const generateTransactionHash = () => {
        return '0x' + Math.random().toString(16).substring(2, 10) +
            Math.random().toString(16).substring(2, 10);
    };

    // טיפול בשליחת העסקה
    // Handle transaction submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setTransactionStatus('pending');
        const hash = generateTransactionHash();
        setTransactionHash(hash);

        // סימולציה של אישור העסקה אחרי 3 שניות
        // Simulate transaction confirmation after 3 seconds
        setTimeout(() => {
            setTransactionStatus('confirmed');
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8" dir="rtl">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold mb-8 text-center">{t('transfer_title')}</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* כתובת ארנק */}
                    {/* Wallet Address */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t('wallet_address')}
                        </label>
                        <div className="relative group">
                            <input
                                type="text"
                                name="walletAddress"
                                value={formData.walletAddress}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="0x..."
                                required
                            />
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                {t('tooltip_wallet')}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                            </div>
                        </div>
                    </div>

                    {/* בחירת מטבע */}
                    {/* Coin Selection */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t('select_coin')}
                        </label>
                        <select
                            name="coin"
                            value={formData.coin}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        >
                            {AVAILABLE_COINS.map(coin => (
                                <option key={coin} value={coin}>{coin}</option>
                            ))}
                        </select>
                    </div>

                    {/* סכום לשליחה */}
                    {/* Amount to Send */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t('amount')}
                        </label>
                        <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            placeholder="0.00"
                            step="0.000001"
                            required
                        />
                    </div>

                    {/* עמלה */}
                    {/* Transaction Fee */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">
                            {t('fee')}: {TRANSACTION_FEE}
                        </p>
                    </div>

                    {/* כפתור שליחה */}
                    {/* Send Button */}
                    <div className="relative group">
                        <button
                            type="submit"
                            className={`w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors ${transactionStatus === 'pending' ? 'cursor-not-allowed' : ''
                                }`}
                            disabled={transactionStatus === 'pending'}
                        >
                            {transactionStatus === 'pending' ? t('processing') : t('send')}
                        </button>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                            {t('tooltip_send')}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                        </div>
                    </div>
                </form>

                {/* סטטוס העסקה */}
                {/* Transaction Status */}
                {transactionStatus && (
                    <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">{t('transaction_sent')}</h2>
                        <div className="space-y-2">
                            <p>
                                <span className="font-medium">{t('transaction_status')}: </span>
                                <span className={transactionStatus === 'confirmed' ? 'text-green-600' : 'text-yellow-600'}>
                                    {t(transactionStatus)}
                                </span>
                            </p>
                            <p>
                                <span className="font-medium">{t('transaction_hash')}: </span>
                                <span className="font-mono text-sm">{transactionHash}</span>
                            </p>
                            {transactionStatus === 'confirmed' && (
                                <button
                                    onClick={() => navigate(`/explorer/${transactionHash}`)}
                                    className="mt-4 text-blue-600 hover:text-blue-800 flex items-center"
                                >
                                    {t('view_on_explorer')}
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TransferFunds; 