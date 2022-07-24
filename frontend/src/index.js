// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// // import reportWebVitals from "./reportWebVitals";
// import { ChakraProvider } from "@chakra-ui/react";
// import ChatProvider from "./Context/ChatProvider";
// import { BrowserRouter } from "react-router-dom";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <ChakraProvider>
//     <BrowserRouter>
//       <ChatProvider>
//         <App />
//       </ChatProvider>
//     </BrowserRouter>
//   </ChakraProvider>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./Context/ChatProvider";
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = createRoot(document.getElementById('root'));
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(<ChatProvider>
<ChakraProvider>

         <App />
      
</ChakraProvider> 
</ChatProvider>);
// ReactDOM.render(
//   <React.StrictMode>
  
//      <App />
   
//   </React.StrictMode>,
//   document.getElementById('root')
// );
reportWebVitals();