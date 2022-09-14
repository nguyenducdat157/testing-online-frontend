import { createTheme } from "@mui/material/styles";
import React from "react";

const defaultTheme = createTheme();

const custom = {
  success: "#60CDB8",
  error: "#EE1313",
  warning: "#E06068",
  white: "#FFFFFF",
  black: "#000000",
  purple: {
    1: "#FFBEE8",
    2: "#560872",
    3: "#1B0D51",
  },
  primary: "#7AAFE3",
  secondary: "#B1A3F6",
  background: "#6088E0",
  green: "#22D273",
  linear: {
    1: "linear-gradient(180deg, #560872 0%, #5A31FF 100%)",
    2: "linear-gradient(273.98deg, #FF67C9 0%, #5A31FF 106.86%)",
  },
};

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f8fafc",
    },
    primary: {
      main: custom.primary,
      contrastText: custom.white,
    },
    secondary: {
      main: custom.secondary,
      contrastText: custom.white,
    },
    error: {
      main: custom.error,
      contrastText: custom.white,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
        outlined: {
          background: "#FFFFFF",
          // padding: "24px 60px",
          border: "none",
          // "@media (max-width:599px)": {
          //   padding: "16px",
          // },
        },
        rounded: {
          boxShadow: "0px 0px 36px 0px rgba(96, 136, 224, 0.2)",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCheckbox: {
      defaultProps: {
        color: "primary",
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
    MuiAppBar: {
      defaultProps: {},
      styleOverrides: {
        root: {
          borderRadius: "0px",
          background: "#560872",
          height: "72px",
          padding: "0px 102px",
          boxShadow: "none",
          "& .MuiToolbar-root": {
            height: "72px",
          },
          "& .MuiContainer-root": {
            paddingLeft: "0px",
            paddingRight: "0px",
          },
        },
      },
    },
    MuiPopover: {
      styleOverrides: {},
    },

    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "inherit",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          color: custom.white,
          textTransform: "capitalize",
          borderRadius: "4px",
          fontWeight: 600,
          fontSize: 20,
          lineHeight: "30px",
          background: custom.linear[2],
          padding: "10px 20px",
        },
        contained: {
          padding: "14px 20px",
        },
        containedPrimary: {
          background: custom.primary,
          "&:hover": {
            background: custom.green,
          },
          "&:active": {
            background: custom.primary,
          },
          "&:disable": {
            background: "#CCCCCC",
          },
        },
      },
    },
    MuiToolbar: {
      defaultProps: {
        disableGutters: true,
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: 14,
          lineHeight: "18px",
          fontWeight: 500,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        gutters: {
          padding: "12px 16px",
          lineHeight: "18px",
          fontSize: 14,
          fontWeight: 500,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          body: {
            WebkitTextSizeAdjust: "none", // only on ios
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          background: "#E6EBEA",
        },
        label: {
          padding: "6px 16px",
          color: "#7E807F",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "14px",
          lineHeight: "20px",
          "@media (max-width:599px)": {
            fontSize: "11px",
            padding: "4px 8px",
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        positionStart: {
          marginLeft: "12px",
          marginRight: "12px",
        },
        positionEnd: {
          marginLeft: "12px",
          marginRight: "12px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: "16px",
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: "40px 40px 24px 40px",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: "8px 40px 40px",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          marginTop: 4,
          lineHeight: "18px",
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #383C43",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:last-child td": {
            borderBottom: 0,
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          padding: 8,
          fontSize: 12,
          lineHeight: "18px",
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          height: 18,
          minWidth: 18,
          lineHeight: "15px",
          padding: "0px",
          fontWeight: "bold",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        outlined: {
          color: "#B1B5B4",
          borderColor: "#B1B5B4",
          "&.Mui-selected": {
            background: "none",
          },
          "@media (max-width:599px)": {
            fontSize: "14px",
            lineHeight: "24px",
            fontWeight: 500,
          },
        },
      },
    },
    MuiTabs: {
      defaultProps: {
        TabIndicatorProps: {
          children: React.createElement("span"),
          // @ts-ignore
          sx: {
            backgroundColor: "transparent",
            bottom: 4,
            height: "calc(100% - 8px)",
            textAlign: "center",

            "& span": {
              display: "inline-block",
              height: "100%",
              backgroundColor: "primary.main",
              borderRadius: "50px",
              width: "calc(100% - 8px)",
            },
          },
        },
      },
      styleOverrides: {
        root: {
          minHeight: 40,
          marginBottom: 24,
          borderRadius: "50px",
          whiteSpace: "nowrap",
        },
      },
    },
    MuiTab: {
      defaultProps: { wrapped: false },
      styleOverrides: {
        root: {
          color: "#000000",
          textTransform: "none",
          minHeight: "unset",
          minWidth: "unset",
          maxWidth: "unset",
          padding: "12px 56px",
          fontSize: 20,
          lineHeight: "28px",
          transition: defaultTheme.transitions.create("color"),
          [defaultTheme.breakpoints.down("md")]: {
            padding: "6px 16px",
            fontSize: 14,
            lineHeight: "24px",
          },
          [`&.Mui-selected`]: {
            color: "#fff",
          },
          zIndex: 1,
        },
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: 16,
    h1: {
      fontSize: "40px",
      lineHeight: "60px",
      fontWeight: 600,
    },
    h2: {
      fontSize: "36px",
      lineHeight: "54px",
      fontWeight: 600,
    },
    h3: {
      fontSize: "32px",
      lineHeight: "48px",
      fontWeight: 600,
    },
    h4: {
      fontSize: "28px",
      lineHeight: "42px",
      fontWeight: 600,
    },
    h5: {
      fontSize: "24px",
      lineHeight: "36px",
      fontWeight: 600,
    },
    h6: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "bold",
    },
    subtitle1: {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: 600,
    },
    body1: {
      fontWeight: "bold",
      fontSize: "13px",
      lineHeight: "20px",
    },
    body2: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      color: "#4B4D4C",
    },
    caption: {
      fontSize: "16px",
      lineHeight: "24px",
      color: "#7E807F",
      fontWeight: "normal",
    },
  },
});

export default theme;
