// import React, { createContext, useContext, useEffect, useState } from "react";
// // // import { useHistory } from "react-router-dom";
// // // import { useNavigate } from 'react-router-dom';
  
// const ChatContext = createContext("");

// const ChatProvider = ({ children }) => {
// //  const [user,setUser]=useState();
// // // const navigate = useNavigate();
// // //  useEffect(() => {
// // //     const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    
// // //     console.log(userInfo);
// // //      if (!userInfo) {
// // //        window.location.href="/";
// // //        return;
// // //      } 
// // //  }, [ ]);
 
// return <ChatContext.Provider value={{user}}>{children}</ChatContext.Provider>;
// };
// // export const ChatState = () => {
// //   return useContext(ChatContext);
// // };

// export default ChatProvider;
// //   const [selectedChat, setSelectedChat] = useState();
// //   const [user, setUser] = useState();
// //   const [notification, setNotification] = useState([]);
// //   const [chats, setChats] = useState();

// //   const history = useHistory();

// //   useEffect(() => {
// //     const userInfo = JSON.parse(localStorage.getItem("userInfo"));
// //     setUser(userInfo);

// //     if (!userInfo) history.push("/");
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [history]);

// //   return (
// //     <ChatContext.Provider
// //       value={{
// //         selectedChat,
// //         setSelectedChat,
// //         user,
// //         setUser,
// //         notification,
// //         setNotification,
// //         chats,
// //         setChats,
// //       }}
// //     >
// //       {children}
// //     </ChatContext.Provider>
// //   );
// // };





import React, { createContext, useContext, useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState( {});
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState([]);

  // const history = useHistory();

  useEffect(() => {
     const loggedInUser = localStorage.getItem("userInfo");
     if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
    // const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    // console.log(userInfo);
    // // setUser(userInfo);
    
    //  if (userInfo ) {
    //         setUser({
    //             name:userInfo.name,
    //             id:userInfo._id,
    //             email: userInfo.email,
    //             pic:userInfo.pic
    //         }); // Set user data    
    //     }
        console.log(user);
    // if (!userInfo) history.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
      }}
    >
      
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;


