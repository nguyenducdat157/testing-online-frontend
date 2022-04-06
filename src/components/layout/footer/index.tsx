import { Container, Link, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useStyles from "./styles";
import { ReactComponent as LogoIcon } from "src/assets/icons/logo-toeic.svg";

const Footer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth={false}>
      <div className={classes.footerTop}>
        <Stack spacing={"18px"}>
          <LogoIcon />
          <Typography fontWeight={"400"} fontSize={"14px"} lineHeight={"21px"}>
            Website thi thử TOEIC online miễn phí có chấm điểm và xem đáp án
            ngay, kiểm tra trình độ TOEIC chính xác, nhanh chóng!
          </Typography>
        </Stack>
        <Box>
          <Typography variant="h6" fontWeight={"400"} component={Link} href="">
            Practice
          </Typography>
          <Typography variant="h6" fontWeight={"400"} component={Link} href="">
            Testing Online
          </Typography>
          <Typography variant="h6" fontWeight={"400"} component={Link} href="">
            Blog
          </Typography>
          <Typography variant="h6" fontWeight={"400"} component={Link} href="">
            Forum
          </Typography>
          <Typography variant="h6" fontWeight={"400"} component={Link} href="">
            Tutorial
          </Typography>
        </Box>
        <Stack>
          <Typography variant="h4" fontWeight={"400"} marginBottom={"18px"}>
            Liên hệ
          </Typography>
          <Typography fontSize={"14px"} lineHeight={"21px"} fontWeight={"400"}>
            Thường tín, Hà Nội <br />
            nguyenducdat157@gmail.com <br />
            0379313749
          </Typography>
        </Stack>
      </div>
      <div className={classes.line}></div>
      <div className={classes.footerBotoom}>
        <Typography>TOEICDHQ.NET © 2021 2022 | All right reserved</Typography>
        <Typography>TOEICDHQ</Typography>
      </div>
    </Container>
  );
};

export default Footer;
