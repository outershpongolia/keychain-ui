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
        name: "CWKA...kW06",
        key: "1",
        items: [
            {
                name: "Kai #1231",
                image: characterImage,
                isProfile: true
            },
            {
                name: "Kai #2142",
                image: characterImage,
                isProfile: false
            },
            {
                name: "Fox",
                image: characterImage,
                isProfile: false
            },
            {
                name: "Supersniper",
                image: characterImage,
                isProfile: true
            },
            {
                name: "Kai #9221",
                image: characterImage,
                isProfile: false
            },
            {
                name: "Kai #533",
                image: characterImage,
                isProfile: false
            }
        ]
    },
    {
        name: "PSDA...53DA",
        key: "2",
        items: [
            {
                name: "Kai #6643",
                image: characterImage,
                isProfile: false
            },
            {
                name: "Kai #7434",
                image: characterImage,
                isProfile: false
            }
        ]
    },
    {
        name: "LsS2...rf22",
        key: "3",
        items: [
            {
                name: "Kai #5555",
                image: characterImage,
                isProfile: false
            },
            {
                name: "Kai #1111",
                image: characterImage,
                isProfile: false
            },
            {
                name: "Kai #3333",
                image: characterImage,
                isProfile: false
            }
        ]
    }
]

export const favorites: IWallet = {
    name: "favorites",
    key: "0",
    items: [
        {
            name: "Supersniper",
            image: characterImage,
            isProfile: true
        },
        {
            name: "Kai #7434",
            image: characterImage,
            isProfile: false
        }
    ]
} 