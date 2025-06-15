import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

/**
 * SmartContract Component
 * 
 * Simulates deploying a basic smart contract with code preview and deployment status.
 * 
 * קומפוננט חוזה חכם
 * 
 * מדמה פרסום חוזה חכם בסיסי עם תצוגה מקדימה של הקוד וסטטוס פרסום.
 */
const SmartContract = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [isDeploying, setIsDeploying] = useState(false);
    const [contractAddress, setContractAddress] = useState('');
    const [transactionHash, setTransactionHash] = useState('');

    // Sample Solidity contract code
    // קוד חוזה Solidity לדוגמה
    const contractCode = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private value;
    
    event ValueChanged(uint256 newValue);
    
    function setValue(uint256 _value) public {
        value = _value;
        emit ValueChanged(_value);
    }
    
    function getValue() public view returns (uint256) {
        return value;
    }
}`;

    const handleDeploy = () => {
        setIsDeploying(true);

        // Simulate deployment delay
        // סימולציה של השהיית פרסום
        setTimeout(() => {
            const address = '0x' + Math.random().toString(16).slice(2, 42);
            const hash = '0x' + Math.random().toString(16).slice(2, 42);
            setContractAddress(address);
            setTransactionHash(hash);
            setIsDeploying(false);
        }, 2000);
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8 text-center">{t('smart_contract')}</h1>

            <div className="bg-gray-800 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">{t('contract_code')}</h2>
                <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{contractCode}</code>
                </pre>
            </div>

            <div className="relative group">
                <button
                    onClick={handleDeploy}
                    disabled={isDeploying}
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${isDeploying
                            ? 'bg-gray-600 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                >
                    {isDeploying ? t('deploying') : t('deploy_contract')}
                </button>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {t('tooltip_deploy')}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                </div>
            </div>

            {contractAddress && (
                <div className="mt-8 p-4 bg-green-900 rounded-lg">
                    <h3 className="text-lg font-medium mb-2">{t('deployed_successfully')}</h3>
                    <div className="space-y-2">
                        <div className="relative group">
                            <p className="text-sm break-all">
                                {t('contract_address')}: {contractAddress}
                            </p>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                {t('tooltip_hash')}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                            </div>
                        </div>
                        <div className="relative group">
                            <p className="text-sm break-all">
                                {t('transaction_hash')}: {transactionHash}
                            </p>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                {t('tooltip_hash')}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate(`/explorer/${transactionHash}`)}
                        className="mt-4 text-blue-400 hover:text-blue-300"
                    >
                        {t('view_on_blockchain')}
                    </button>
                </div>
            )}
        </div>
    );
};

export default SmartContract; 