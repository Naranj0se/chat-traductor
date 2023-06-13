import React from "react";

import UserProvider from "./context/userContext/UserProvider"
import AppRouter from "./router"

function App() {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
}

export default App;
