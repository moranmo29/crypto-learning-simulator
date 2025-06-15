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
    const handleBuyClick = (coin) => {
        setSelectedCoin(coin);
        setIsModalOpen(true);
    };

    // Handle purchase confirmation
    // טיפול באישור קנייה
    const handleConfirmPurchase = () => {
        if (balance >= 500) {
            setBalance(prevBalance => prevBalance - 500);
        }
        setIsModalOpen(false);
        setSelectedCoin(null);
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
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {t('coin')}
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {t('price')}
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {t('change')}
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {t('action')}
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {cryptoData.map((coin) => (
                            <tr key={coin.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <div className="text-sm font-medium text-gray-900">{coin.symbol}</div>
                                    <div className="text-sm text-gray-500">{coin.name}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <div className="text-sm text-gray-900">{formatPrice(coin.price)}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    {formatChange(coin.change)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                                        onClick={() => handleBuyClick(coin)}
                                    >
                                        {t('buy')}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Purchase Modal */}
            {/* חלון קנייה */}
            <PurchaseModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirmPurchase}
                coinSymbol={selectedCoin?.symbol}
            />
        </div>
    );
};

export default BinanceDashboard; 