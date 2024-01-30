import Navbar from "./Compnents/Navbar";
import "./App.css";
import Slider from "./Compnents/Slider";
import Nav2 from "./Compnents/Nav2";
import Main from "./Compnents/Main";
import { useState } from "react";
import Moktails from "./Compnents/Moktails";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const [search, setsearch] = useState(null);
  const updatesearch = (name) => {
    setsearch(name);
  };
  const [Msearch, setMsearch] = useState(null);
  const updateM = (Mname)=>{
      setMsearch(Mname)
  };
  const [mav, setmav] = useState(1);
  const updatemav = (mav) => {
    setmav(mav);
  };
  const [ibu, setibu] = useState(10);
  const updateibu = (ibu) => {
    setibu(ibu);
  };
  return (
    <>
      <Router>
        <Navbar />
        <Slider />
        <Routes>
          <Route
            path="/mocktails"
            element={
              <Nav2
                search={updateM}
                mav={updatemav}
                ibu={updateibu}
                ph="MocKtails"
                flag={false}
              />
            }
          />

          <Route
            path="/"
            element={
              <Nav2
                search={updatesearch}
                mav={updatemav}
                ibu={updateibu}
                ph="Beer"
                flag={true}
              />
            }
          ></Route>
        </Routes>
        <Routes>
          <Route path="/mocktails" element={<Moktails name={Msearch}/>} />

          <Route
            path="/"
            element={
              <Main
                name={search === null ? "" : `beer_name=${search}`}
                mav={mav}
                ibu={ibu}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
