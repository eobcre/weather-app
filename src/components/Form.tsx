import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Form = () => {
  const [city, setCity] = useState<string>("");
  const getWeather = (e: any) => {
    e.preventDefault();
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=e83949a5a85a460e8e923412220811&q=London&aqi=no"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <form>
      <input
        type="text"
        name="city"
        placeholder="Search City"
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" onClick={getWeather}>
        <FaSearch />
      </button>
    </form>
  );
};

export default Form;
