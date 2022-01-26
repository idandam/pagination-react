const Checkbox: React.FC<{
  id: string;
  name: string;
  text: string;
  type: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.text}</label>
      <input {...props} />
    </div>
  );
};
export default Checkbox;
