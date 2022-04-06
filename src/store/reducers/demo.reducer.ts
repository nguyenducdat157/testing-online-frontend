import { createReducer } from "@reduxjs/toolkit";
import { getApi, toggleMode } from "../actions/demo.action";

type DemoStake = {
  mode: boolean;
};

const initialState = {
  mode: false,
};

const demoReducer = createReducer<DemoStake>(initialState, (builder) => {
  builder
    .addCase(toggleMode, (state) => {
      state.mode = !state.mode;
    })
    .addCase(getApi.fulfilled, (state, { payload }) => {
      console.log(payload);
    });
});

export default demoReducer;
