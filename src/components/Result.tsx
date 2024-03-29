import { ResultPropsType } from './Types';

export const Result = (props: ResultPropsType) => {
  return (
    // JSX
    <div className='text-xl text-white'>
      {props.results.country && <div>{props.results.country}</div>}
      {props.results.cityName && (
        <div className='py-4'>{props.results.cityName}</div>
      )}
      {props.results.temperature && (
        <div>
          {props.results.temperature}
          <span> °F</span>
        </div>
      )}
      {props.results.conditionText && (
        <div>
          <img className='mx-auto' src={props.results.icon} alt='Icon' />
          <span>{props.results.conditionText}</span>
        </div>
      )}
    </div>
  );
};
