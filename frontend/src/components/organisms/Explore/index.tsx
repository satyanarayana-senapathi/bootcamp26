import { Backdrop, Menu, Box, Grid } from "@mui/material";
import React, { useState } from "react";
import Divider from "../../atoms/Divider";
import LinkIcon from "../../molecules/LinkIcon";
import exploreDown from "../../../assets/icons/arrow-drop-down-24-px.svg";
import MenuHeader from "../../molecules/ExploreMenuHeader";
import messages from "../../../utils/messages";
const Explore: React.FC = () => {
  const [currentState, setCurrentState] = useState(1);
  const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.BaseSyntheticEvent) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  const handleState = (state: number) => {
    setCurrentState(state);
  };
  const renderNavItems = () => {
    return (
      <Box
        sx={{
          paddingLeft: "95px",
          paddingBottom: "128px",
          backgroundColor: "grey.100",
        }}
      >
        <Grid container>
          {messages.categories.map((category, index) => (
            <Grid item key={index} xs={4} sx={{ pt: "30px" }}>
              <LinkIcon
                text={category.title}
                startIcon={category.icon}
                imageProps={{
                  width: "20px",
                  height: "20px",
                }}
                textTypography={{
                  variant: "subtitle2",
                  color: "greyCharcoal.main",
                }}
                hoverColor="primary.main"
              />
              {category.types.map((type, key) => (
                <Grid key={key} item sx={{ marginTop: "8px" }}>
                  <LinkIcon
                    text={type}
                    hoverColor="primary.main"
                    textTypography={{
                      variant: "subtitle2",
                      color: "greyCharcoal.main",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  const navItems = () => {
    if (currentState === 1) return renderNavItems();
    return (
      <Box sx={{ display: "flex", justifyContent: "center", margin: "95px" }}>
        Coming soon
      </Box>
    );
  };
  return (
    <Box>
      <LinkIcon
        text="Explore"
        endIcon={exploreDown}
        onClick={handleClick}
        textTypography={{ variant: "body2", color: "greyCharcoal.main" }}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClick}
        marginThreshold={0}
        elevation={0}
        PaperProps={{
          style: {
            marginTop: "27px",
            marginLeft: "-100px",
          },
        }}
        MenuListProps={{
          disablePadding: true,
        }}
        data-cy="explore-menu"
      >
        <Box>
          <Box sx={{ marginLeft: "95px" }}>
            <MenuHeader handleClose={handleClose} stateHandler={handleState} />
          </Box>
          <Divider orientation="horizontal" />
          {navItems()}
        </Box>
      </Menu>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          marginTop: "73px",
        }}
        open={open}
        onClick={handleClose}
        data-testid="backdrop"
      ></Backdrop>
    </Box>
  );
};
export default Explore;
