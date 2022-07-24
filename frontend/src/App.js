
// import './App.css';
// import { Button} from '@chakra-ui/react';
// import { Route } from 'react-router-dom';
// import homepage from'./pages/homepage';
// import ChatPage from './pages/ChatPage';
// function App() {
//   return (
//     <div className="App">
//       <Route path="/" component={homepage} exact/>
//       <Route path="/chat" component={ChatPage} exact />
//     </div>
//   );
// }

// export default App;



import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Button} from '@chakra-ui/react';
import Homepage from'./pages/homepage';
import ChatPage from './pages/ChatPage';
function App() {
  return (
    <div className="App">
      {/* <Homepage/>       */}
      <Router>
        <Routes>
          
          <Route path="/" element={<Homepage />}></Route>
           <Route path="/chats" element={<ChatPage />}></Route>
          
        </Routes>
      </Router >
    </div >
  );
}

export default App;