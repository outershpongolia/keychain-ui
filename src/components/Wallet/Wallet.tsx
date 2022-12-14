import React, { useCallback, useEffect, useRef, useState } from "react";
import { IWallet } from "src/interfaces";
import "./Wallet.scss";

// Components
import { WalletItem } from "../WalletItem/WalletItem";

// Icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { StarIcon } from "src/icons/StarIcon";

interface IWalletProps {
    data: IWallet
}

export const Wallet: React.FC<IWalletProps> = ({ data }) => {
    const [ isWalletOpened, setIsWalletOpened ] = useState(true)
    const [ drawerHeight, setDrawerHeight ] = useState(0)

    const drawerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setDrawerHeight(drawerRef.current?.clientHeight || 0)
    }, [ setDrawerHeight, drawerRef ])

    useEffect(() => {
        window.addEventListener("resize", () => {setDrawerHeight(drawerRef.current?.clientHeight || 0)})
    }, [ setDrawerHeight, drawerRef ])

    const handleToggleWallet = useCallback(() => {
        setIsWalletOpened(isWalletOpened => !isWalletOpened)
    }, [ setIsWalletOpened ])

    return (
        <div className={`wallet ${data.address === "favorites" && "wallet_favorites"}`}>
            <div 
                className="wallet__header" 
                onClick={handleToggleWallet}
            >
                <div className="wallet__wrapper">
                    <div className="wallet__number">
                        {data.address === "favorites" ? <StarIcon className="wallet__star" /> : data.order}
                    </div>
                    <div className="wallet__name">{data.address === "favorites" ? "my favorites" : data.address}</div>
                </div>

                <div className="wallet__wrapper wallet__wrapper_right">
                    <div className="wallet__items">{data.nfts.length}</div>

                    {isWalletOpened
                    ? <IoIosArrowDown 
                        className="wallet__icon"  
                    />
                    : <IoIosArrowUp
                        className="wallet__icon" 
                    />
                    }
                </div>
            </div>

            <div 
                style={{
                    height: isWalletOpened ? `${drawerHeight}px` : "0px",
                    transition: "all 0.2s",
                    overflow: "hidden"
                }}
            >
                <div className="wallet__grid" ref={drawerRef}>
                    {data.nfts.map(x => {
                        return (
                            <WalletItem 
                                key={x.name + data.address}
                                name={x.name} 
                                image={x.image} 
                                isProfile={x.isProfile} 
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}