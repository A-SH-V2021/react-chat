import React from "react";
import MessageFor from "./MessageFor";
import MyMessage from "./MyMessage";
import ThierMessage from "./ThierMessage";

const Chatfeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  console.log(messages);
  const keys = Object.keys(messages);
  console.log(keys);
  const renderMessages = () => {
  };
  return <div>chatfeed</div>;
};

export default Chatfeed;
