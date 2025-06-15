import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * TransactionExplorer Component
 * 
 * Displays transaction details in a blockchain explorer style interface.
 * 
 * קומפוננט חוקר עסקאות
 * 
 * מציג פרטי עסקה בממשק בסגנון חוקר בלוקצ'יין.
 */
const TransactionExplorer = () => {
    const { hash } = useParams();
    const { t } = useTranslation();
    const navigate = useNavigate();

    // Simulated transaction data
    // נתוני עסקה מדומים
    const transaction = {
        hash,
        status: 'confirmed',
        blockNumber: Math.floor(Math.random() * 1000000),
        timestamp: new Date().toISOString(),
        from: '0x' + Math.random().toString(16).slice(2, 42),
        to: '0x' + Math.random().toString(16).slice(2, 42),
        value: (Math.random() * 10).toFixed(4),
        gasUsed: Math.floor(Math.random() * 100000),
        gasPrice: (Math.random() * 100).toFixed(2),
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">{t('transaction_details')}</h1>
                <button
                    onClick={() => navigate(-1)}
                    className="text-blue-400 hover:text-blue-300"
                >
                    {t('back')}
                </button>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-sm font-medium text-gray-400 mb-1">
                            {t('transaction_hash')}
                        </h3>
                        <div className="relative group">
                            <p className="text-sm break-all">{transaction.hash}</p>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                {t('tooltip_hash')}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-gray-400 mb-1">
                            {t('status')}
                        </h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {t('confirmed')}
                        </span>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-gray-400 mb-1">
                            {t('block_number')}
                        </h3>
                        <p className="text-sm">{transaction.blockNumber}</p>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-gray-400 mb-1">
                            {t('timestamp')}
                        </h3>
                        <p className="text-sm">
                            {new Date(transaction.timestamp).toLocaleString()}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-gray-400 mb-1">
                            {t('from')}
                        </h3>
                        <div className="relative group">
                            <p className="text-sm break-all">{transaction.from}</p>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                {t('tooltip_wallet')}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-gray-400 mb-1">
                            {t('to')}
                        </h3>
                        <div className="relative group">
                            <p className="text-sm break-all">{transaction.to}</p>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                {t('tooltip_wallet')}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-gray-400 mb-1">
                            {t('value')}
                        </h3>
                        <p className="text-sm">{transaction.value} ETH</p>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-gray-400 mb-1">
                            {t('gas_used')}
                        </h3>
                        <p className="text-sm">{transaction.gasUsed}</p>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-gray-400 mb-1">
                            {t('gas_price')}
                        </h3>
                        <p className="text-sm">{transaction.gasPrice} Gwei</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionExplorer; 