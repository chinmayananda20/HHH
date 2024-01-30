import React, { useEffect, useState } from "react";
import Card from "./Card.js";
export default function Main(props) {
  const [data, setData] = useState([]);
  const [pageno, setpageno] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      let url = `https://api.punkapi.com/v2/beers?${props.name}&abv_gt=${props.mav}&ibu_gt=${props.ibu}&page=${pageno}&per_page=10`;
      try {
        let response = await fetch(url);
        let data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [props.name,props.mav,props.ibu]);
  const prevpage = async () => {
    let url = `https://api.punkapi.com/v2/beers?${props.name}&page=${
      pageno - 1
    }&per_page=10`;
    try {
      let response = await fetch(url);
      let data = await response.json();
      setData(data);

      setpageno(pageno - 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const nextpage = async () => {
    let url = `https://api.punkapi.com/v2/beers?${props.name}&page=${
      pageno + 1
    }&per_page=10`;
    try {
      let response = await fetch(url);
      let data = await response.json();
      setData(data);
      setpageno(pageno + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container" id="main">
      {data.map((element, index) => (
        <div key={index}>
          <Card
            name={element.name}
            img={element.image_url}
            tagline={element.tagline}
            fst={element.first_brewed}
            desc={element.description}
            abv={element.abv}
            food={element.food_pairing}
            person={element.contributed_by}
            tips={element.brewers_tips}
            ibu ={element.ibu}
          />
        </div>
      ))}
      <div className="d-flex justify-content-between my-5">
        <button

          type="button"
          disabled={pageno === 1}
          onClick={prevpage}
          className="btn btn-dark"
        >
          <a href="#main" style={{color:"white"}}> &larr; Prev</a>
          
        </button>
        {pageno}
        <button
          type="button"
          disabled={pageno >= 20}
          onClick={nextpage}
          className="btn btn-dark"
        >
          
          <a href="#main" style={{color:"white"}}> Next &rarr;</a>
        </button>
      </div>
    </div>
  );
}
