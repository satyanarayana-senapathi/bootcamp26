import React from "react";
import { Box } from "@mui/material";
import Close from "../../../assets/icons/close-24-px.svg";
import Image from "../../atoms/Image";
import IconButton from "@mui/material/IconButton";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import messages from "../../../utils/messages";
import theme from "../../../themes";
interface MenuHeaderProps {
  handleClose: () => void;
  stateHandler?: (arg: number) => void;
}

const MenuHeader: React.FC<MenuHeaderProps> = (props: MenuHeaderProps) => {
  const [tabNumber, setTabNumber] = React.useState(1);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabNumber(newValue);
    props.stateHandler && props.stateHandler(newValue);
  };
  return (
    <Box
      sx={{ display: "flex", padding: "15px 0px" }}
      data-testid="menu header"
    >
      <Tabs
        value={tabNumber}
        onChange={handleChange}
        textColor="primary"
        sx={{ flexGrow: 1 }}
        TabIndicatorProps={{
          style: {
            display: "none",
          },
        }}
      >
        {messages.headerItems.map((type, index) => (
          <Tab
            key={index}
            value={index + 1}
            label={type}
            sx={{ marginRight: theme.spacing(30) }}
          />
        ))}
      </Tabs>

      <IconButton
        aria-label="close"
        onClick={props.handleClose}
        sx={{ paddingRight: "24px" }}
      >
        <Image src={Close} alt="close" />
      </IconButton>
    </Box>
  );
};
export default MenuHeader;
