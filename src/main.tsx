import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { queryClient } from "./reactQueryUtilities/queryClient.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { store } from "./app/store/store.ts";
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
  <QueryClientProvider client={queryClient}>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary:"#F3BC2F",
          colorPrimaryTextHover: "#111111",
        },
        components: {
          Button: {
            primaryColor:"#111111",
            colorPrimaryTextHover: "#111111",
            primaryShadow: "7px 7px 0 0 #000000",
            defaultBorderColor: "#111111",
            defaultShadow: "7px 7px 0 0 #000000",
            defaultHoverBorderColor: "#111111",
            defaultHoverColor: "#111111",
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </QueryClientProvider>
  </Provider>
  // </React.StrictMode>,
);

// TODO product list loading, product card loading at home page, shadow none while hovering, fix type error in ProductDetail, cart empty state
