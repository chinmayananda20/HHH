import React from "react";
export default function (props) {
  const date=(s)=>{
    const dateTimeArray = s.split(' ');

  // Extract the date component
  const dateComponent = dateTimeArray[0];

  // Return the extracted date
  return dateComponent;
  }
  return (
    <div>
      <div className="card mb-3 border">
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      {date(props.date)}
      </span>
        <div className="row g-0">
          <div className="col-md-4 imgcenter">
            
            <img
              src={props.img}
              style={{ width: "300px" }}
              className="img-fluid rounded-start mx-5 "
              alt="..."
            />
          </div>
          <div className="col-md-8 ">
            <div className="card-body" style={{fontFamily: "Poor Story, system-ui"}}>
              <h1 className="card-title">{props.name}</h1>
              <span><b>Type : </b>{props.category} </span>
              {/* <p><b>Glass Type : </b>{props.glass}</p> */}
              <span class="badge rounded-pill bg-warning">{props.glass}</span>
              <h4><b>Ingredients : </b></h4>
              {props.i1 && <li>{props.i1}</li>}
              {props.i2 && <li>{props.i2}</li>}
              {props.i3 && <li>{props.i3}</li>}
              {props.i4 && <li>{props.i4}</li>}
              {props.i5 && <li>{props.i5}</li>}
              {props.i6 && <li>{props.i6}</li>}
              {props.i7 && <li>{props.i7}</li>}
              {props.i8 && <li>{props.i8}</li>}
              {props.i9 && <li>{props.i9}</li>}
              {props.i10 && <li>{props.i10}</li>}
              {props.i11 && <li>{props.i11}</li>}
              {props.i12 && <li>{props.i12}</li>}
              {props.i13 && <li>{props.i13}</li>}
              {props.i14 && <li>{props.i14}</li>}
              {props.i15 && <li>{props.i15}</li>}

              <h4><b>Recipee : </b></h4>              
               <p>{props.instructions}</p>






            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
