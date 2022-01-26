const TypedInput: React.FC<{
  id: string;
  name: string;
  text: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  type?: string;
}> = (props) => {
  const atrr = { ...props };
  delete atrr.hasError;

  return (
    <div>
      <label htmlFor={props.id}>{props.text}</label>
      <input {...atrr} required />
      {props.hasError && (
        <p>{props.value.trim() ? `Invalid ${props.name}` : "Required field"}</p>
      )}
    </div>
  );
};

export default TypedInput;
