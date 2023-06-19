import React from "react";

import UserProvider from "./context/userContext/UserProvider"
import ChatProvider from "./context/chatContext/ChatProvider";
import AppRouter from "./router"

function App() {
  return (
    <UserProvider>
      <ChatProvider>
        <AppRouter />
      </ChatProvider>
    </UserProvider>
  );
}

export default App;
