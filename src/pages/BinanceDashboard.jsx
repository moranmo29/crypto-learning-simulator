import { useTranslation } from 'react-i18next';
import { useState } from 'react';

// Example data for crypto coins
// נתוני דוגמה למטבעות קריפטו
const cryptoData = [
    {
        id: 1,
        symbol: 'BTC',
        name: 'Bitcoin',
        price: 450000,
        change: 2.5
    },
    {
        id: 2,
        symbol: 'ETH',
        name: 'Ethereum',
        price: 12000,
        change: -1.2
    },
    {
        id: 3,
        symbol: 'SOL',
        name: 'Solana',
        price: 450,
        change: 5.8
    },
    {
        id: 4,
        symbol: 'ADA',
        name: 'Cardano',
        price: 2.5,
        change: -0.8
    }
];

// Purchase Modal Component
// קומפוננטת חלון הקנייה
const PurchaseModal = ({ isOpen, onClose, onConfirm, coinSymbol }) => {
    const { t } = useTranslation();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
                <h3 className="text-xl font-bold mb-4 text-right">
                    {t('confirm_purchase', { coin: coinSymbol })}
                </h3>
                <div className="flex justify-end gap-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                    >
                        {t('cancel')}
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                    >
                        {t('confirm')}
                    </button>
                </div>
            </div>
        </div>
    );
};

// Binance Dashboard component
// קומפוננטת לוח הבקרה של בינאנס
const BinanceDashboard = () => {
    const { t } = useTranslation();
    const [balance, setBalance] = useState(10000); // Initial balance in ILS
    const [selectedCoin, setSelectedCoin] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [amount, setAmount] = useState('');

    // Format price in ILS
    // עיצוב מחיר בשקלים
    const formatPrice = (price) => {
        return new Intl.NumberFormat('he-IL', {
            style: 'currency',
            currency: 'ILS'
        }).format(price);
    };

    // Format percentage change
    // עיצוב אחוז השינוי
    const formatChange = (change) => {
        const color = change >= 0 ? 'text-green-500' : 'text-red-500';
        return <span className={color}>{change > 0 ? '+' : ''}{change}%</span>;
    };

    // Handle buy button click
    // טיפול בלחיצה על כפתור קנייה
    const handleBuy = (coin) => {
        setSelectedCoin(coin);
        setIsModalOpen(true);
    };

    // Handle purchase confirmation
    // טיפול באישור קנייה
    const handlePurchase = (e) => {
        e.preventDefault();
        // Simulate purchase
        // סימולציה של קנייה
        alert(t('purchase_successful'));
        setIsModalOpen(false);
        setAmount('');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-right">
                {t('binance_dashboard')}
            </h1>

            {/* Balance Display */}
            {/* הצגת יתרה */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8 text-right">
                <h2 className="text-xl font-semibold mb-2">
                    {t('current_balance')}:
                </h2>
                <p className="text-2xl font-bold text-green-600">{formatPrice(balance)}</p>
            </div>

            {/* Crypto Table */}
            {/* טבלת מטבעות */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-4 gap-4 p-4 bg-gray-700 text-sm font-medium">
                    <div>{t('coin')}</div>
                    <div>{t('price')}</div>
                    <div>{t('change_24h')}</div>
                    <div>{t('action')}</div>
                </div>

                {cryptoData.map((coin) => (
                    <div key={coin.id} className="grid grid-cols-4 gap-4 p-4 border-t border-gray-700">
                        <div className="font-medium">{coin.name} ({coin.symbol})</div>
                        <div>${coin.price.toLocaleString()}</div>
                        <div className={coin.change >= 0 ? 'text-green-500' : 'text-red-500'}>
                            {coin.change >= 0 ? '+' : ''}{coin.change}%
                        </div>
                        <div className="relative group">
                            <button
                                onClick={() => handleBuy(coin)}
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                            >
                                {t('buy')}
                            </button>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                {t('tooltip_buy')}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Purchase Modal */}
            {/* חלון קנייה */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full">
                        <h2 className="text-xl font-bold mb-4">
                            {t('buy')} {selectedCoin?.name}
                        </h2>
                        <form onSubmit={handlePurchase}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">
                                    {t('amount')}
                                </label>
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="w-full p-2 border rounded bg-gray-700 text-white"
                                    placeholder="0.0"
                                    required
                                />
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 text-gray-300 hover:text-white"
                                >
                                    {t('cancel')}
                                </button>
                                <div className="relative group">
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                                    >
                                        {t('confirm')}
                                    </button>
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                        {t('tooltip_buy')}
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BinanceDashboard; 