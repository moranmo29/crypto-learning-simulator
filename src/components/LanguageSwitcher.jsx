import { useTranslation } from 'react-i18next';

// Language switcher component
// קומפוננטת החלפת שפה
const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'he' ? 'en' : 'he';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
            {i18n.language === 'he' ? 'English' : 'עברית'}
        </button>
    );
};

export default LanguageSwitcher; 