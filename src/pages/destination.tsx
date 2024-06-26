import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Data from "../data.json";

interface Destination {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

const Destination = () => {
  const [data, setData] = useState<Destination | null>(null);
  const { destination } = useParams();
  const [active, setActive] = useState<number>(0);

  const handleSetActive = (index: number) => {
    setActive(index);
  };

  const fetch = async () => {
    const response = await axios.get(
      `https://space-tourism-backend-production-e99b.up.railway.app/api/destination/${destination}`
    );
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    fetch();
  }, [destination]);

  return (
    <>
      <div
        className="xl:pr-[164px] xl:pb-[112px] xl:pl-[165px] xl:pt-[212px]  md:p-[38.5px] p-6 min-h-[100vh] font-normal  xl:bg-[url('/destination/background-destination-desktop.jpg')] md:bg-[url('/destination/background-destination-tablet.jpg')] bg-[url('/destination/background-destination-mobile.jpg')] "
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <p className="xl:tracking-[4.73px] xl:mt-0 xl:text-[28px] md:mt-[97.5px] md:text-start md:text-[20px] md:tracking-[3.38px] mt-[88px] text-[16px] font-barlow text-center text-white uppercase">
          <span className="mr-[18px] font-bold font-barlow opacity-[0.25]">
            01
          </span>
          Pick your destination
        </p>
        <div className="xl:flex xl:mt-14 xl:pl-[63px] xl:gap-[157px]">
          <div className="xl:mt-[33px] xl:justify-normal md:mt-[60px] flex justify-center mt-8 xl:flex-1">
            <img
              className="xl:w-[445px] xl:h-[445px] md:w-[300px] md:h-[300px] w-[170px] h-[170px] "
              src={data?.images.png}
            />
          </div>
          <div className="xl:flex-1">
            <div className="xl:m-0 xl:justify-normal md:mt-[53px] md:gap-[35px] mt-[26px] flex gap-[25.5px] justify-center">
              {Data.destinations.map((item, index) => {
                return (
                  // როგორ ხვდება რომელი ითემ ნეიმი მიანიჭოს
                  <Link to={`/destination/` + item.name} key={index}>
                    <div
                      onClick={() => handleSetActive(index)}
                      className="cont"
                    >
                      <p className="md:text-[16px] md:tracking-[2.7px] uppercase text-white text-[14px] font-barlow ">
                        {item.name}
                      </p>
                      <div
                        className={`md:mt-3 h-[3px]  bg-white opacity-[0.5] mt-2  w-calc ${
                          index == active ? "opacity-[1] block" : "hidden show"
                        }`}
                      ></div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <h1 className="uppercase xl:text-[100px] xl:text-start xl: md:mt-8 text-[80px]  text-white  font-bellefair text-center mt-[20px]">
              {data?.name}
            </h1>
            <p className="xl:text-[18px] xl:text-start xl:m-0 xl:mt-3 md:ml-[59px] md:mr-[60px] md:mt-2 md:text-[16px] md:leading-[1.75] text-light text-[15px] leading-[1.67] text-center font-normalBarlow ">
              {data?.description}
            </p>

            <div className="xl:m-0 xl:mt-[54px] md:ml-[59px] md:mr-[60px] md:mt-[59px] h-[1px] bg-divColor mt-8  "></div>
            <footer className="xl:justify-normal xl:gap-[68px] xl:m-0 xl:mt-7 md:justify-evenly md:ml-[117px] md:mr-[118px] md:flex-row md:gap-[11px] md:mt-[28px] flex justify-center mt-8 flex-col gap-8">
              <div className=" flex justify-center  flex-col ">
                <p className="xl:text-start  font-barlow tracking-[ 1.25px] text-light text-[14px] tracking-[2.36px] text-center">
                  AVG. DISTANCE
                </p>
                <p className="mt-[12px] text-white text-center font-bellefair text-[28px] uppercase">
                  {data?.distance}
                </p>
              </div>
              <div className=" flex justify-center  flex-col ">
                <p className="xl:text-start   font-barlow tracking-[ 1.25px] text-light text-[14px] tracking-[2.36px] text-center uppercase">
                  Est. travel time
                </p>
                <p className="xl:text-start  mt-[12px] text-white text-center font-bellefair text-[28px] uppercase">
                  {data?.travel}
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
