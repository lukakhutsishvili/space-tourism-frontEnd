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
        className="p-6 min-h-[100vh] font-normal "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <p className="mt-[88px] text-[16px] font-barlow text-center text-white uppercase">
          <span className="mr-[18px] font-bold font-barlow opacity-[0.25]">
            02
          </span>
          Meet your crew
        </p>
        <div className="flex justify-center mt-8">
          <img className="w-[170px] h-[170px] " src={data?.images.png} />
        </div>
        <div className="h-[1px] bg-divColor"></div>
        <div className="mt-[26px] flex gap-[25.5px] justify-center">
          {Data.crew.map((item, index) => {
            return (
              // როგორ ხვდება რომელი ითემ ნეიმი მიანიჭოს
              <Link to={`/crew/` + item.name} key={index}>
                <div
                  onClick={() => handleSetActive(index)}
                  className={`w-[10px] h-[10px] rounded-[50%]  bg-white  mt-2   ${
                    index == active
                      ? "opacity-[1]"
                      : " opacity-[0.24]  hover:opacity-[0.5] "
                  }`}
                ></div>
              </Link>
            );
          })}
        </div>
        <div className="mt-[26px] "></div>
        <p className=" text-light text-[16px] text-center font-bellefair opacity-[0.5] mt-8 uppercase">
          {data?.role}
        </p>
        <h1 className="text-[24px]  text-white  font-bellefair text-center mt-[8px] uppercase">
          {data?.name}
        </h1>
        <p className="mt-4 text-center text-[15px]  font-barlow text-light  ">
          {data?.bio}
        </p>
      </div>
    </>
  );
};

export default Crew;
