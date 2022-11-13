import React, { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Result from './components/Result';

// Type declarations
type ResultsStateType = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
};

const App = () => {
  const [city, setCity] = useState<string>('');
  const [results, setResults] = useState<ResultsStateType>({
    country: '',
    cityName: '',
    temperature: '',
    conditionText: '',
    icon: '',
  });
  const getWeather = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=e83949a5a85a460e8e923412220811&q=${city}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => {
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_f,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
        });
      });
  };
  // JSX
  return (
    <div>
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Result results={results} />
    </div>
  );
};

export default App;
