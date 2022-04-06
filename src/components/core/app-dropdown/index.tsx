import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import * as React from "react";
import { FC } from "react";

interface Props {
  title: string;
  listItem: string[];
}

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 10,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "#222222",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "27px",
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const StyledButton = styled(Button)({
  background: "#2E042F !important",
  borderRadius: "40px",
  height: "48px",
});

const AppDropDown: FC<Props> = (props) => {
  const { title, listItem } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <StyledButton
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        startIcon={
          <Avatar
            sx={{
              bgcolor: "transparent",
              border: "2px solid #fff",
              width: "30px",
              height: "30px",
            }}
          />
        }
        sx={{ fontSize: "18px", fontWeight: 600, gap: "6px" }}
      >
        {title}
      </StyledButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {listItem.map((item, index) => (
          <MenuItem key={index} onClick={handleClose} disableRipple>
            {item}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};

export default AppDropDown;
