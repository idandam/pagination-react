const getStartPageOffset = (
  currPage: number,
  pages: number,
  maxPagesToDisplay: number
): number => {
  // The common case
  let startPageOffset =
    Math.floor((currPage - 1) / maxPagesToDisplay) * maxPagesToDisplay;
  // If reached to the end of the displayed panigation list
  // and the number of hidden pages left is less then the total number of pages
  // then start from an offset that will allow to display the required number of pages
  // until the last page
  if (
    (currPage - 1) % maxPagesToDisplay === 0 &&
    pages - currPage < maxPagesToDisplay
  ) {
    startPageOffset = pages - maxPagesToDisplay;
  }
  return startPageOffset;
};

export default getStartPageOffset;
