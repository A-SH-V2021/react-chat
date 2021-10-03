import React from "react";
import MessageFor from "./MessageFor";
import MyMessage from "./MyMessage";
import ThierMessage from "./ThierMessage";

const Chatfeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];
  console.log(chat);
  // console.log(activeChat);  id chat

  const renderMessages = () => {
    // give array of keys
    const keys = Object.keys(messages);

    keys.map((key, idx) => {
      const message = messages[key];
      const lastMessageKey = idx === 0 ? null : keys[idx - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${idx}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <ThierMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "16px" : "0",
              marginLeft: isMyMessage ? "0" : "68px",
            }}
          >
            read-receipts
          </div>
        </div>
      );
    });
  };

  if (!chat) {
    return "loading...";
  }

  return (
    <div>
      <div className="chat-feed">
        <div className="chat-title-container">
          <div className="chat-title">{chat.title}</div>
          <div className="chat subtitle">
            {chat.people.map((person) => `${person.person.username}`)}
          </div>
        </div>
        {renderMessages()}
        <div style={{ height: "100px" }}></div>
        <div className="message-form-container">
          <MessageFor {...props} chatId={activeChat} />
        </div>
      </div>
    </div>
  );
};

export default Chatfeed;
