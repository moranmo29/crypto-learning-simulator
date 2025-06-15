import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import translationHE from './locales/he.json';
import translationEN from './locales/en.json';

// Configure i18next
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            he: {
                translation: translationHE
            },
            en: {
                translation: translationEN
            }
        },
        lng: 'he', // Default language is Hebrew
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage']
        }
    });

// Set HTML direction based on language
i18n.on('languageChanged', (lng) => {
    document.documentElement.dir = lng === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
});

export default i18n; 