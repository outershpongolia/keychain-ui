import React from "react";
import { NavLink } from "react-router-dom";
import { ERoute } from "src/constants";
import "./MenuItem.scss";

interface IMenuItemProps {
    route: ERoute
    Icon: ({ className }: React.ComponentProps<"svg">) => JSX.Element
    label: string
}

export const MenuItem: React.FC<IMenuItemProps> = ({ route, Icon, label }) => {
    return (
        <NavLink 
            className={({ isActive }) => `menu-item ${isActive ? 'menu-item_active' : ''}`}  
            to={route}
        >
            <Icon className="menu-item__icon" />

            <div className="menu-item__title">{label}</div>
        </NavLink>
    )
}