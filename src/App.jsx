import React from "react";
import { Inbox } from "./components/Inbox";
import { Chat } from "./components/Chat";
import { Display } from "./components/Display"

function App() {
  return (
  <Display>
    <Inbox />
    <Chat />
  </Display>
  );
}

export default App;
