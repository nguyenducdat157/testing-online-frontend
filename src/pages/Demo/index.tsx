import {
  Button,
  Chip,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import AppDropDown from "src/components/core/app-dropdown";
import AppInput from "src/components/core/app-input";
import { AppModal } from "src/components/core/app-modal";
import Layout from "src/components/layout/layout";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { toggleMode } from "src/store/actions/demo.action";
import { REGEX } from "src/utils/validation";

interface IFormInputDemo {
  password: string;
}

const Demo: React.FC = () => {
  const dispatch = useAppDispatch();
  // dispatch(getApi());
  const { mode } = useAppSelector((s) => s.demoReducer);

  const changeMode = () => {
    // console.log(toggleMode);
    dispatch(toggleMode());
  };

  const [openModal, setOpenModal] = useState(false);

  const {
    control,
    formState: { errors },
  } = useForm<IFormInputDemo>({
    mode: "onChange",
    defaultValues: {
      password: "",
    },
  });

  return (
    <Layout>
      <h1 style={{ background: `${mode ? "black" : "white"}`, color: "red" }}>
        Demo
      </h1>

      <Button onClick={changeMode}>Change Mode</Button>
      <AppDropDown
        title="Account"
        listItem={["Setting", "Logout"]}
      ></AppDropDown>
      <Stack>
        <Container maxWidth="md">
          <Paper component={Box} p={5}>
            <Stack spacing={3}>
              <Typography color="darkgoldenrod" fontSize={12}>
                *fontSize - lineHeight - fontWeight*
              </Typography>
              <Typography variant="h1">h1: 40 - 60 - 600</Typography>
              <Typography variant="h2">h2: 36 - 54 - 600</Typography>
              <Typography variant="h3">h3: 28 - 42 - 600</Typography>
              <Typography variant="h4">h4: 24 - 36 - 600</Typography>
              <Typography variant="h5">h5: 20 - 30 - 600</Typography>
              <Typography variant="h6">h6: 16 - 24 - "bold"</Typography>
              <Typography variant="body1">body1: 13 - 20 - "bold"</Typography>
              <Typography variant="subtitle1">
                subtitle: 18 - 27 - 700
              </Typography>
              <Typography variant="caption">
                caption: 16 - 24 - "normal" color="#7E807F"
              </Typography>
              <Typography color="error">color="error"</Typography>
              <Typography color="primary">color="primary"</Typography>
              <Box>
                <Chip label="chip" />
              </Box>

              <Paper variant="outlined" sx={{ height: "40px" }}>
                Paper variant="outlined"
              </Paper>
              <AppInput
                inputProps={{ maxLength: 50 }}
                // classNames={classes.inputItem}
                controller={{
                  control,
                  name: "password",
                  rules: REGEX.password,
                }}
                label={"Password"}
                error={Boolean(errors.password)}
                placeholder="Password"
                helperText={errors.password?.message}
              />
              <Button variant="contained" onClick={() => setOpenModal(true)}>
                Open Modal
              </Button>
              {/* <StakePopup
                isOpen={isOpenModal}
                handleClose={() => {
                  setIsOpenModal(false);
                }}
              >
                <Typography variant="h1">hello</Typography>
              </StakePopup> */}
              {/* <AppSwitch
                label1="Long Term Staking Packages"
                label2="Your Stakes"
              /> */}
            </Stack>
          </Paper>
        </Container>
      </Stack>
      <AppModal
        isOpen={openModal}
        handleClose={() => setOpenModal(false)}
        title={"Demo Modal"}
      />
    </Layout>
  );
};

export default withRouter(Demo);
