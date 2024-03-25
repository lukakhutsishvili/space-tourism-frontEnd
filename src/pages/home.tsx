import backgroundImage from "/home/background-home-mobile.jpg";

const Home: React.FC<{ setHideMenu(param: boolean): void }> = ({
  setHideMenu,
}) => {
  return (
    <>
      <div
        className="md:p-[162px] p-6 min-h-[100vh] font-normal "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <p className="md:mt-[40px] md:text-[20px] md:tracking-[3.38px] mt-[92px] text-[16px] font-barlow text-center text-light">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h1 className="md:text-[150px] md:mt-6 text-[80px]  text-white mt-4 font-bellefair text-center ">
          SPACE
        </h1>
        <p className="md:mt-6 md:text-[16px]  mt-4 text-light text-[15px] leading-[1.67] text-center font-barlow ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        <footer className="md:mt-[156px] flex justify-center mt-[81px]">
          <div
            onClick={() => setHideMenu(false)}
            className="md:w-[242px] md:h-[242px] md:hover:w-[242px] md:hover:h-[242px]  w-[150px] h-[150px] rounded-[50%] bg-hoveExplore flex justify-center items-center trans cursor-pointer hover:w-[200px] hover:h-[200px]"
          >
            <div className="md:w-[242px] md:h-[242px] bg-white rounded-[50%] w-[150px] h-[150px]  flex justify-center items-center ">
              <p className="md:text-[32px] md:tracking-[2px] text-[20px]  font-bellefair tracking-[ 1.25px] ">
                EXPLORE
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
