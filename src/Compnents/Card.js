import React from "react";
import "./Card.css";
export default function (props) {
  return (
    <div>
      <div className="card mb-3 border">
        <div className="row g-0">
          <div className="col-md-4 imgcenter">
            <img
              src={props.img}
              style={{ width: "150px" }}
              className="img-fluid rounded-start mx-5 "
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{props.name}</h1>
              <p>{props.tagline}</p>
              <p>{props.desc}</p>
              <p>
                <b>First brewed on :</b> {props.fst}
              </p>
              <p>
                <b>Alcohol by volume :</b> {props.abv}
              </p>
              <p>
                <b>International Bitterness Unit :</b> {props.ibu}
              </p>
              <h3>Food Pairings</h3>
              {props.food.map((foodItem, index) => (
                <li key={index}>{foodItem}</li>
              ))}
              <br />
              <p>
                <b>Brewers Tips : </b>
                {props.tips}
              </p>
              <p>
                <b>Contributed_by : </b>
                {props.person}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
