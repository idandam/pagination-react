const TypedInput: React.FC<{
  id: string;
  text: string;
  value: string;
  type?: string;
  // onChange: (event: any) => void;
}> = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.text}</label>
      <input {...props} required />
    </div>
  );
};

export default TypedInput;
