import "./MenuButton.scss";

interface MenuBurgerProps {
  checked: boolean;
  onClick: () => void;
}

const MenuBurger = ({ checked, onClick }: MenuBurgerProps) => {
  return (
    <div>
      <input
        type='checkbox'
        id='checkbox__menu'
        defaultChecked={checked}
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
