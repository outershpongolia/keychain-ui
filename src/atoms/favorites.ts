import { atom } from "recoil";
import { favorites } from "src/constants";

export const favoritesAtom = atom({
    key: "favoritesAtom",
    default: favorites
})