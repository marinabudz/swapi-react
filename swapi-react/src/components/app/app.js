import React from "react";
import Header from "../header/header";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import PlanetDetails from "../planet-details/planet-details";
import StarshipDetails from "../starship-details/starship-details";
import RandomPlanet from "../random-planet/random-planet";
import "./app.css";

const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />
      <div className="row mb-2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};
export default App;
