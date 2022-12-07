import React from "react";
import { useRecoilValue } from "recoil";
import { favoritesAtom } from "src/atoms/favorites";
import "./Gallery.scss";

// Components
import { Wallet } from "src/components/Wallet/Wallet";
import { WalletLayout } from "src/components/WalletLayout/WalletLayout";
import { Menu } from "src/components/Menu/Menu";

interface IGalleryProps {}

export const Gallery: React.FC<IGalleryProps> = () => {
    const favorites = useRecoilValue(favoritesAtom)

    return (
        <div className="gallery">
            <Wallet data={favorites} /> 

            <WalletLayout />

            <Menu />
        </div>
    )
}