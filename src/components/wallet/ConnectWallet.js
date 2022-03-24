import React, { useEffect, useState } from "react";
import { Modal, Button } from "../elements";
import { useConnect, useAccount } from "wagmi";

import Image from 'next/image'

import metamaskLogo from "../../../public/wallets/metamask.svg";
import walletConnectLogo from "../../../public/wallets/walletconnect.png";

export const ConnectWallet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [
    {
      data: { connector, connectors },
      loading,
    },
    connect,
  ] = useConnect();

  const [{ data: accountData }, disconnect] = useAccount();

  useEffect(() => {
    if (accountData) {
      setIsWalletConnected(true);
      console.log(accountData);
    }
  }, [accountData]);

  const handleLogout = async () => {
    if (accountData?.address) {
      disconnect();
      setIsWalletConnected(false);
      console.log("Successfully disconnected!")
    }
  };

  const handleConnectWallet = async (x) => {
    setIsProcessing(true);

    try {
      await connect(x);
      setIsProcessing(false);
      setIsModalOpen(false);
    } catch (e) {
      console.log(e);
      setIsProcessing(false);
      setIsModalOpen(false);
    }
  };

  const handleConnectButton = async () => {
    setIsProcessing(true);
    setIsModalOpen(true);
  };

  if (loading) return <div className="h-12"></div>;

  return (
    <div>
      {isProcessing ? (
        <Button disabled>Processing...</Button>
      ) : (
        <>
          {!isWalletConnected ? (
            <Button onClick={() => handleConnectButton()}>
              Connect Wallet
            </Button>
          ) : (
            <Button onClick={() => handleLogout()}>Logout</Button>
          )}
        </>
      )}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsProcessing(false);
            setIsModalOpen(false);
          }}
        >
          <div className="bg-white">
            {connectors.map((x) => (
              <button
                className={"hover:bg-gray-100 text-gray-700 p-4 w-full rounded"}
                disabled={!x.ready}
                key={x.name}
                onClick={() => handleConnectWallet(x)}
              >
                <div>
                  {x.name === "MetaMask" && (
                    <Image
                      src={metamaskLogo}
                      width={50}
                      height={50}
                      alt="MetaMask"
                      className="mx-auto"
                    />
                  )}
                  {x.name === "WalletConnect" && (
                    <img
                      src={walletConnectLogo}
                      width={50}
                      height={50}
                      alt="Wallet Connect"
                      className="mx-auto"
                    />
                  )}
                </div>
                <div className={"text-gray-900 text-3xl font-bold my-4"}>
                  {x.name}
                </div>
                <div className={"text-gray-400 font-regular text-xl my-4"}>
                  {x.name === "MetaMask" && "Connect to your MetaMask Wallet"}
                  {x.name === "WalletConnect" &&
                    "Scan with WalletConnect to connect"}
                </div>
                <div>
                  {!x.ready && " (unsupported)"}
                  {loading && x.name === connector?.name && "…"}
                </div>
              </button>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
};