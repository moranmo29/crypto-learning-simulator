import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

/**
 * MyNfts Component
 * 
 * Displays a gallery of user's NFTs with details and links to blockchain explorer.
 * 
 * קומפוננט ה-NFTs שלי
 * 
 * מציג גלריית NFTs של המשתמש עם פרטים וקישורים לחוקר בלוקצ'יין.
 */
const MyNfts = () => {
    const { t } = useTranslation();
    const [nfts, setNfts] = useState([]);

    useEffect(() => {
        // Load NFTs from localStorage
        // טעינת NFTs מ-localStorage
        const savedNfts = localStorage.getItem('nfts');
        if (savedNfts) {
            setNfts(JSON.parse(savedNfts));
        }
    }, []);

    if (nfts.length === 0) {
        return (
            <div className="max-w-4xl mx-auto p-6 text-center">
                <h1 className="text-3xl font-bold mb-8">{t('my_nfts')}</h1>
                <p className="text-gray-400 mb-8">{t('no_nfts')}</p>
                <Link
                    to="/nft-mint"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    {t('mint_nft')}
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8 text-center">{t('my_nfts')}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nfts.map((nft) => (
                    <div key={nft.id} className="bg-gray-800 rounded-lg overflow-hidden">
                        <img
                            src={nft.image}
                            alt={nft.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{nft.name}</h3>
                            <p className="text-gray-400 mb-4">{nft.description}</p>
                            <div className="space-y-2">
                                <div className="relative group">
                                    <p className="text-sm break-all">
                                        {t('token_id')}: {nft.id}
                                    </p>
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                        {t('tooltip_hash')}
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <a
                                        href={`https://etherscan.io/token/${nft.id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300"
                                    >
                                        {t('view_on_etherscan')}
                                    </a>
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                        {t('tooltip_explorer')}
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <Link
                    to="/nft-mint"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    {t('mint_nft')}
                </Link>
            </div>
        </div>
    );
};

export default MyNfts; 