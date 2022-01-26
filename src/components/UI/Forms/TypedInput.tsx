const TypedInput: React.FC<{
  id: string;
  text: string;
  value: string;
  type?: string;
}> = (props) => {
  let { type } = props;

  return (
    <div>
      <label htmlFor={props.id}>{props.text}</label>
      <input id={props.id} value={props.value} {...type} required />
    </div>
  );
};

export default TypedInput;
