const Checkbox: React.FC<{
  id: string;
  text: string;
  type: string;
  checked: boolean;
}> = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.text}</label>
      <input id={props.id} type={props.type} checked={props.checked} />
    </div>
  );
};
export default Checkbox;
