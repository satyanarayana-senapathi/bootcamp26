import { Box, Container } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Typography from "../../components/atoms/Typography";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import ExploreBooks from "../../components/organisms/ExploreBooks";
import Pagination from "../../components/organisms/Pagination";
const StyledDiv = styled("div")({
  marginTop: "30px",
});
const SearchResultPage: React.FC = () => {
  const query = new URLSearchParams(useLocation().search);
  const totalResult = query.get("totalResult");
  const total = totalResult ? parseInt(totalResult) : 1;
  const countPerPage = 8;
  const totalPages = Math.ceil(total / countPerPage);
  const value = query.get("value");
  let searchText = "";
  if (value !== null) searchText = value;
  const [page, setPage] = useState(1);
  const handlePaginationClick = (pageNumber: number) => {
    setPage(pageNumber);
  };
  return (
    <Container sx={{ width: "1440px" }}>
      <StyledDiv>
        <Box sx={{ display: "flex" }}>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">
              <Typography variant="body2" color="greyCharcoal.main">
                Sort by
              </Typography>
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Sort by"
            />
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120, marginLeft: "24px" }}>
            <InputLabel id="demo-simple-select-label">
              <Typography variant="body2" color="greyCharcoal.main">
                Categories
              </Typography>
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Categories"
            />
          </FormControl>
        </Box>
      </StyledDiv>
      <StyledDiv>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h5"
            color="greySlate.main"
            data-cy="searched-text"
          >
            Search Results for {searchText}
          </Typography>
          <Box sx={{ marginLeft: "13px" }}>
            <Typography
              variant="subtitle1"
              color="icon.main"
              data-cy="pages-and-results-returned"
            >
              1-{totalPages}page of {total} result
            </Typography>
          </Box>
        </Box>
      </StyledDiv>
      <StyledDiv>
        <ExploreBooks page={page} search={searchText} />
      </StyledDiv>
      <Box sx={{ marginTop: "30px" }}>
        <Pagination
          totalPages={totalPages}
          onClick={handlePaginationClick}
          data-cy="pagination"
        />
      </Box>
    </Container>
  );
};
export default SearchResultPage;
