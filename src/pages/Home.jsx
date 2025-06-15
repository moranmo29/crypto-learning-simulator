import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// Home page component with welcome message and start button
// קומפוננטת דף הבית עם הודעת ברוכים הבאים וכפתור התחלה
const Home = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">
                {t('welcome')}
            </h1>
            <button
                onClick={() => navigate('/select-platform')}
                className="px-8 py-4 bg-green-500 text-white rounded-lg text-xl hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
            >
                {t('startSimulation')}
            </button>
        </div>
    );
};

export default Home; 