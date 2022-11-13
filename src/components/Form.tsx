// Icon
import { FaSearch } from 'react-icons/fa';

// Type declarations
type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: any) => void;
};

const Form = (props: FormPropsType) => {
  // JSX
  return (
    <form>
      <input
        type='text'
        name='city'
        placeholder='Search City'
        onChange={(e) => props.setCity(e.target.value)}
        className='px-2 py-1 mb-6 outline-none rounded-md'
      />
      <button type='submit' onClick={props.getWeather}>
        <FaSearch className='ml-4' />
      </button>
    </form>
  );
};

export default Form;
