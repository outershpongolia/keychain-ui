import React from "react";

export interface IWallet {
    name: string
    key: string
    items: IItem[]
}

export interface IItem {
    name: string
    image: string
    isProfile: boolean
}

export interface IIconProps extends React.ComponentProps<"svg"> {}