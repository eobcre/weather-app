// Type
type ResultPropsType = {
  result: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
  };
};

export const Result = (props: ResultPropsType) => {
  return (
    // JSX
    <div className='text-xl text-white'>
      {props.result.country && <div>{props.result.country}</div>}
      {props.result.cityName && (
        <div className='py-4'>{props.result.cityName}</div>
      )}
      {props.result.temperature && (
        <div>
          {props.result.temperature}
          <span> °F</span>
        </div>
      )}
      {props.result.conditionText && (
        <div>
          <img className='mx-auto' src={props.result.icon} alt='Icon' />
          <span>{props.result.conditionText}</span>
        </div>
      )}
    </div>
  );
};
