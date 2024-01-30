import React, { useEffect } from "react";
import { useState } from "react";
import Mcard from "./Mcard.js";
import "./Card.css";
export default function Moktails(props) {
  const [letter, setletter] = useState("a");

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let url = "";
      if (props.name === null) {
        url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?&f=${letter}`;
      } else {
        url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${props.name}`;
      }
      try {
        let response = await fetch(url);
        let fdata = await response.json();
        setData(fdata.drinks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [props.name]);
  const prev = async () => {
    let a = String.fromCharCode(letter.charCodeAt(0) - 1);
    if (a <= "z") {
      let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${a}`;
      try {
        let response = await fetch(url);
        let fdata = await response.json();
        setData(fdata.drinks);
        setletter(String.fromCharCode(letter.charCodeAt(0) - 1));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };
  const next = async () => {
    let b = String.fromCharCode(letter.charCodeAt(0) + 1);

    // Check if the new letter is still within the alphabetic range
    if (b >= "a") {
      let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${b}`;
      try {
        let response = await fetch(url);
        let fdata = await response.json();
        setData(fdata.drinks);
        setletter(String.fromCharCode(letter.charCodeAt(0) + 1));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <div className="container my-3" id="main" style={{position:"relative"}}>
      {data.map((element, index) => (
        
        <div key={index}>
          
          <Mcard
            name={element.strDrink}
            category={element.strCategory}
            img={element.strDrinkThumb}
            glass={element.strGlass}
            instructions={element.strInstructions}
            i1={element.strIngredient1}
            i2={element.strIngredient2}
            i3={element.strIngredient3}
            i4={element.strIngredient4}
            i5={element.strIngredient5}
            i6={element.strIngredient6}
            i7={element.strIngredient7}
            i8={element.strIngredient8}
            i9={element.strIngredient9}
            i10={element.strIngredient10}
            i11={element.strIngredient11}
            i12={element.strIngredient12}
            i13={element.strIngredient13}
            i14={element.strIngredient14}
            i15={element.strIngredient15}
            date={element.dateModified}
          />
          
        </div>
        
      ))}
      <div className="d-flex justify-content-between my-5">
        <button
          type="button"
          disabled={letter === "a"}
          onClick={prev}
          className="btn btn-dark"
        >
          <a href="#main" style={{ color: "white" }}>
            {" "}
            &larr; Prev
          </a>
        </button>
        <button
          type="button"
          disabled={letter === "z"}
          onClick={next}
          className="btn btn-dark"
        >
          <a href="#main" style={{ color: "white" }}>
            {" "}
            Next &rarr;
          </a>
        </button>
      </div>
    </div>
  );
}
