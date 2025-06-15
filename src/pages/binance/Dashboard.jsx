import { useState } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Binance Dashboard Simulation Page
 * עמוד דשבורד - סימולציה
 *
 * - RTL, עיצוב Tailwind, כרטיסים, טבלאות, מודלים, i18n
 * - RTL, Tailwind design, cards, tables, modals, i18n
 */
const coins = [
    {
        symbol: 'BTC',
        name: 'Bitcoin',
        amount: 0.245,
        usd: 7200.00,
        change: 2.5,
    },
    {
        symbol: 'ETH',
        name: 'Ethereum',
        amount: 1.8,
        usd: 3400.00,
        change: 1.2,
    },
    {
        symbol: 'USDT',
        name: 'Tether',
        amount: 1740.00,
        usd: 1740.00,
        change: 0.0,
    },
];

const Dashboard = () => {
    const { t } = useTranslation();
    const [modal, setModal] = useState(null); // 'buy' | 'send' | 'convert' | null

    // Fake modal form submit
    const handleModalSubmit = (e) => {
        e.preventDefault();
        setModal(null);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-2 rtl" dir="rtl">
            {/* Page Title */}
            <h1 className="text-3xl font-bold text-center mb-4">{t('dashboard_title')}</h1>
            {/* Welcome Header */}
            <div className="text-xl font-semibold text-center mb-8">{t('welcome_user')}</div>

            {/* Total Balance Card */}
            <div className="max-w-xl mx-auto mb-8">
                <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border-2 border-yellow-200">
                    <div className="text-lg text-gray-500 mb-2">{t('total_balance')}</div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">$12,340.00</div>
                </div>
            </div>

            {/* Coins Table */}
            <div className="max-w-2xl mx-auto mb-8">
                <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">
                    <table className="w-full text-right rtl">
                        <thead>
                            <tr className="text-gray-600 text-sm border-b">
                                <th className="py-2">{t('coin')}</th>
                                <th className="py-2">{t('amount')}</th>
                                <th className="py-2">{t('value')}</th>
                                <th className="py-2">{t('change_24h')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coins.map((coin) => (
                                <tr key={coin.symbol} className="hover:bg-yellow-50 transition-colors">
                                    <td className="font-bold flex items-center gap-2 justify-end">
                                        <span className="inline-block w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-lg border border-gray-200">
                                            {coin.symbol}
                                        </span>
                                    </td>
                                    <td>{coin.amount} {coin.symbol}</td>
                                    <td>${coin.usd.toLocaleString()}</td>
                                    <td className={coin.change >= 0 ? 'text-green-600' : 'text-red-600'}>
                                        {coin.change >= 0 ? '+' : ''}{coin.change}%
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Chart Section (Placeholder) */}
            <div className="max-w-2xl mx-auto mb-8">
                <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                    <div className="w-full h-32 bg-gradient-to-l from-yellow-100 to-yellow-300 rounded-lg flex items-end">
                        {/* Placeholder for chart */}
                        <div className="w-full h-2/3 flex items-end gap-1 px-2">
                            {[20, 40, 30, 60, 50, 80, 60, 90, 70, 100].map((h, i) => (
                                <div key={i} className="bg-yellow-400 rounded-t w-4" style={{ height: `${h}%` }} />
                            ))}
                        </div>
                    </div>
                    <div className="text-xs text-gray-400 mt-2">(סימולציית גרף)</div>
                </div>
            </div>

            {/* Actions */}
            <div className="max-w-2xl mx-auto flex flex-wrap gap-4 justify-center mb-8">
                <button
                    className="bg-[#fcd535] text-black font-bold py-2 px-6 rounded-lg shadow hover:bg-yellow-400 transition-colors"
                    onClick={() => setModal('buy')}
                >
                    {t('buy')}
                </button>
                <button
                    className="bg-[#fcd535] text-black font-bold py-2 px-6 rounded-lg shadow hover:bg-yellow-400 transition-colors"
                    onClick={() => setModal('send')}
                >
                    {t('send')}
                </button>
                <button
                    className="bg-[#fcd535] text-black font-bold py-2 px-6 rounded-lg shadow hover:bg-yellow-400 transition-colors"
                    onClick={() => setModal('convert')}
                >
                    {t('convert')}
                </button>
            </div>

            {/* Modal */}
            {modal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm rtl text-right relative">
                        <button
                            className="absolute left-4 top-4 text-gray-400 hover:text-gray-700 text-2xl"
                            onClick={() => setModal(null)}
                            aria-label="סגור"
                        >
                            ×
                        </button>
                        <h2 className="text-xl font-bold mb-4">{t(modal)}</h2>
                        <form onSubmit={handleModalSubmit} className="flex flex-col gap-4">
                            <input
                                type="text"
                                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                                placeholder={t('amount')}
                                required
                            />
                            <button
                                type="submit"
                                className="bg-[#fcd535] text-black font-bold py-2 rounded-lg hover:bg-yellow-400 transition-colors"
                            >
                                {t(modal)}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard; 