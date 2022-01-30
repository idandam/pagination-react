import "../../general-css/general.css";

const Message: React.FC<{ message: string }> = (props) => {
  return (
    <div className="container container__message">
      <p>{props.message}</p>
    </div>
  );
};

export default Message;
