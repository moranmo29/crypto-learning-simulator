import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const NftMint = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        image: null
    });
    const [previewUrl, setPreviewUrl] = useState(null);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle image upload and preview
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                image: file
            }));
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    // Generate random token ID and hash
    const generateTokenId = () => {
        return Math.floor(Math.random() * 10000);
    };

    const generateHash = () => {
        return '0x' + Math.random().toString(16).substring(2, 42);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create NFT object
        const newNft = {
            id: generateTokenId(),
            hash: generateHash(),
            name: formData.name,
            description: formData.description,
            image: previewUrl,
            createdAt: new Date().toISOString()
        };

        // Get existing NFTs from localStorage or initialize empty array
        const existingNfts = JSON.parse(localStorage.getItem('nfts') || '[]');

        // Add new NFT and save to localStorage
        localStorage.setItem('nfts', JSON.stringify([...existingNfts, newNft]));

        // Navigate to My NFTs page
        navigate('/my-nfts');
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6 text-right">
                        {t('mint_nft')}
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* NFT Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-right">
                                {t('nft_name')}
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-right"
                                dir="rtl"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 text-right">
                                {t('nft_description')}
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-right"
                                dir="rtl"
                            />
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 text-right">
                                {t('upload_image')}
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <div className="flex text-sm text-gray-600">
                                        <label
                                            htmlFor="image"
                                            className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                                        >
                                            <span>{t('upload_image')}</span>
                                            <input
                                                id="image"
                                                name="image"
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                className="sr-only"
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Preview */}
                        {previewUrl && (
                            <div className="mt-4">
                                <img
                                    src={previewUrl}
                                    alt="NFT Preview"
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                            </div>
                        )}

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                {t('create_nft')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NftMint; 