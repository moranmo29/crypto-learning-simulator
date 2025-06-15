import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

/**
 * SmartContract Component
 * 
 * Simulates deploying a basic smart contract with a code preview,
 * deployment functionality, and blockchain explorer integration.
 * 
 * קומפוננט חוזה חכם
 * 
 * מדמה פריסת חוזה חכם בסיסי עם תצוגת קוד,
 * פונקציונליות פריסה ואינטגרציה עם חוקר בלוקצ'יין.
 */
const SmartContract = () => {
    const { t } = useTranslation();
    const [isDeployed, setIsDeployed] = useState(false);
    const [contractAddress, setContractAddress] = useState('');
    const [transactionHash, setTransactionHash] = useState('');

    // Generate random contract address and transaction hash
    // יצירת כתובת חוזה ומזהה עסקה אקראיים
    const generateRandomHex = (length) => {
        return '0x' + Array.from(
            { length },
            () => Math.floor(Math.random() * 16).toString(16)
        ).join('');
    };

    // Handle contract deployment
    // טיפול בפריסת החוזה
    const handleDeploy = () => {
        setContractAddress(generateRandomHex(40));
        setTransactionHash(generateRandomHex(64));
        setIsDeployed(true);
    };

    // Solidity contract code
    // קוד חוזה סולידיטי
    const contractCode = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private storedData;

    function set(uint256 x) public {
        storedData = x;
    }

    function get() public view returns (uint256) {
        return storedData;
    }
}`;

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6 text-right">
                        {t('smart_contract')}
                    </h1>

                    {/* Contract Code Section - חלק קוד החוזה */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 text-right">
                            {t('contract_code')}
                        </h2>
                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-right">
                            <code>{contractCode}</code>
                        </pre>
                    </div>

                    {/* Deploy Button - כפתור פריסה */}
                    <div className="flex justify-end mb-8">
                        <button
                            onClick={handleDeploy}
                            disabled={isDeployed}
                            className={`px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${isDeployed
                                    ? 'bg-green-600 cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-700'
                                }`}
                        >
                            {t('deploy_contract')}
                        </button>
                    </div>

                    {/* Deployment Results - תוצאות הפריסה */}
                    {isDeployed && (
                        <div className="space-y-4 text-right">
                            <div className="bg-green-50 border border-green-200 rounded-md p-4">
                                <p className="text-green-800 font-medium">
                                    {t('deployed_successfully')}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-700">
                                    {t('contract_address')}:
                                </p>
                                <p className="text-sm text-gray-600 break-all">
                                    {contractAddress}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-700">
                                    {t('transaction_hash')}:
                                </p>
                                <p className="text-sm text-gray-600 break-all">
                                    {transactionHash}
                                </p>
                            </div>
                            <div className="pt-4">
                                <Link
                                    to={`/explorer/${transactionHash}`}
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                                >
                                    {t('view_on_blockchain')}
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SmartContract; 