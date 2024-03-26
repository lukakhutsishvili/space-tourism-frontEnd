import { Link, useParams } from "react-router-dom";
import backgroundImage from "/technology/background-technology-mobile.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import Data from "../data.json";

interface Technology {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

const Technology = () => {
  const [data, setData] = useState<Technology | null>(null);
  const { name } = useParams();
  const [active, setActive] = useState<number>(0);

  const handleSetActive = (index: number) => {
    setActive(index);
  };

  const fetch = async () => {
    const response = await axios.get(
      `https://space-tourism-backend-production-e99b.up.railway.app/api/technology/${name}`
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
        className="xl:pr-[0] xl:pb-[101px] xl:pl-[165px] xl:pt-[212px] md:pt-[38.5px] md:pb-[96px]  pt-6 min-h-[100vh] font-normal xl:bg-[url('/technology/background-technology-desktop.jpg')] md:bg-[url('/technology/background-technology-tablet.jpg')] bg-[url('/technology/background-technology-mobile.jpg')]  "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <p className=" xl:p-0 xl:tracking-[4.73px] xl:mt-0 xl:text-[28px] md:pl-[38.5px] md:mt-[97.5px] md:text-start md:text-[20px] md:tracking-[3.38px] mt-[88px] text-[16px] font-barlow text-center text-white uppercase">
          <span className="mr-[18px] font-bold font-barlow opacity-[0.25]">
            03
          </span>
          SPACE LAUNCH 101
        </p>
        <section className="xl:flex xl:mt-[26px] xl:gap-[130px] xl:items-center">
          <div className=" xl:m-0 xl:order-3 md:mt-[60px] flex justify-center mt-8">
            <img
              className="xl:hidden md:h-[320px] w-full h-[170px] "
              src={data?.images.landscape}
            />
            <img
              className="hidden xl:block min-w-[515px] xl:w-full xl:h-[527px]"
              src={data?.images.portrait}
            />
          </div>
          <div className="xl:flex xl:gap-[80px]">
            <div className="xl:justify-normal xl:mt-0 xl:flex-col md:mt-[56px] mt-[34px] flex gap-[25.5px] justify-center">
              {Data.technology.map((item, index) => {
                return (
                  // როგორ ხვდება რომელი ითემ ნეიმი მიანიჭოს
                  <Link to={`/technology/` + item.name} key={index}>
                    <div
                      onClick={() => handleSetActive(index)}
                      className={`xl:w-[80px] xl:h-[80px] md:w-[60px] md:h-[60px] w-[40px] h-[40px] rounded-[50%] border-borderWidth border border-solid border-borderColor  flex justify-center items-center ${
                        index == active
                          ? "text-black bg-white"
                          : "border-borderColor hover:border-white hover:text-white "
                      }`}
                    >
                      <p
                        className={`md:text-[24px] text-[16px] font-bellefai ${
                          index == active ? "text-black " : "text-white "
                        }`}
                      >
                        {index + 1}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div>
              <p className="xl:m-0 xl:text-start md:mt-11 md:text-[16px] text-light text-[14px] text-center font-barlow mt-[26px] uppercase tracking-[2.36px] ">
                THE TERMINOLOGY…
              </p>
              <h1 className="xl:m-0 xl:text-start xl:text-[56px] xl:mt-[11px] md:mt-[16px] md:text-[40px] text-[24px]  text-white  font-bellefair text-center mt-[8px] uppercase">
                {data?.name}
              </h1>
              <p className="xl:p-0 xl:m-0 xl:text-start xl:text-[18px] xl:leading-[1.78] md:pl-[155px] md:pr-[155px] md:leading-[1.75] md:mt-[16px] md:text-[16px] mt-4 text-center text-[15px]  font-normalBarlow text-light leading-[1.67] pl-6 pr-6 ">
                {data?.description}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Technology;
