import { useTranslation } from 'react-i18next';
import ProgressTracker from '../components/ProgressTracker';

/**
 * About Page Component
 * 
 * Displays information about the crypto simulation system, its purpose, and learning stages.
 * Features RTL layout and uses Tailwind CSS for styling.
 * 
 * קומפוננט עמוד אודות
 * 
 * מציג מידע על מערכת סימולציית הקריפטו, מטרתה ושלבי הלמידה.
 * כולל פריסה מימין לשמאל ומשתמש ב-Tailwind CSS לעיצוב.
 */
const About = () => {
    const { t } = useTranslation();

    const learningStages = [
        { id: 1, key: 'step_exchange', icon: '🏦' },
        { id: 2, key: 'step_wallet', icon: '👛' },
        { id: 3, key: 'step_transfer', icon: '💸' },
        { id: 4, key: 'step_explorer', icon: '🔍' },
        { id: 5, key: 'step_nft', icon: '🎨' },
        { id: 6, key: 'step_contract', icon: '📝' }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Title */}
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
                    {t('about_title')}
                </h1>

                {/* Introduction */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        {t('about_intro')}
                    </p>

                    {/* Warning Box */}
                    <div className="bg-yellow-50 border-r-4 border-yellow-400 p-4 mb-6">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="mr-3">
                                <p className="text-sm text-yellow-700">
                                    {t('about_warning')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Learning Stages */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            {t('about_steps')}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {learningStages.map((stage) => (
                                <div
                                    key={stage.id}
                                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                                >
                                    <span className="text-2xl ml-3">{stage.icon}</span>
                                    <span className="text-gray-700">{t(stage.key)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Progress Tracker */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <ProgressTracker currentStep={1} />
                </div>
            </div>
        </div>
    );
};

export default About; 