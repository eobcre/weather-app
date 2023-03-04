// App
export type ResultStateType = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
};

// Form
export type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: any) => void;
};

// Result
export type ResultPropsType = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
  };
};
