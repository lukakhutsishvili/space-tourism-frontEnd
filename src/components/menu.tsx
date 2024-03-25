import { Link } from "react-router-dom";
import closebutton from "/shared/icon-close.svg";
import { menuType } from "../type";

const Menu: React.FC<menuType> = ({
  hideMenu,
  setHideMenu,
  infoType,
  setInfoType,
}) => {
  console.log(hideMenu);
  return (
    <div
      className={`xl:pl-[123px] x;:pr-[167px] xl:right-0 xl:left-[610px] xl:top-10 md:justify-between md:left-[318px] md:flex md:flex-row md:h-[96px] md:pt-0 md:pl-[48px] md:pr-[48px]  absolute z-10 left-[121px] h-full bg-blur right-0 top-0 backdrop-blur-[81.5px] pl-8 pt-[34px] ${
        !hideMenu ? "block animate-slideLeft md:animate-none" : "hidden "
      }`}
    >
      <div className="flex justify-end pr-[26.5px] md:hidden">
        <img
          className="hover:cursor-pointer "
          src={closebutton}
          onClick={() => setHideMenu(!hideMenu)}
        />
      </div>
      <Link to="/">
        <div
          onClick={() => {
            setInfoType("Home");
            setHideMenu(true);
          }}
          className=" md:mt-[39px] md:h-available md:flex-col cont mt-[60px] flex items-center h-[31px] hover:cursor-pointer "
        >
          <p className="  md:text-[14px] md:tracking-[2.36px] font-barlow text-4  tracking-[2.7px] text-white ">
            <span className="md:hidden xl:inline">00</span>{" "}
            <span className="font-normal ">HOME</span>
          </p>
          <div
            className={`md:w-full md:h-[3px] md:mt-auto h-[31px] w-1 bg-white opacity-[0.5] ml-auto show   ${
              infoType == "Home" ? "block opacity-[1]" : "hidden"
            }`}
          ></div>
        </div>
      </Link>
      <Link
        to="/destination/Moon
      "
      >
        <div
          onClick={() => {
            setInfoType("Destination");
            setHideMenu(true);
          }}
          className="md:mt-[39px] md:h-available md:flex-col cont mt-[60px] flex items-center h-[31px] hover:cursor-pointer "
        >
          <p className="xl:text-[16px] md:text-[14px] md:tracking-[2.36px] font-barlow text-4  tracking-[2.7px] text-white ">
            <span className="md:hidden  xl:inline">01</span>{" "}
            <span className="font-normal ">DESTINATION</span>
          </p>
          <div
            className={` md:w-full md:h-[3px] md:mt-auto h-[31px] w-1 bg-white opacity-[0.5] ml-auto show   ${
              infoType == "Destination" ? "block opacity-[1]" : "hidden"
            }`}
          ></div>
        </div>
      </Link>
      <Link to={"/crew/Douglas Hurley"}>
        <div
          onClick={() => {
            setInfoType("Crew");
            setHideMenu(true);
          }}
          className="md:mt-[39px] md:h-available md:flex-col cont mt-[60px] flex items-center h-[31px] hover:cursor-pointer "
        >
          <p className="xl:text-[16px] md:text-[14px] md:tracking-[2.36px] font-barlow text-4 font-bold tracking-[2.7px] text-white ">
            <span className="md:hidden  xl:inline">02</span>{" "}
            <span className="font-normal ">CREW</span>
          </p>
          <div
            className={`md:w-full md:h-[3px] md:mt-auto h-[31px] w-1 bg-white opacity-[0.5] ml-auto show   ${
              infoType == "Crew" ? "block opacity-[1]" : "hidden"
            }`}
          ></div>
        </div>
      </Link>
      <Link to={"/technology/" + "Launch vehicle"}>
        <div
          onClick={() => {
            setInfoType("Technology");
            setHideMenu(true);
          }}
          className="md:mt-[39px] md:h-available md:flex-col cont mt-[60px] flex items-center h-[31px] hover:cursor-pointer "
        >
          <p className="xl:text-[16px] md:text-[14px] md:tracking-[2.36px] font-barlow text-4 font-bold tracking-[2.7px] text-white ">
            <span className="md:hidden  xl:inline">03</span>{" "}
            <span className="font-normal ">TECHNOLOGY</span>
          </p>
          <div
            className={` md:w-full md:h-[3px] md:mt-auto h-[31px] w-1 bg-white opacity-[0.5] ml-auto show   ${
              infoType == "Technology" ? "block opacity-[1]" : "hidden"
            }`}
          ></div>
        </div>
      </Link>
    </div>
  );
};

export default Menu;
