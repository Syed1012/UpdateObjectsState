import React, {useState} from "react";

const MyComponent = () => {
  const [car, setCar] = useState({
    year: 2024,
    make: "FORD",
    model: "Everest",
  });

  const handleyear = (e) => {
        setCar(c => ({...c, year: e.target.value}));
  }

  const handlemake = (e) => {
        setCar(c => ({...c, make: e.target.value}));
  }
  
  const handlemodel = (e) => {
        setCar(c => ({...c, model: e.target.value}));
  }

  return (  <div>
  <p> Your favorite car is : {car.year} {car.make} {car.model} </p>

  <p> Update the values in the below input box to display on the above line</p>

  <input type="number" value={car.year} onChange={handleyear} placeholder="Your Car Model"/> <br />

  <br />

  <input type="text" value={car.make} onChange={handlemake} placeholder="Enter Your Car Maker"/><br />

  <br />

  <input type="text" value={car.model} onChange={handlemodel} placeholder="Enter Your Car Name"/> <br />
  </div>
  
  )
};

export default MyComponent;
