import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

/**
 * Header Component
 * 
 * Renders a navigation bar with links to different pages in the application.
 * Supports RTL layout and internationalization.
 * 
 * קומפוננט כותרת עליון
 * 
 * מציג סרגל ניווט עם קישורים לדפים שונים באפליקציה.
 * תומך בפריסת RTL ובשפות שונות.
 */
const Header = () => {
    const { t, i18n } = useTranslation();

    // Toggle between Hebrew and English
    // החלפה בין עברית לאנגלית
    const toggleLanguage = () => {
        const newLang = i18n.language === 'he' ? 'en' : 'he';
        i18n.changeLanguage(newLang);
        document.dir = newLang === 'he' ? 'rtl' : 'ltr';
    };

    return (
        <header className="bg-gray-800 text-white">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Navigation Links - קישורי ניווט */}
                    <div className="flex space-x-4 items-center">
                        <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                            {t('home')}
                        </Link>
                        <Link to="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                            {t('binance')}
                        </Link>
                        <Link to="/wallet" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                            {t('wallet')}
                        </Link>
                        <Link to="/transfer" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                            {t('transfer')}
                        </Link>
                        <Link to="/explorer/0x123" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                            {t('explorer')}
                        </Link>
                        <Link to="/nft-mint" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                            {t('nft_mint')}
                        </Link>
                        <Link to="/my-nfts" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                            {t('my_nfts')}
                        </Link>
                    </div>

                    {/* Language Switcher - מחליף שפה */}
                    <div className="flex items-center">
                        <button
                            onClick={toggleLanguage}
                            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                        >
                            {i18n.language === 'he' ? t('english') : t('hebrew')}
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header; 