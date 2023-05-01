import ChatContainer from "./components/ChatContainer";
import ChatInput from "./components/ChatInput";
import io from "socket.io-client";
import { useEffect, useState } from "react";

function App() {
    const socket = io("http://localhost:3000");

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const receivedMessage = (message) => {
            setMessages((messages) => [...messages, message]);
        }

        socket.on("message", receivedMessage);

        return () => {
            socket.off("message", receivedMessage);
        }
    }, [messages]);

    return (
        <div className="relative h-screen mx-2">
            <ChatContainer messages={messages} />
            <ChatInput setMessages={setMessages} socket={socket} />
        </div>
    )
}

export default App
