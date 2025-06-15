import { useState } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * KYC Page - Binance Identity Verification Simulation
 * עמוד KYC - סימולציית אימות זהות
 *
 * - RTL, טפסים, העלאת קובץ, סלפי, עיצוב Tailwind, i18n
 * - RTL, forms, file upload, selfie, Tailwind design, i18n
 */
const KYC = () => {
    const { t } = useTranslation();
    const [fullName, setFullName] = useState('');
    const [country, setCountry] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [dob, setDob] = useState('');
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [selfie, setSelfie] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    // Fake file upload simulation
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setUploading(true);
            setUploadProgress(0);
            // Simulate progress
            let progress = 0;
            const interval = setInterval(() => {
                progress += 20;
                setUploadProgress(progress);
                if (progress >= 100) {
                    clearInterval(interval);
                    setUploading(false);
                }
            }, 300);
        }
    };

    // Fake selfie simulation
    const handleSelfie = () => {
        setSelfie('selfie-placeholder');
    };

    // Fake submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            // כאן אפשר לבצע ניווט אמיתי
            console.log('KYC submitted!');
        }, 1200);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <form
                className="w-full max-w-lg bg-white shadow-xl rounded-xl p-8 flex flex-col gap-6 rtl text-right"
                dir="rtl"
                onSubmit={handleSubmit}
            >
                {/* Title */}
                <h1 className="text-2xl font-bold text-center mb-2">{t('kyc_title')}</h1>

                {/* Full Name */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="fullName" className="font-medium flex items-center gap-1">
                        {t('full_name')}
                    </label>
                    <input
                        id="fullName"
                        type="text"
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        placeholder={t('full_name')}
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        required
                    />
                    <span className="text-xs text-gray-500 mt-1">{t('helper_full_name')}</span>
                </div>

                {/* Country */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="country" className="font-medium flex items-center gap-1">
                        {t('country')}
                    </label>
                    <input
                        id="country"
                        type="text"
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        placeholder={t('country')}
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                        required
                    />
                    <span className="text-xs text-gray-500 mt-1">{t('helper_country')}</span>
                </div>

                {/* ID Number */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="idNumber" className="font-medium flex items-center gap-1">
                        {t('id_number')}
                    </label>
                    <input
                        id="idNumber"
                        type="text"
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        placeholder={t('id_number')}
                        value={idNumber}
                        onChange={e => setIdNumber(e.target.value)}
                        required
                    />
                    <span className="text-xs text-gray-500 mt-1">{t('helper_id_number')}</span>
                </div>

                {/* Date of Birth */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="dob" className="font-medium flex items-center gap-1">
                        {t('dob')}
                    </label>
                    <input
                        id="dob"
                        type="date"
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        value={dob}
                        onChange={e => setDob(e.target.value)}
                        required
                    />
                    <span className="text-xs text-gray-500 mt-1">{t('helper_dob')}</span>
                </div>

                {/* Upload ID Document */}
                <div className="flex flex-col gap-1">
                    <label className="font-medium flex items-center gap-1">
                        {t('upload_id')}
                    </label>
                    <div className="flex items-center gap-2">
                        <input
                            id="upload"
                            type="file"
                            accept="image/*,application/pdf"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                        <label htmlFor="upload" className="bg-[#fcd535] text-black font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-yellow-400 transition-colors">
                            {t('upload_id')}
                        </label>
                        {file && <span className="text-xs text-gray-700">{file.name}</span>}
                    </div>
                    {uploading && (
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div className="bg-yellow-400 h-2 rounded-full transition-all duration-300" style={{ width: `${uploadProgress}%` }} />
                        </div>
                    )}
                    <span className="text-xs text-gray-500 mt-1">{t('helper_upload')}</span>
                </div>

                {/* Selfie */}
                <div className="flex flex-col gap-1">
                    <label className="font-medium flex items-center gap-1">
                        {t('selfie')}
                    </label>
                    <button
                        type="button"
                        className="bg-[#fcd535] text-black font-bold py-2 px-4 rounded-lg w-fit hover:bg-yellow-400 transition-colors"
                        onClick={handleSelfie}
                    >
                        {t('selfie')}
                    </button>
                    {selfie && (
                        <div className="mt-2 flex items-center gap-2">
                            <img
                                src="https://placehold.co/80x80?text=Selfie"
                                alt="Selfie Placeholder"
                                className="rounded-full border border-gray-300"
                                width={80}
                                height={80}
                            />
                            <span className="text-xs text-gray-700">Selfie.jpg</span>
                        </div>
                    )}
                    <span className="text-xs text-gray-500 mt-1">{t('helper_selfie')}</span>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-[#fcd535] text-black font-bold py-2 rounded-lg mt-2 hover:bg-yellow-400 transition-colors disabled:opacity-60"
                    disabled={submitting || uploading}
                >
                    {submitting ? t('submit_kyc') + '...' : t('submit_kyc')}
                </button>
            </form>
        </div>
    );
};

export default KYC; 