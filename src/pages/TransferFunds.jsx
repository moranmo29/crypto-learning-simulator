import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// קומפוננטת העברת כספים
// Funds transfer component
const TransferFunds = () => {
    const { t } = useTranslation();
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
        setTransactionHash(generateTransactionHash());

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
                        <input
                            type="text"
                            name="walletAddress"
                            value={formData.walletAddress}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            placeholder="0x..."
                            required
                        />
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
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                        disabled={transactionStatus === 'pending'}
                    >
                        {t('send')}
                    </button>
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
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TransferFunds; 