import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

/**
 * SelectPlatform Page - בחירת פלטפורמה לסימולציה
 *
 * - RTL, עיצוב Tailwind, כרטיסים, ניווט, i18n
 * - RTL, Tailwind design, cards, navigation, i18n
 */
const platforms = [
    {
        key: 'binance',
        desc: 'binance_desc',
        path: '/binance/register',
    },
    {
        key: 'coinbase',
        desc: 'coinbase_desc',
        path: '/coinbase', // דוגמה, אפשר להחליף לנתיב אמיתי בעתיד
    },
    {
        key: 'metamask',
        desc: 'metamask_desc',
        path: '/wallet',
    },
    {
        key: 'ledger',
        desc: 'ledger_desc',
        path: '/ledger', // דוגמה, אפשר להחליף לנתיב אמיתי בעתיד
    },
];

const SelectPlatform = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-2 rtl" dir="rtl">
            {/* Title */}
            <h1 className="text-3xl font-bold text-center mb-10">{t('select_platform_title')}</h1>
            {/* Grid of Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {platforms.map((p) => (
                    <div
                        key={p.key}
                        className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow border border-yellow-100"
                    >
                        <div className="text-2xl font-bold mb-2">{t(p.key)}</div>
                        <div className="text-gray-500 mb-6 text-center">{t(p.desc)}</div>
                        <button
                            className="bg-[#fcd535] text-black font-bold py-2 px-6 rounded-lg shadow hover:bg-yellow-400 transition-colors mt-auto"
                            onClick={() => navigate(p.path)}
                        >
                            {t('start_simulation')}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectPlatform; 