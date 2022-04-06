import "./App.css";
import Routing from "./routes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import store from "./store";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ThemeProvider theme={theme}>{Routing()}</ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
