import React from "react";
import styled from "styled-components";
import { ChatEngine } from "react-chat-engine";
import Chatfeed from "./components/Chatfeed";
import "./App.css";

function App() {
  return (
    <>
      <ChatEngine
        height="100vh"
        projectID="753bff7f-696b-4af9-ab48-abf0c8efa9db
        "
        userName="user_admin"
        userSecret="123321"
        renderChatFeed={(props) => <Chatfeed {...props} />}
      ></ChatEngine>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
