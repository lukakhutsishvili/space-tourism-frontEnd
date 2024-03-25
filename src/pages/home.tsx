const Home: React.FC<{ setHideMenu(param: boolean): void }> = ({
  setHideMenu,
}) => {
  return (
    <>
      <div
        className="xl:pb-[131px] xl:pl-[165px] xl:pr-[88px] xl:gap-[303px] xl:flex xl:pt-[387px] md:p-[162px] p-6 min-h-[100vh] font-normal xl:bg-[url('/home/background-home-desktop.jpg')] md:bg-[url('/home/background-home-tablet.jpg')] bg-[url('/home/background-home-mobile.jpg')] "
        style={{
          // backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div>
          <p className="xl:text-[28px] xl:tracking-[4.73px] xl:text-left xl:mt-0 md:mt-[40px] md:text-[20px] md:tracking-[3.38px] mt-[92px] text-[16px] font-barlow text-center text-light">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className="xl:text-left md:text-[150px] md:mt-6 text-[80px]  text-white mt-4 font-bellefair text-center ">
            SPACE
          </h1>
          <p className="xl:text-[18px] xl:leading-[1.78] xl:text-left md:mt-6 md:text-[16px]  mt-4 text-light text-[15px] leading-[1.67] text-center font-normalBarlow ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <footer className=" xl:mt-0 md:mt-[156px] flex justify-center mt-[81px]">
          <div
            onClick={() => setHideMenu(false)}
            className="  duration-300 ease-linear   xl:hover:w-[450px] xl:hover:h-[450px] xl:bg-transparent xl:hover:bg-hoveExplore color xl:w-[450px] xl:h-[450px]  md:w-[242px] md:h-[242px] md:hover:w-[300px] md:hover:h-[300px]  w-[150px] h-[150px] rounded-[50%] bg-hoveExplore flex justify-center items-center  cursor-pointer hover:w-[200px] hover:h-[200px]"
          >
            <div className="xl:w-[272px] xl:h-[272px] md:w-[242px] md:h-[242px] bg-white rounded-[50%] w-[150px] h-[150px]  flex justify-center items-center ">
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
