import { useState } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Result from "./components/Result";

const App = () => {
  const [city, setCity] = useState<string>("");
  const getWeather = (e: any) => {
    e.preventDefault();
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=e83949a5a85a460e8e923412220811&q=London&aqi=no"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  // JSX
  return (
    <div>
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Result />
    </div>
  );
};

export default App;
