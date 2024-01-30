import React, { useState } from "react";
import "./Nav2.css";
export default function Nav2(props) {
  const [name, setname] = useState("");
  
  const searchClick = () => {
    if (name === "") {
      props.search(null);
    } else {
      props.search(name);
    }
  };
  const funcOnChange = (event) => {
    setname(event.target.value);
  };
  const [flag, setflag] = useState(false);
  const funcfilter = () => {
    if (flag) {
      setflag(false);
    } else {
      setflag(true);
    }
  };
  const [ibu, setibu] = useState(1)
  const chngeibu=(event)=>{
    setibu(event.target.value);
  }
  
  const [ev, setev] = useState(1)
  const chngeav=(event)=>{
    setev(event.target.value)
  }
  const filterhandle=()=>{
    props.mav(ev)
    props.ibu(ibu)
    setflag(false)
  }
  const Resethandle=()=>{
    setev(1)
    setibu(10)
    props.mav(ev)
    props.ibu(ibu)
    setflag(false)
  }
  return (
    <>
      <div className="mynav2 my-5">
        <p className="text-center" style={{ fontSize: "2.5rem" }}>
          Uncover the Secrets of Your Favorite Drink!
        </p>

        <form className="form-inline my-2 my-lg-0 myform">
          <input
            className="form-control mr-sm-2"
            value={name}
            onChange={funcOnChange}
            type="search"
            placeholder= {`Search ${props.ph}`}
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            onClick={searchClick}
            type="button"
          >
            Search{" "}
          </button>
        </form>
      </div>
      {props.flag && <div
        className="container  d-flex"
        style={{ alignItems: "center", cursor: "pointer" }}
        onClick={funcfilter}
      >
        <i className="fa fa-filter" style={{ fontSize: "36px" }}></i>
        <b>Filter</b>
      </div>}
      {flag && (
        <div
          className="container d-flex "
          style={{
            border: "0.5px solid black",
            width: "40%",
            flexDirection: "column",
            borderRadius: "20px",
            backgroundColor: "antiquewhite",
            position:"absolute",
            zIndex :"2",
            alignItems:"center"
          }}
        >
          <div className="my-4 d-flex">
            <b> Set Minimum Alochol Value : </b>
            <input
              type="range"
              onChange={chngeav}
              id="volume"
              name="volume"
              value={ev}
              min="0"
              max="10"
            /> {ev}
          </div>
          <div className="my-4 d-flex">
            <b>Set Minimum International Bitterness Unit : </b>
            <input
              type="range"
              onChange={chngeibu}
              id="volume"
              value={ibu}
              name="volume"
              min="10"
              max="100 "
            />{ibu}
          </div>
          <div>
          <button type="button" style={{width:"70px"}}  onClick = {filterhandle} className="btn btn-dark btn-sm my-2 mx-3">submit</button>
          <button type="button" style={{width:"70px"}}  onClick = {Resethandle} className="btn btn-dark btn-sm my-2 mx-3">Reset</button>
          </div>

        </div>
      )}
    </>
  );
}
