import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// Platform selection page component
// קומפוננטת בחירת פלטפורמה
const SelectPlatform = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handlePlatformSelect = (platform) => {
        switch (platform) {
            case 'binance':
                navigate('/binance');
                break;
            case 'metamask':
                navigate('/metamask');
                break;
            default:
                break;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-center">{t('selectPlatform')}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <button
                        onClick={() => handlePlatformSelect('binance')}
                        className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <h2 className="text-xl font-semibold mb-2">{t('binance')}</h2>
                        <p className="text-gray-600">Simulate trading on Binance exchange</p>
                    </button>
                    <button
                        onClick={() => handlePlatformSelect('metamask')}
                        className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <h2 className="text-xl font-semibold mb-2">{t('metaMask')}</h2>
                        <p className="text-gray-600">Learn about MetaMask wallet</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SelectPlatform; 