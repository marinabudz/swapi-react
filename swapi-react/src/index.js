//swapi.dev
import React from "react";
import ReactDOM from "react-dom";
import SwapiService from "./services/swapi";
import App from "./components/app/app";

ReactDOM.render(<App />, document.getElementById("root"));

// const allPeople = new SwapiService();

// allPeople.getAllPeople().then(item => {
//   item.forEach(item => console.log(item.name));
// });
// allPeople.getPerson(1).then(item => console.log(item));
