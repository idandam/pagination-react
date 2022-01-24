/**
 * 
 * @param start starting index
 * @param limit maximum number of pages
 * @returns {number[]} array of consecutive pages
 */
const getConsecutivePages = (start: number, limit: number): number[] => {
  return new Array(limit).fill(0).map((_, index) => start + index + 1);
};

export default getConsecutivePages;
