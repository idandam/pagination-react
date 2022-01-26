const PaginationList: React.FC<{
  pagesToDisplay: number[];
  onPreviousPage: () => void;
  onNextPage: () => void;
  onPageChange: (event: any) => void;
  inEditMode: boolean;
}> = (props) => {
  return (
    <div>
      <button onClick={props.onPreviousPage} disabled={props.inEditMode}>
        {"<"}
      </button>
      {props.pagesToDisplay.map((page) => (
        <button
          key={page}
          onClick={props.onPageChange}
          disabled={props.inEditMode}
        >
          {page}
        </button>
      ))}
      <button onClick={props.onNextPage} disabled={props.inEditMode}>
        {">"}
      </button>
    </div>
  );
};

export default PaginationList;
