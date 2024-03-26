import { Link, useParams } from "react-router-dom";
import backgroundImage from "/crew/background-crew-mobile.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import Data from "../data.json";

interface Crew {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

const Crew = () => {
  const [data, setData] = useState<Crew | null>(null);
  const { name } = useParams();
  const [active, setActive] = useState<number>(0);

  const handleSetActive = (index: number) => {
    setActive(index);
  };

  const fetch = async () => {
    const response = await axios.get(
      `https://space-tourism-backend-production-e99b.up.railway.app/api/crew/${name}`
    );
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    fetch();
  }, [name]);

  return (
    <>
      <div
        className="xl:pr-[137px] md:pb-[0px] xl:pl-[165px] xl:pt-[212px] md:flex md:flex-col  md:p-[38.5px] p-6 min-h-[100vh] font-normal  xl:bg-[url('/crew/background-crew-desktop.jpg')] md:bg-[url('/crew/background-crew-tablet.jpg')] bg-[url('/crew/background-crew-mobile.jpg')] "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <section className="xl:flex-row flex flex-col xl:gap-[81px]">
          <div className="flex flex-col ">
            <p className=" xl:tracking-[4.73px] xl:mt-0 xl:text-[28px] md:mt-[97.5px] md:text-start md:text-[20px] md:tracking-[3.38px] mt-[88px] text-[16px] font-barlow text-center text-white uppercase">
              <span className="mr-[18px] font-bold font-barlow opacity-[0.25]">
                02
              </span>
              Meet your crew
            </p>

            <div className="xl:hidden md:mt-10 md:order-2 flex justify-center mt-8">
              <img
                className="md:min-w-[456.4px] md:min-h-[532px] w-[170px] h-[170px] "
                src={data?.images.png}
              />
            </div>

            <div className="md:hidden h-[1px] bg-divColor"></div>
            <div className="xl:mt-[120px] xl:justify-normal md:mt-10 md:order-1 mt-[26px] flex gap-[25.5px] justify-center">
              {Data.crew.map((item, index) => {
                return (
                  // როგორ ხვდება რომელი ითემ ნეიმი მიანიჭოს
                  <Link to={`/crew/` + item.name} key={index}>
                    <div
                      onClick={() => handleSetActive(index)}
                      className={`xl:w-[15px] xl:h-[15px] w-[10px] h-[10px] rounded-[50%]  bg-white  mt-2   ${
                        index == active
                          ? "opacity-[1]"
                          : " opacity-[0.24]  hover:opacity-[0.5] "
                      }`}
                    ></div>
                  </Link>
                );
              })}
            </div>
            <p className="xl:m-0 xl:mt-[154px] xl:text-[32px] xl:text-start md:text-[24px] md:mt-[60px] text-light text-[16px] text-center font-bellefair opacity-[0.5] mt-8 uppercase">
              {data?.role}
            </p>
            <h1 className="xl:text-start xl:mt-[15px] xl:text-[56px] md:text-[40px]  text-[24px]  text-white  font-bellefair text-center mt-[8px] uppercase">
              {data?.name}
            </h1>
            <p className="xl:pr-[45px] xl:leading-[1.78] xl:p-0 xl:text-[18px] xl:mt-[27px] xl:text-start md:pr-[117px] md:pl-[117px] md:text-[16px] mt-4 text-center text-[15px] font-normalBarlow text-light  ">
              {data?.bio}
            </p>
          </div>
          <div className="hidden xl:block">
            <img
              className="min-w-[568px] h-[702px] mt-[-14px] "
              src={data?.images.png}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Crew;
