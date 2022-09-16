import "./MenuButton.scss";
import { useEffect, useState } from "react";

interface MenuBurgerProps {
    isOpen: boolean;
    onClick: () => void;
}

const MenuBurger = ({ isOpen, onClick }: MenuBurgerProps) => {
    return (
        <div
            className={`checkbox__menu ${isOpen && "active"}`}
            onClick={onClick}
        >
            {/* <input
                type='checkbox'
                id='checkbox__menu'
                defaultChecked={isOpen}
                onClick={onClick}
            /> */}
            <div className='bars__contianer'>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default MenuBurger;
