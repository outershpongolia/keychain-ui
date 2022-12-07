import React from "react";
import "./WalletLayout.scss";
import { walletAtom } from "src/atoms/wallet";
import { useRecoilValue } from "recoil";

// Components
import { Wallet } from "../Wallet/Wallet";

interface IWalletLayoutProps {}

export const WalletLayout: React.FC<IWalletLayoutProps> = () => {
    const data = useRecoilValue(walletAtom)

    return (
        <div className="wallet-layout">
            {data.map(x => {
                return (
                    <Wallet key={x.address} data={x} />
                )
            })}
        </div>
    )
}