import { StyledPagination } from "./styled";

const Pagination = () => {
  return (
    <StyledPagination
      count={50}
      // onChange={(event, page) => onPageChangeCallback(event, page - 1)}
      page={5}
      showFirstButton
      showLastButton
      siblingCount={0}
    />
  );
};

export default Pagination;
