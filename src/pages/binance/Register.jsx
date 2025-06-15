import { useState } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Binance Registration Simulation Page (Demo Only)
 * עמוד סימולציית הרשמה לבינאנס (דמו בלבד)
 *
 * - RTL layout, Tailwind CSS, tooltips, and i18n
 * - Includes email, password, verification code, terms checkbox, and buttons
 */
const Register = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showCode, setShowCode] = useState(false);
    const [code, setCode] = useState('');
    const [agreed, setAgreed] = useState(false);

    // Handle registration (demo only)
    const handleRegister = (e) => {
        e.preventDefault();
        if (agreed) {
            // Log registration (demo)
            console.log('Registered');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <form
                className="w-full max-w-md bg-white shadow-xl rounded-xl p-6 flex flex-col gap-6 rtl text-right"
                dir="rtl"
                onSubmit={handleRegister}
            >
                {/* Title */}
                <h1 className="text-2xl font-bold text-center mb-2">{t('demo_register_title')}</h1>

                {/* Email Field */}
                <div className="flex flex-col gap-1 relative">
                    <label htmlFor="email" className="font-medium flex items-center gap-1">
                        {t('email')}
                        <span className="ml-1 group relative cursor-pointer">
                            <span className="text-gray-400">ⓘ</span>
                            <span className="absolute bottom-full right-0 mb-1 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                {t('tooltip_email')}
                            </span>
                        </span>
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        placeholder={t('email')}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        autoComplete="off"
                        required
                    />
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-1 relative">
                    <label htmlFor="password" className="font-medium flex items-center gap-1">
                        {t('password')}
                        <span className="ml-1 group relative cursor-pointer">
                            <span className="text-gray-400">ⓘ</span>
                            <span className="absolute bottom-full right-0 mb-1 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                {t('tooltip_password')}
                            </span>
                        </span>
                    </label>
                    <div className="relative">
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            placeholder={t('password')}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            minLength={8}
                            required
                        />
                        <button
                            type="button"
                            tabIndex={-1}
                            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            onClick={() => setShowPassword(v => !v)}
                            aria-label={showPassword ? t('hide_password') : t('show_password')}
                        >
                            {showPassword ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.657.403-3.22 1.125-4.575M15 12a3 3 0 11-6 0 3 3 0 016 0zm6.875-4.575A9.956 9.956 0 0122 9c0 5.523-4.477 10-10 10a9.956 9.956 0 01-4.575-1.125" /></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm2.021-2.021A9.956 9.956 0 0122 12c0 5.523-4.477 10-10 10S2 17.523 2 12c0-1.657.403-3.22 1.125-4.575M9.88 9.88a3 3 0 104.24 4.24" /></svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Send Verification Button */}
                {!showCode && (
                    <button
                        type="button"
                        className="w-full bg-[#fcd535] text-black font-bold py-2 rounded-lg mt-2 hover:bg-yellow-400 transition-colors"
                        onClick={() => setShowCode(true)}
                    >
                        {t('send_verification')}
                    </button>
                )}

                {/* Verification Code Field */}
                {showCode && (
                    <div className="flex flex-col gap-1 relative animate-fade-in">
                        <label htmlFor="code" className="font-medium flex items-center gap-1">
                            {t('verification_code')}
                            <span className="ml-1 group relative cursor-pointer">
                                <span className="text-gray-400">ⓘ</span>
                                <span className="absolute bottom-full right-0 mb-1 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                    {t('tooltip_code')}
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
                        />
                    </div>
                )}

                {/* Terms Checkbox */}
                <div className="flex items-center gap-2 mt-2">
                    <input
                        id="terms"
                        type="checkbox"
                        className="accent-[#fcd535] w-4 h-4"
                        checked={agreed}
                        onChange={e => setAgreed(e.target.checked)}
                        required
                    />
                    <label htmlFor="terms" className="text-sm cursor-pointer select-none">
                        {t('agree_terms')}
                    </label>
                </div>

                {/* Create Account Button */}
                <button
                    type="submit"
                    className="w-full bg-[#fcd535] text-black font-bold py-2 rounded-lg mt-2 hover:bg-yellow-400 transition-colors disabled:opacity-60"
                    disabled={!email || !password || (showCode && code.length !== 6) || !agreed}
                >
                    {t('create_account')}
                </button>
            </form>
        </div>
    );
};

export default Register; 