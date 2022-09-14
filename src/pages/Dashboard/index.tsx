import { Button, Stack, Typography } from "@mui/material";
import { withRouter } from "react-router-dom";
import home1 from "src/assets/image/Ellipse2.png";
import Footer from "src/components/layout/footer";
import Header from "src/components/layout/header";
import useStyles from "./styles";
import { ReactComponent as ReloadIcon } from "src/assets/icons/load.svg";
import { ReactComponent as ReadingIcon } from "src/assets/icons/reading.svg";
import { ReactComponent as TestIcon } from "src/assets/icons/test.svg";

const Dashboard: React.FC = () => {
  const classes = useStyles();
  return (
    <Stack>
      <Header />
      <Stack>
        <div className={classes.topArea}>
          <Stack className={classes.topLeft}>
            <Typography variant="h5" fontWeight={500} color={"#fff"}>
              Kiểm tra trình độ toeic miễn phí
            </Typography>
            <Typography
              variant="h1"
              fontWeight={500}
              color={"#fff"}
              padding={"23px 0px"}
            >
              Đăng kí tài khoản để có thể làm thêm nhiều bài thi hơn
            </Typography>
            <Button sx={{ maxWidth: "214px", height: "72px" }}>
              Start Here
            </Button>
          </Stack>
          <Stack>
            <img src={home1} alt="" />
          </Stack>
        </div>
        <div className={classes.bottomArea}>
          <Typography variant="h2" fontWeight={400}>
            Tại sao chọn TOEICDHQ ?
          </Typography>
          <div className={classes.content}>
            <Stack>
              <Typography variant="h5" fontWeight={300}>
                Cập nhật đề mới liên tục
              </Typography>
              <ReloadIcon />
              <Typography
                fontWeight={300}
                fontSize={"14px"}
                lineHeight={"21px"}
              >
                Các bộ đề mới đươc cập nhật một cách liên tục và thường xuyên
              </Typography>
            </Stack>
            <Stack>
              <Typography variant="h5" fontWeight={300}>
                Nâng cao kĩ năng làm bài thi Toeic
              </Typography>
              <ReadingIcon />
              <Typography
                fontWeight={300}
                fontSize={"14px"}
                lineHeight={"21px"}
              >
                Rèn luyện 2 kỹ năng TOEIC Reading và TOEIC Listening nhanh nhất.
              </Typography>
            </Stack>
            <Stack>
              <Typography variant="h5" fontWeight={300}>
                Đề thi có đáp án và giải thích
              </Typography>
              <TestIcon />
              <Typography
                fontWeight={300}
                fontSize={"14px"}
                lineHeight={"21px"}
              >
                Sau khi làm bài bạn có thể kiểm tra đáp án, giải thích chi tiết
                từng đáp án.
              </Typography>
            </Stack>
          </div>
          <Button sx={{ width: "196px", marginTop: "34px", height: "54px" }}>
            Join now
          </Button>
        </div>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default withRouter(Dashboard);
