import React, { useState } from 'react';
import { Title } from './components/Title';
import { Form } from './components/Form';
import { Result } from './components/Result';

// Type
type ResultType = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
};

const App = () => {
  const [city, setCity] = useState<string>('');
  const [result, setResult] = useState<ResultType>({
    country: '',
    cityName: '',
    temperature: '',
    conditionText: '',
    icon: '',
  });
  const getWeather = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=1166240cc69e4a5fa7d23121230103&q=${city}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => {
        setResult({
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
      <div className='bg-glass shadow-xl backdrop-blur-sm mx-auto py-6 px-6 rounded-xl md:w-3/5'>
        <Title />
        <Form setCity={setCity} getWeather={getWeather} />
        <Result result={result} />
      </div>
    </div>
  );
};

export default App;
