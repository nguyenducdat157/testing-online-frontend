import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    container: {
      background: "#1B0D51",
      padding: "60px 0px 0px !important",
      width: "100% !important",
      color: "#fff",
    },
    footerTop: {
      display: "flex",
      padding: "0px 141px",
      justifyContent: "space-between",
      "&>:first-child": {
        width: "320px",
        alignItems: "center",
      },
      "&>:nth-child(2)": {
        display: "grid",
        columnGap: "30px",
        gridTemplateColumns: "1fr 1fr 1fr",
        marginTop: "50px",
        "& > a": {
          textDecoration: "none",
          width: "fit-content",
          color: "#fff",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
    line: {
      height: "1px",
      background: "#C4c4c4",
      marginTop: "13px",
      marginBotoom: "13px",
    },
    footerBotoom: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "14px",
      lineHeight: "21px",
      padding: "13px 102px",
    },
  };
});

export default useStyles;
