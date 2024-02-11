import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

var password = "iAmHuman";

// if(prompt("To protect against bots, please enter password to access app:", "") === password)
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
// else{
//   alert('Sorry, wrong password!');
// }
