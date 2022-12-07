import { IWallet } from "./interfaces";

// Images
import characterImage from "../src/images/character.png";

export enum ERoute {
    LAYOUT = "/",
    HOME = "/home",
    ABOUT = "/about",
    KEYCHAIN = "/keychain",
    DASHBOARD = "/dashboard",
    GALLERY = "/gallery",
    NOTHING_HERE = "/nothing-here"
}

export const data: IWallet[] = [
    {
        address: "CWKA...kW06",
        key_address: "",
        order: "1",
        nfts: [
            {
                name: "Kai #1231",
                image: characterImage,
                isProfile: true,
                url: ""
            },
            {
                name: "Kai #2142",
                image: characterImage,
                isProfile: false,
                url: ""
            },
            {
                name: "Fox",
                image: characterImage,
                isProfile: false,
                url: ""
            },
            {
                name: "Supersniper",
                image: characterImage,
                isProfile: true,
                url: ""
            },
            {
                name: "Kai #9221",
                image: characterImage,
                isProfile: false,
                url: ""
            },
            {
                name: "Kai #533",
                image: characterImage,
                isProfile: false,
                url: ""
            }
        ]
    },
    {
        address: "PSDA...53DA",
        key_address: "",
        order: "2",
        nfts: [
            {
                name: "Kai #6643",
                image: characterImage,
                isProfile: false,
                url: ""
            },
            {
                name: "Kai #7434",
                image: characterImage,
                isProfile: false,
                url: ""
            }
        ]
    },
    {
        address: "LsS2...rf22",
        key_address: "",
        order: "3",
        nfts: [
            {
                name: "Kai #5555",
                image: characterImage,
                isProfile: false,
                url: ""
            },
            {
                name: "Kai #1111",
                image: characterImage,
                isProfile: false,
                url: ""
            },
            {
                name: "Kai #3333",
                image: characterImage,
                isProfile: false,
                url: ""
            }
        ]
    }
]

export const favorites: IWallet = {
    address: "favorites",
    key_address: "",
    order: "0",
    nfts: [
        {
            name: "Supersniper",
            image: characterImage,
            isProfile: true,
            url: ""
        },
        {
            name: "Kai #7434",
            image: characterImage,
            isProfile: false,
            url: ""
        }
    ]
} 