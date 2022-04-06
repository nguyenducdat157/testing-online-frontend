// import { useStyles } from "./styles";
import { Button, Dialog, Stack, styled, Typography } from "@mui/material";
import { FC } from "react";
import { ReactComponent as CloseIcon } from "src/assets/icons/close-icon.svg";

interface Props {
  isOpen: boolean;
  isIconClose?: boolean;
  handleClose: () => any;
  children?: any;
  className?: string;
  title?: string;
}

const Container = styled(Stack)({
  borderRadius: "16px",
  background: "#FFFFFF",
  position: "relative",
});

const Icon = styled(Button)({
  position: "absolute",
  top: 18,
  right: 20,
  background: "transparent",
  padding: "0px",
  minWidth: "auto",
});

const DialogContainer = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    margin: "16px !important",
  },
}));

export const AppModal: FC<Props> = (props) => {
  const { isOpen, handleClose, children, title } = props;
  //   const classes = useStyles();
  //   const { mobile } = useResponsive();

  return (
    <DialogContainer open={isOpen} onClose={handleClose}>
      <Container
        p={{ xs: "24px 16px", md: "32px 24px" }}
        spacing={{ xs: 3, md: 4 }}
      >
        <Stack display={"flex"} sx={{ minWidth: "400px" }}>
          <Typography variant={"h6"} textAlign={"center"}>
            {title}
          </Typography>
          <Icon onClick={handleClose}>
            <CloseIcon width={18} height={18} />
          </Icon>
        </Stack>

        {children}
      </Container>
    </DialogContainer>
  );
};
