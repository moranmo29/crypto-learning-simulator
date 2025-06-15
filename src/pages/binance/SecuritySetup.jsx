import { useState } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * SecuritySetup Page - Binance 2FA Simulation
 * עמוד הגדרת אבטחה דו-שלבית - סימולציה
 *
 * - RTL, בחירת שיטה, טולטיפ, שגיאה, עיצוב Tailwind
 * - RTL, method selection, tooltip, error, Tailwind design
 */
const FAKE_CODE = '654321';

const SecuritySetup = () => {
    const { t } = useTranslation();
    const [method, setMethod] = useState('');
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    // Handle method selection
    const handleSelect = (m) => {
        setMethod(m);
        setCode('');
        setError('');
        setSuccess(false);
    };

    // Handle verification
    const handleVerify = (e) => {
        e.preventDefault();
        if (code === FAKE_CODE) {
            setSuccess(true);
            setError('');
            // Simulate next step
            setTimeout(() => {
                // כאן אפשר לבצע ניווט אמיתי
                console.log('2FA verified!');
            }, 1000);
        } else {
            setError(t('wrong_code'));
            setSuccess(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-6 flex flex-col gap-6 rtl text-right" dir="rtl">
                {/* Title */}
                <h1 className="text-2xl font-bold text-center mb-1">{t('security_title')}</h1>
                <p className="text-gray-600 text-center mb-4">{t('security_description')}</p>

                {/* Method Selection */}
                <div className="flex gap-4 justify-center mb-2">
                    <button
                        type="button"
                        className={`flex-1 bg-[#fcd535] text-black font-bold py-2 rounded-lg hover:bg-yellow-400 transition-colors border-2 ${method === 'google' ? 'border-yellow-600' : 'border-transparent'}`}
                        onClick={() => handleSelect('google')}
                    >
                        {t('google_auth')}
                        <span className="ml-1 group relative cursor-pointer align-middle">
                            <span className="text-gray-400">ⓘ</span>
                            <span className="absolute bottom-full right-0 mb-1 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                {t('tooltip_google')}
                            </span>
                        </span>
                    </button>
                    <button
                        type="button"
                        className={`flex-1 bg-[#fcd535] text-black font-bold py-2 rounded-lg hover:bg-yellow-400 transition-colors border-2 ${method === 'sms' ? 'border-yellow-600' : 'border-transparent'}`}
                        onClick={() => handleSelect('sms')}
                    >
                        {t('sms_auth')}
                        <span className="ml-1 group relative cursor-pointer align-middle">
                            <span className="text-gray-400">ⓘ</span>
                            <span className="absolute bottom-full right-0 mb-1 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                {t('tooltip_sms')}
                            </span>
                        </span>
                    </button>
                </div>

                {/* Verification Section */}
                {method && (
                    <form onSubmit={handleVerify} className="flex flex-col gap-4 mt-4">
                        <div className="flex flex-col gap-1 relative">
                            <label htmlFor="code" className="font-medium flex items-center gap-1">
                                {t('verification_code')}
                            </label>
                            <input
                                id="code"
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]{6}"
                                maxLength={6}
                                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                                placeholder="000000"
                                value={code}
                                onChange={e => setCode(e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}
                                required
                                autoFocus
                            />
                        </div>
                        {/* Error Message */}
                        {error && (
                            <div className="text-red-600 text-sm mt-1 text-center">{error}</div>
                        )}
                        {/* Success Message */}
                        {success && (
                            <div className="text-green-600 text-sm mt-1 text-center">✔ אימות הצליח!</div>
                        )}
                        <button
                            type="submit"
                            className="w-full bg-[#fcd535] text-black font-bold py-2 rounded-lg mt-2 hover:bg-yellow-400 transition-colors"
                        >
                            {t('verify_and_continue')}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default SecuritySetup; 