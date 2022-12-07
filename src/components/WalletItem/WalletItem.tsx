import React, { useCallback } from "react";
import { ProfileIcon } from "src/icons/ProfileIcon";
import "./WalletItem.scss";

interface IWalletItemProps {
    image: string
    name: string
    isProfile: boolean
}

export const WalletItem: React.FC<IWalletItemProps> = ({ image, name, isProfile }) => {

    const handleOpenPopup = useCallback(() => {
        // here goes the function for opening popup
    }, [])

    return (
        <div className="wallet-item" onClick={handleOpenPopup}>
            <img className="wallet-item__image" src={image} alt={name} />

            <div className="wallet-item__name">{name}</div>

            {isProfile && <ProfileIcon className="wallet-item__icon" />}
        </div>
    )
}