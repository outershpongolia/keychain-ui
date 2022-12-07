import React from "react";
import "./Menu.scss";
import { ERoute } from "src/constants";

// Components
import { MenuItem } from "../MenuItem/MenuItem";

// Icons
import { HomeIcon } from "src/icons/HomeIcon";
import { GalleryIcon } from "src/icons/GalleryIcon";
import { AboutIcon } from "src/icons/AboutIcon";

interface IMenuProps {}

export const Menu: React.FC<IMenuProps> = () => {
    return (
        <div className="menu">
            <MenuItem 
                label="home" 
                route={ERoute.HOME} 
                Icon={HomeIcon} 
            />

            <MenuItem 
                label="gallery" 
                route={ERoute.GALLERY} 
                Icon={GalleryIcon} 
            />

            <MenuItem 
                label="about" 
                route={ERoute.ABOUT} 
                Icon={AboutIcon} 
            />
        </div>
    )
}