// import { Box } from "@chakra-ui/layout";
// import { useState,useEffect } from "react";
// import Chatbox from "../components/ChatBox";
// import MyChats from "../components/MyChat";
// import SideDrawer from "../components/miscellaneous/SideDrawer";
// import { ChatState } from "../Context/ChatProvider";

// const Chatpage = () => {
//   const [fetchAgain, setFetchAgain] = useState(false);
//   const { user } = ChatState();
// //   useEffect(() => {
// //     const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    
// //     console.log(userInfo);
// //      if (!userInfo) {
// //        window.location.href="/";
       
// //      } 
// //  }, [ ]);
//   return (
//     <div style={{ width: "100%" }}>
     
//       {user && <SideDrawer />}
//       <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
//         {user && <MyChats fetchAgain={fetchAgain} />}
//         {/* {user && (
//           <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
//         )} */}
//       </Box>
      
//     </div>
//   );
// };

// export default Chatpage;



import { Box, Spacer, Stack } from "@chakra-ui/react";
import { useState } from "react";
import ChatBox from "../components/ChatBox";
import MyChats from "../components/MyChat";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {console.log(user)}
      
            { user && <SideDrawer />}
      <Box display="flex" flexDir='row' justifyContent="space-between" w="100%" h="90.9vh" p="5px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
      {/* <Stack direction='row' >
      { user && <MyChats fetchAgain={fetchAgain} />}
      {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
      </Stack> */}
      
    </div>
  );
};

export default Chatpage;