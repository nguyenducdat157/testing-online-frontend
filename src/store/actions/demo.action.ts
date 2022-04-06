/* eslint-disable no-throw-literal */
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "src/request/service";

export const toggleMode = createAction<void>("toggleMode");

export const getApi = createAsyncThunk(`getApi`, async () => {
  try {
    const demo = await axiosInstance.get("/berry/1");
    return demo.data;
  } catch (err) {
    return 0;
  }
});
