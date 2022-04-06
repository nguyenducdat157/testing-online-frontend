import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  root: {
    height: "60px", // paddingTop: 12 + line-height: 18 + paddingBottom: 12
    backgroundColor: "none",
    borderRadius: 4,
    border: `1px solid #BBBBBB`,
    color: "#BBBBBB",

    "label + &": {
      marginTop: "4px",
    },
    "&.Mui-error": {
      borderColor: theme.error,
    },
  },
  modeBack: {},
  input: {
    fontSize: "20px",
    fontWeight: 500,
    padding: "22px 14px",

    // currently, i just delay background-color changed when
    // autocomplete on chrome. it should be better.
    // god bless you
    "&:-webkit-autofill": {
      transitionDelay: "9999999s",
      transitionProperty: "background-color, color",
    },

    "&::placeholder": {
      color: "#BBBBBB !important",
      opacity: 1,
      fontWeight: 500,
    },
    "&[type=number]": {
      MozAppearance: "textfield",
    },
    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
  },
  multiline: {
    padding: 0,
  },
  disableBox: {
    opacity: 0.7,
  },
  disabled: { color: `rgba(255, 255, 255, 0.8)` },
  // affect input if has start adorn
  inputAdornedStart: {
    paddingLeft: 0,
  },
  // affect input if has end adorn
  inputAdornedEnd: {
    paddingRight: 0,
  },
  adornedStart: {
    paddingLeft: 0,
  },
  // affect input if has end adorn
  adornedEnd: {
    paddingRight: 0,
  },
  focused: { borderColor: theme.primary },
  error: { borderColor: theme.error },
  formControl: {
    "& label": {
      color: "#222222",
      fontFamily: "Poppins",
      fontSize: "16px",
      lineHeight: "24px",
    },
    "& .MuiFormLabel-root": {
      "&.Mui-focused": {
        color: theme.primary,
      },
      "&&&.Mui-error": {
        color: theme.error,
      },
    },
    "& input": {
      fontFamily: "Poppins",

      "&::placeholder": {
        color: "#222222",
      },
    },
  },
  helperText: {
    color: "#222222",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "14px",
    marginTop: "4px",
  },
  BoxInline: {
    flexDirection: "row",
    display: "flex",
  },
  BoxText: {
    display: "flex",
    // alignItems: 'center !important',
    marginTop: "8px",
    "& span": {
      color: "red",
      paddingLeft: 5,
    },
  },
  //   muiPhoneNumber: {
  //     "& .MuiInputLabel-animated": {
  //       color:  theme.custom.colors.colors.white2,
  //       fontFamily: "Ubuntu-Regular",
  //       fontWeight: 500,
  //       fontSize: "14px",
  //       lineHeight: "19px",
  //       position: "unset",
  //     },
  //     "& .MuiInputBase-root": {
  //       marginTop: "4px",
  //       color:  theme.custom.colors.colors.white2,
  //       height: "42px",
  //       backgroundColor: "none",
  //       borderRadius: theme.shape.borderRadius,
  //       border: `1px solid ${ theme.custom.colors.colors.santaGray}`,
  //     },
  //     "& .MuiInputBase-input": {
  //       borderLeft: `1px solid ${ theme.custom.colors.colors.white2}`,
  //       paddingLeft: "7px",
  //     },
  //     "& .MuiPhoneNumber-flagButton": {
  //       marginLeft: "10px",
  //     },
  //   },
}));

export default useStyles;
