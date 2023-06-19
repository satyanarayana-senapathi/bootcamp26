import * as React from "react";
import MuiPagination from "@mui/material/Pagination";
import { styled } from "@mui/system";
interface PaginationProps {
  totalPages: number;
  onClick: (pageNumber: number) => void;
}
const StyledPagination = styled(MuiPagination)({
  display: "flex",
  justifyContent: "center",
  "& .MuiPaginationItem-root": {
    margin: "5px 12px",
    border: "none",
    "& .MuiPaginationItem-icon": {
      color: "primary.main",
    },
  },
  ul: {
    border: "1px solid #dfe3eb",
    padding: "1px",
    borderRadius: "4px",
  },
  li: {
    "&:first-of-type": {
      borderRight: "1px solid #dfe3eb",
    },
    "&:last-of-type": {
      borderLeft: "1px solid #dfe3eb",
    },
  },
});
const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {
  const [page, setPage] = React.useState(1);
  const handleClick = (event: React.BaseSyntheticEvent, value: number) => {
    setPage(value);
    props.onClick(value);
  };
  return (
    <StyledPagination
      count={props.totalPages}
      shape="rounded"
      color="primary"
      page={page}
      onChange={handleClick}
      role="pagination"
    />
  );
};
export default Pagination;
