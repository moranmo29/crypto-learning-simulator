import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

/**
 * ProgressTracker Component
 * 
 * Displays a horizontal progress tracker showing the user's current stage in the crypto learning flow.
 * Supports RTL layout and uses Tailwind CSS for styling.
 * Features smooth animations, tooltips, and step indicators.
 * 
 * קומפוננט מעקב התקדמות
 * 
 * מציג מעקב התקדמות אופקי המציג את השלב הנוכחי של המשתמש בתהליך הלמידה של קריפטו.
 * תומך בפריסה מימין לשמאל ומשתמש ב-Tailwind CSS לעיצוב.
 * כולל אנימציות חלקות, טולטיפים ומסמני שלבים.
 */
const ProgressTracker = ({ currentStep }) => {
    const { t } = useTranslation();

    const steps = [
        { id: 1, key: 'step_exchange', icon: '🏦', tooltip: 'הרשמה לבורסה קריפטו' },
        { id: 2, key: 'step_wallet', icon: '👛', tooltip: 'יצירת ארנק קריפטו מאובטח' },
        { id: 3, key: 'step_transfer', icon: '💸', tooltip: 'העברת מטבעות קריפטו' },
        { id: 4, key: 'step_explorer', icon: '��', tooltip: 'חיפוש וצפייה בעסקאות' },
        { id: 5, key: 'step_nft', icon: '🎨', tooltip: 'יצירת NFT משלך' },
        { id: 6, key: 'step_contract', icon: '📝', tooltip: 'פיתוח חוזה חכם' }
    ];

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center relative">
                {/* Progress Line */}
                <div className="absolute top-1/2 right-0 left-0 h-1 bg-gray-200 -translate-y-1/2 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-blue-600 transition-all duration-1000 ease-in-out"
                        style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                    />
                </div>

                {steps.map((step, index) => (
                    <div key={step.id} className="relative flex flex-col items-center group">
                        {/* Step Circle with Number */}
                        <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center text-lg transition-all duration-500 transform hover:scale-110 ${step.id <= currentStep
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                    : 'bg-gray-200 text-gray-500'
                                }`}
                        >
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                                {step.id}
                            </span>
                            {step.icon}
                        </div>

                        {/* Step Label */}
                        <div
                            className={`mt-3 text-sm font-medium text-center transition-all duration-300 ${step.id === currentStep
                                    ? 'text-blue-600 font-bold scale-110'
                                    : step.id < currentStep
                                        ? 'text-gray-600'
                                        : 'text-gray-400'
                                }`}
                        >
                            {t(step.key)}
                        </div>

                        {/* Tooltip */}
                        <div className="absolute bottom-full mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                            {step.tooltip}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                        </div>

                        {/* Connecting Line */}
                        {index < steps.length - 1 && (
                            <div
                                className={`absolute top-6 w-full h-0.5 transition-all duration-500 ${step.id < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                                    }`}
                                style={{ right: '50%' }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

ProgressTracker.propTypes = {
    currentStep: PropTypes.number.isRequired
};

export default ProgressTracker; 