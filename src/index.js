import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assests/vendor/bootstrap/css/bootstrap.min.css";
import "./assests/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assests/vendor/boxicons/css/boxicons.min.css";
import "./assests/vendor/glightbox/css/glightbox.min.css";
import "./assests/vendor/remixicon/remixicon.css";
import "./assests/vendor/swiper/swiper-bundle.min.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  </React.Fragment>
);
reportWebVitals();
