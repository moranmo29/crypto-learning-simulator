import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// קומפוננטת חיפוש עסקה בבלוקצ'יין
// Blockchain transaction explorer component
const TransactionExplorer = () => {
    const { t } = useTranslation();
    const { hash } = useParams();
    const navigate = useNavigate();

    // נתוני העסקה (דמו)
    // Transaction data (demo)
    const transactionData = {
        hash: hash || '0x123abc456def',
        status: 'confirmed',
        from: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
        to: '0x123f681646d4A755815f9CB19e1aCc8565a0c2AC',
        amount: '1.25 ETH',
        fee: '0.001 ETH',
        blockNumber: '1234567',
        date: new Date().toLocaleString('he-IL', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    };

    // פורמט כתובת ארנק
    // Format wallet address
    const formatAddress = (address) => {
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8" dir="rtl">
            <div className="max-w-4xl mx-auto">
                {/* כפתור חזרה */}
                {/* Back button */}
                <button
                    onClick={() => navigate('/transfer')}
                    className="mb-6 text-blue-600 hover:text-blue-800 flex items-center"
                >
                    <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    {t('back')}
                </button>

                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-bold mb-8 text-center">
                        {t('transaction_explorer')}
                    </h1>

                    <div className="space-y-6">
                        {/* מזהה העסקה */}
                        {/* Transaction ID */}
                        <div className="border-b pb-4">
                            <h2 className="text-sm font-medium text-gray-500 mb-2">
                                {t('transaction_id')}
                            </h2>
                            <p className="font-mono text-lg break-all">{transactionData.hash}</p>
                        </div>

                        {/* סטטוס */}
                        {/* Status */}
                        <div className="border-b pb-4">
                            <h2 className="text-sm font-medium text-gray-500 mb-2">
                                {t('status')}
                            </h2>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                {t('confirmed')}
                            </span>
                        </div>

                        {/* כתובת שולח */}
                        {/* From Address */}
                        <div className="border-b pb-4">
                            <h2 className="text-sm font-medium text-gray-500 mb-2">
                                {t('from')}
                            </h2>
                            <p className="font-mono">{formatAddress(transactionData.from)}</p>
                        </div>

                        {/* כתובת מקבל */}
                        {/* To Address */}
                        <div className="border-b pb-4">
                            <h2 className="text-sm font-medium text-gray-500 mb-2">
                                {t('to')}
                            </h2>
                            <p className="font-mono">{formatAddress(transactionData.to)}</p>
                        </div>

                        {/* סכום */}
                        {/* Amount */}
                        <div className="border-b pb-4">
                            <h2 className="text-sm font-medium text-gray-500 mb-2">
                                {t('amount')}
                            </h2>
                            <p className="text-lg font-medium">{transactionData.amount}</p>
                        </div>

                        {/* עמלה */}
                        {/* Fee */}
                        <div className="border-b pb-4">
                            <h2 className="text-sm font-medium text-gray-500 mb-2">
                                {t('fee')}
                            </h2>
                            <p className="text-lg font-medium">{transactionData.fee}</p>
                        </div>

                        {/* מספר בלוק */}
                        {/* Block Number */}
                        <div className="border-b pb-4">
                            <h2 className="text-sm font-medium text-gray-500 mb-2">
                                {t('block')}
                            </h2>
                            <p className="font-mono">{transactionData.blockNumber}</p>
                        </div>

                        {/* תאריך */}
                        {/* Date */}
                        <div>
                            <h2 className="text-sm font-medium text-gray-500 mb-2">
                                {t('date')}
                            </h2>
                            <p>{transactionData.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionExplorer; 