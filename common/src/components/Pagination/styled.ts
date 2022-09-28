import { styled } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

export const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& > ul": {
    justifyContent: "flex-end",
    marginTop: `${theme.spacing(2)}px`,
  },
}));
