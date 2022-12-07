import { atom } from "recoil";
import { data } from "src/constants";

export const walletAtom = atom({
    key: "walletAtom",
    default: data
})