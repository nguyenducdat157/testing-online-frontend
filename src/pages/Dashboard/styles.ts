import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    topArea: {
      display: "flex",
      justifyContent: "center",
      height: "1024px",
      background: "linear-gradient(180deg, #560872 0%, #5A31FF 100%)",
      marginTop: "-72px",
      alignItems: "center",
    },
    topLeft: {
      maxWidth: "560px",
    },
    bottomArea: {
      height: "500px",
      padding: "132px 97px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    content: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "50px",
      width: "100%",
      "& > div": {
        textAlign: "center",
        rowGap: "30px",
        alignItems: "center",
        width: "413px",
      },
      "& svg": {
        width: "151px",
        height: "112px",
      },
    },
  };
});

export default useStyles;
