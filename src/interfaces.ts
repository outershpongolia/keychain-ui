import React from "react";

export interface IWallet {
    address: string
    key_address: string
    order: string
    nfts: IItem[]
}

export interface IItem {
    name: string
    image: string
    isProfile: boolean
    url: string
    attributes?: unknown
}

export interface IIconProps extends React.ComponentProps<"svg"> {}