import React, { Component } from "react";
import "./random-planet.css";
import SwapiService from "../../services/swapi";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();
  state = {
    population: null,
    rotationPeriod: null,
    diameter: null,
    name: null
  };
  updatePlanet = () => {
    this.swapiService.getPlanet(7).then(planet => {
      this.setState({
        name: planet.name,
        population: planet.population,
        diameter: planet.diameter,
        rotationPeriod: planet.rotation_period
      });
    });
  };
  render() {
    const { name, population, rotationPeriod, diameter } = this.state;
    return (
      <div className="random-planet jumbotron rounded">
        <img
          className="planet-image"
          src="https://starwars-visualguide.com/assets/img/planets/5.jpg"
        />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
