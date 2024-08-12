import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx";
import {Provider} from "react-redux";
import {commerceStore} from "./store/rstore.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={commerceStore}>
          <App />
      </Provider>
  </React.StrictMode>,
)
