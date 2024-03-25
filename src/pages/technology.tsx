import { Link, useParams } from "react-router-dom";
import backgroundImage from "/crew/background-crew-mobile.jpg";
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
        className="md:pt-[38.5px] md:pb-[96px]  pt-6 min-h-[100vh] font-normal "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <p className="md:pl-[38.5px] md:mt-[97.5px] md:text-start md:text-[20px] md:tracking-[3.38px] mt-[88px] text-[16px] font-barlow text-center text-white uppercase">
          <span className="mr-[18px] font-bold font-barlow opacity-[0.25]">
            03
          </span>
          SPACE LAUNCH 101
        </p>
        <div className="md:mt-[60px] flex justify-center mt-8">
          <img
            className="md:h-[320px] w-full h-[170px] "
            src={data?.images.landscape}
          />
        </div>
        <div className="md:mt-[56px] mt-[34px] flex gap-[25.5px] justify-center">
          {Data.technology.map((item, index) => {
            return (
              // როგორ ხვდება რომელი ითემ ნეიმი მიანიჭოს
              <Link to={`/technology/` + item.name} key={index}>
                <div
                  onClick={() => handleSetActive(index)}
                  className={`md:w-[60px] md:h-[60px] w-[40px] h-[40px] rounded-[50%] border-borderWidth border border-solid border-borderColor  flex justify-center items-center ${
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
        <p className="md:mt-11 md:text-[16px] text-light text-[14px] text-center font-barlow mt-[26px] uppercase tracking-[2.36px] ">
          THE TERMINOLOGY…
        </p>
        <h1 className="md:mt-[16px] md:text-[40px] text-[24px]  text-white  font-bellefair text-center mt-[8px] uppercase">
          {data?.name}
        </h1>
        <p className="md:pl-[155px] md:pr-[155px] md:leading-[1.75] md:mt-[16px] md:text-[16px] mt-4 text-center text-[15px]  font-normalBarlow text-light leading-[1.67] pl-6 pr-6 ">
          {data?.description}
        </p>
      </div>
    </>
  );
};

export default Technology;
