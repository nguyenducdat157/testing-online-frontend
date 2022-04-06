import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    navbarItem: {
      "&:hover": {
        color: "#FF67C9",
      },
    },
    navbarBaseline: {
      height: "4px",
      background: "#fff",
    },
  };
});

export default useStyles;
