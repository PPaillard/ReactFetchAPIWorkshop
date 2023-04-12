import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const [coffee, setCoffee] = useState(null);

  const getCoffee = () => {
    /*
    // récuperation des données
    fetch("https://random-data-api.com/api/coffee/random_coffee")
      // transformation des données
      .then((response) => response.json())
      // utilisation des données
      .then((coffeeObj) => setCoffee(coffeeObj));
      */

    axios
      .get("https://random-data-api.com/api/coffee/random_coffee")
      .then((response) => setCoffee(response.data));
  };
  useEffect(getCoffee, []);

  return (
    <div className="App">
      <h1>SUPPA COFFEE</h1>
      {coffee && <CoffeeCard coffee={coffee} />}
    </div>
  );
}

export default App;
