import menuButton from "/shared/icon-hamburger.svg";
import logo from "/shared/logo.svg";
import { headerType } from "../type";

const Header: React.FC<headerType> = ({ setHideMenu, hideMenu }) => {
  return (
    <header className="md:left-[39px] flex justify-between items-center absolute top-6 left-6 right-6 ">
      <img src={logo} alt="logo" />
      <img
        className="hover:cursor-pointer md:hidden"
        src={menuButton}
        alt="manuButton"
        onClick={() => setHideMenu(!hideMenu)}
      />
    </header>
  );
};

export default Header;
