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
  return (
    // JSX
    <div className='bg-webTop h-screen w-screen bg-center text-center flex justift-center items-center'>
      <div className='glass mx-auto py-6 px-6 rounded-md md:w-3/5'>
        <Title />
        <Form setCity={setCity} getWeather={getWeather} />
        <Result results={results} />
      </div>
    </div>
  );
};

export default App;
