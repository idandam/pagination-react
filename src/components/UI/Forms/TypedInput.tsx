const TypedInput: React.FC<{
  id: string;
  text: string;
  value: string;
  // onChange: (event: any) => void;
  // onBlur: (event: any) => void;
  type?: string;
}> = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.text}</label>
      <input {...props} required />
    </div>
  );
};

export default TypedInput;
