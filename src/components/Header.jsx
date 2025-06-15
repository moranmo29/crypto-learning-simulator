import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

/**
 * Header Component
 * 
 * Professional crypto app header with responsive design and RTL support.
 * Features navigation links, language switcher, and user balance display.
 * 
 * קומפוננט כותרת עליון
 * 
 * כותרת עליון מקצועית לאפליקציית קריפטו עם עיצוב רספונסיבי ותמיכה ב-RTL.
 * כוללת קישורי ניווט, מחליף שפה ותצוגת יתרת משתמש.
 */
const Header = () => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle between Hebrew and English
    // החלפה בין עברית לאנגלית
    const toggleLanguage = () => {
        const newLang = i18n.language === 'he' ? 'en' : 'he';
        i18n.changeLanguage(newLang);
        document.dir = newLang === 'he' ? 'rtl' : 'ltr';
    };

    // Navigation links configuration
    // הגדרת קישורי ניווט
    const navLinks = [
        { to: '/', label: 'home' },
        { to: '/dashboard', label: 'binance', tooltip: 'tooltip_buy' },
        { to: '/wallet', label: 'wallet' },
        { to: '/transfer', label: 'transfer', tooltip: 'tooltip_send' },
        { to: '/explorer/0x123', label: 'explorer', tooltip: 'tooltip_explorer' },
        { to: '/nft-mint', label: 'nft_mint', tooltip: 'tooltip_mint' },
        { to: '/my-nfts', label: 'my_nfts' },
        { to: '/smart-contract', label: 'smart_contract', tooltip: 'tooltip_deploy' },
        { to: '/binance/security', label: t('nav_2fa'), tooltip: t('nav_2fa') },
    ];

    return (
        <header className="bg-gray-900 text-white">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* User Profile Section - חלק פרופיל משתמש */}
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                                <span className="text-sm font-bold">U</span>
                            </div>
                            <div className="text-sm">
                                <span className="text-gray-300">{t('balance')}:</span>
                                <span className="font-bold mr-1">₪12,500</span>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button - כפתור תפריט למובייל */}
                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Navigation - ניווט למחשב */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-4 lg:space-x-reverse">
                        {navLinks.map((link) => (
                            <div key={link.to} className="relative group">
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive
                                            ? 'text-yellow-400 border-b-2 border-yellow-400'
                                            : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                        }`
                                    }
                                >
                                    {t(link.label)}
                                </NavLink>
                                {link.tooltip && (
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                        {t(link.tooltip)}
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Language Switcher - מחליף שפה */}
                    <div className="flex items-center">
                        <div className="relative group">
                            <button
                                onClick={toggleLanguage}
                                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                            >
                                {i18n.language === 'he' ? t('english') : t('hebrew')}
                            </button>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                {t('tooltip_language')}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation - ניווט למובייל */}
                {isMenuOpen && (
                    <div className="lg:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navLinks.map((link) => (
                                <div key={link.to} className="relative group">
                                    <NavLink
                                        to={link.to}
                                        className={({ isActive }) =>
                                            `block px-3 py-2 rounded-md text-base font-medium ${isActive
                                                ? 'text-yellow-400 bg-gray-800'
                                                : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                            }`
                                        }
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {t(link.label)}
                                    </NavLink>
                                    {link.tooltip && (
                                        <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                            {t(link.tooltip)}
                                            <div className="absolute top-1/2 left-full transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header; 