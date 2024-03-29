import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "react-jss";
import { createBrowserHistory } from "history";
import { ReduxRouter } from "@lagunovsky/redux-react-router";
import "normalize.css/normalize.css";

import * as serviceWorker from "./serviceWorker";
import configureStore from "./store";
import theme from "./styles/theme";
import App from "./views/app.view";

const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter history={history} store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ReduxRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
