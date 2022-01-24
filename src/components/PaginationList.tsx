const PaginationList: React.FC<{ pagesToDisplay: number[] }> = (props) => {
  return (
    <div>
      <button>{"<"}</button>
      {props.pagesToDisplay.map((page) => (
        <a href="#">{page}</a>
      ))}
      <button>{">"}</button>
    </div>
  );
};

export default PaginationList;