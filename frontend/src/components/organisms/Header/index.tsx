import { Grid, styled } from "@mui/material";
import React from "react";
import theme from "../../../themes";
import Divider from "../../atoms/Divider";
import Logo from "../../atoms/Logo";
import Typography from "../../atoms/Typography";
import LinkIcon from "../../molecules/LinkIcon";
import DropDownIcon from "../../../assets/icons/arrow-drop-down-24-px.svg";
import Explore from "../Explore";
import NotificationIcon from "../../../assets/icons/notifications-none-24-px.svg";
import Image from "../../atoms/Image";
import AvatarImg from "../../../assets/header-avatar-px@3x.png";
import SearchResult from "../SearchResult";
import { useNavigate } from "react-router-dom";
const StyledHeaderContainer = styled(Grid)({
  height: "70px",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  border: `1px solid ${theme.palette.grey["300"]}`,
  borderBottom: "none",
  boxShadow: `0 8px 6px -6px ${theme.palette.grey["300"]}`,
});
const TwoDivContainer = styled(Grid)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const Header = () => {
  const navigate = useNavigate();
  return (
    <StyledHeaderContainer container>
      <TwoDivContainer item container>
        <Grid item display="flex" flexDirection="row" alignItems="center">
          <Grid item margin="0px 18px">
            <Logo />
          </Grid>
          <Grid item marginRight="27px">
            <Typography variant="subtitle1" color="#3e3f42"  data-cy="logo-text">
              Z-Athena
            </Typography>
          </Grid>
          <Grid item>
            <Divider orientation="vertical"></Divider>
          </Grid>
          <Grid item margin="0px 9px 0px 24px" data-cy="home-button">
            <LinkIcon
              text="Home"
              textTypography={{ variant: "body2", color: "#3e3f42" }}
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
              />
          </Grid>
          <Grid item marginRight="21px" data-cy="explore-button">
            <Explore />
          </Grid>
          <Grid item data-cy="my-library-button" >
            <LinkIcon
              text="My Library"
              textTypography={{ variant: "body2", color: "#3e3f42" }}
              endIcon={DropDownIcon}
              imageProps={{
                width: "8px",
                height: "4px",
              }}
              onClick={() => {
                navigate("/myLibrary");
                window.scrollTo(0, 0);
              }}
              />
          </Grid>
        </Grid>

        <Grid item display="flex" flexDirection="row" alignItems="center">
          <Grid item margin="0px 46px 0px 0px" data-cy="search-result">
            <SearchResult />
          </Grid>
          <Grid item>
            <Image src={NotificationIcon} data-cy="notification-icon"></Image>
          </Grid>
          <Grid item margin="0px 30px 0px 30px">
            <Image src={AvatarImg} width="38px" height="38px" data-cy="avatar"></Image>
          </Grid>
        </Grid>
      </TwoDivContainer>
    </StyledHeaderContainer>
  );
};

export default Header;
