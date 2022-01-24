const PaginationList: React.FC<{
  pagesToDisplay: number[];
  onPreviousPage: () => void;
  onNextPage: () => void;
  onPageChange: (event: any) => void;
}> = (props) => {
  return (
    <div>
      <button onClick={props.onPreviousPage}>{"<"}</button>
      {props.pagesToDisplay.map((page) => (
        <button key={page} onClick={props.onPageChange}>
          {page}
        </button>
      ))}
      <button onClick={props.onNextPage}>{">"}</button>
    </div>
  );
};

export default PaginationList;
