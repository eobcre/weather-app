// Icon
import React from 'react';
import { FaSearch } from 'react-icons/fa';

// Type declarations
type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: any) => void;
};

const Form = (props: FormPropsType) => {
  return (
    <form>
      <input
        type='text'
        name='city'
        placeholder='Search City'
        onChange={(e) => props.setCity(e.target.value)}
      />
      <button type='submit' onClick={props.getWeather}>
        <FaSearch />
      </button>
    </form>
  );
};

export default Form;
