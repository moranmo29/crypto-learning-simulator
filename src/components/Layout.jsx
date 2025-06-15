import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

// Layout component with RTL support and language switcher
// קומפוננטת פריסה עם תמיכה ב-RTL ומחלף שפות
const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link to="/" className="text-xl font-bold text-gray-800">
                        Crypto Learning Simulator
                    </Link>
                    <LanguageSwitcher />
                </nav>
            </header>
            <main className="container mx-auto px-4 py-8">
                {children}
            </main>
        </div>
    );
};

export default Layout; 