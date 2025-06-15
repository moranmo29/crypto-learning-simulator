import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const MyNfts = () => {
    const { t } = useTranslation();
    const [nfts, setNfts] = useState([]);

    useEffect(() => {
        // Load NFTs from localStorage
        const savedNfts = JSON.parse(localStorage.getItem('nfts') || '[]');
        setNfts(savedNfts);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 text-right">
                        {t('my_nfts')}
                    </h1>
                    <Link
                        to="/mint-nft"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                        {t('mint_nft')}
                    </Link>
                </div>

                {nfts.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">{t('no_nfts')}</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {nfts.map((nft) => (
                            <div
                                key={nft.id}
                                className="bg-white rounded-lg shadow-lg overflow-hidden"
                            >
                                <div className="aspect-w-16 aspect-h-9">
                                    <img
                                        src={nft.image}
                                        alt={nft.name}
                                        className="w-full h-64 object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 text-right">
                                        {nft.name}
                                    </h3>
                                    <p className="mt-2 text-gray-600 text-right">
                                        {nft.description}
                                    </p>
                                    <div className="mt-4 space-y-2">
                                        <p className="text-sm text-gray-500 text-right">
                                            {t('token_id')}: {nft.id}
                                        </p>
                                        <p className="text-sm text-gray-500 text-right break-all">
                                            Hash: {nft.hash}
                                        </p>
                                        <a
                                            href={`https://etherscan.io/tx/${nft.hash}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 text-sm block text-right"
                                        >
                                            {t('view_on_explorer')}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyNfts; 