import "./MenuButton.scss";
import { useEffect, useState } from "react";

interface MenuBurgerProps {
    isOpen: boolean;
    onClick: () => void;
}

const MenuBurger = ({ isOpen, onClick }: MenuBurgerProps) => {
    return (
        <div>
            <input
                type='checkbox'
                id='checkbox__menu'
                defaultChecked={isOpen}
                onClick={onClick}
            />
            <label htmlFor='checkbox__menu' className='bars__contianer'>
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
    );
};

export default MenuBurger;
