import "../../general-css/general.css";

const ListCheckbox: React.FC<{ defaultChecked: boolean }> = (props) => {
  return (
    <div className="container__checkbox">
      <input
        type="checkbox"
        defaultChecked={props.defaultChecked}
        className={`${props.defaultChecked ? "checked" : ""}`}
      />
      <span className="checkmark"></span>
    </div>
  );
};

export default ListCheckbox;
