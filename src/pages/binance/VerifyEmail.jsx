import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * VerifyEmail Page - Binance Simulation
 * עמוד אימות אימייל - סימולציה
 *
 * - RTL, טיימר, טולטיפ, שגיאה, עיצוב Tailwind
 * - RTL, timer, tooltip, error, Tailwind design
 */
const FAKE_CODE = '123456';

const VerifyEmail = () => {
    const { t } = useTranslation();
    const [code, setCode] = useState('');
    const [timer, setTimer] = useState(60);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [resending, setResending] = useState(false);

    // Countdown timer
    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => setTimer(t => t - 1), 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    // Handle code verification
    const handleVerify = (e) => {
        e.preventDefault();
        if (code === FAKE_CODE) {
            setSuccess(true);
            setError('');
            // Simulate redirect
            setTimeout(() => {
                // כאן אפשר לבצע ניווט אמיתי
                console.log('Email verified!');
            }, 1000);
        } else {
            setError(t('error_wrong_code'));
            setSuccess(false);
        }
    };

    // Handle resend code
    const handleResend = () => {
        setResending(true);
        setTimeout(() => {
            setTimer(60);
            setResending(false);
            setCode('');
            setError('');
        }, 1000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <form
                className="w-full max-w-md bg-white shadow-xl rounded-xl p-6 flex flex-col gap-6 rtl text-right"
                dir="rtl"
                onSubmit={handleVerify}
            >
                {/* Title */}
                <h1 className="text-2xl font-bold text-center mb-1">{t('verify_email_title')}</h1>
                <p className="text-gray-600 text-center mb-4">{t('verify_email_subtitle')}</p>

                {/* Verification Code Input */}
                <div className="flex flex-col gap-1 relative">
                    <label htmlFor="code" className="font-medium flex items-center gap-1">
                        {t('verification_code')}
                        <span className="ml-1 group relative cursor-pointer">
                            <span className="text-gray-400">ⓘ</span>
                            <span className="absolute bottom-full right-0 mb-1 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                {t('tooltip_verification_code')}
                            </span>
                        </span>
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

                {/* Timer & Resend */}
                <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-gray-500">
                        {timer > 0 ? `00:${timer.toString().padStart(2, '0')}` : '00:00'}
                    </span>
                    <button
                        type="button"
                        className="text-sm font-medium text-blue-700 disabled:text-gray-400 disabled:cursor-not-allowed"
                        onClick={handleResend}
                        disabled={timer > 0 || resending}
                    >
                        {t('resend_code')}
                    </button>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="text-red-600 text-sm mt-1 text-center">{error}</div>
                )}
                {/* Success Message */}
                {success && (
                    <div className="text-green-600 text-sm mt-1 text-center">✔ אימות הצליח!</div>
                )}

                {/* Verify Button */}
                <button
                    type="submit"
                    className="w-full bg-[#fcd535] text-black font-bold py-2 rounded-lg mt-2 hover:bg-yellow-400 transition-colors"
                >
                    {t('verify_button')}
                </button>
            </form>
        </div>
    );
};

export default VerifyEmail; 