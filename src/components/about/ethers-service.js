import { ethers } from 'ethers';
import { useState, useEffect } from 'react'





// This code will assume you are using MetaMask.
// It will also assume that you have already done all the connecting to metamask
// this is purely here to show you how the public API hooks together
// export const ethersProvider = new ethers.providers.Web3Provider(window.ethereum);

export const getAddress = async() => {

    const [ethersProvider, setEthersProvider] = useState({});

    useEffect( async () => {
        if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            setEthersProvider(provider);
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Accounts: ", accounts[0]);
            return accounts[0];
        }
    }, []);
}

export const signText = (text) => {

    const [ethersProvider, setEthersProvider] = useState({});

    useEffect( async () => {
        if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            setEthersProvider(provider);
        }
    }, []);

    // const [ethersProvider, setEthersProvider] = useState({});

    // useEffect( async () => {
    //     if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
    //         const provider = new ethers.providers.Web3Provider(window.ethereum);
    //         console.log("Provider: ", provider);
    //         setEthersProvider(provider);
    //         return ethersProvider.signMessage(text);
    //     }
    // }, []);
}