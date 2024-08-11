import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import router from "./routes/routes";
import { Provider } from "react-redux";
import store from "./store/store";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWMxN2VlYWNkNDFhYzRiMzZhNWU4OWZjNDdhZTgxMSIsIm5iZiI6MTcyMzM3NjQ2OS41MDc5Niwic3ViIjoiNjZhZTUwYmNjYTQ1NDhjM2IwYjJjODBkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.zXbhZA-sk32Ob20nq_ugPa_8oYUvosGyxIo5ADH1JUg`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
