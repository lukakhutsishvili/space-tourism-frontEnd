import { Route, Routes } from "react-router-dom";
import { Destination, Home } from "./pages";
import { Header, Menu } from "./components";
import { useState } from "react";
import Crew from "./pages/crew";
import Technology from "./pages/technology";

//zogjer rato fuwert funqciis gamodzaxebisas () zogjer ara?

function App() {
  const [hideMenu, setHideMenu] = useState<boolean>(true);
  const [infoType, setInfoType] = useState<string>("Home");

  return (
    <>
      <Menu
        infoType={infoType}
        setInfoType={setInfoType}
        hideMenu={hideMenu}
        setHideMenu={setHideMenu}
      />
      {/* <Menu hideMenu={hideMenu} setHideMenu={()=>setHideMenu} /> armushaobda */}
      {/* <Menu hideMenu={hideMenu} setHideMenu={(param)=>setHideMenu(param)} /> armushaobda tu calke types ar agvwerdi */}
      <Header hideMenu={hideMenu} setHideMenu={setHideMenu} />
      <Routes>
        <Route path="/" element={<Home setHideMenu={setHideMenu} />} />
        <Route path="/destination/:destination" element={<Destination />} />
        <Route path="/crew/:name" element={<Crew />} />
        <Route path="/technology/:name" element={<Technology />} />
      </Routes>
    </>
  );
}

export default App;
