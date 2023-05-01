import ChatContainer from "./ChatContainer";
import ChatInput from "./ChatInput";
import io from "socket.io-client";
import { useEffect, useState, useRef } from "react";

export default function Chat() {
    const socket = io("http://localhost:3000");
    const [messages, setMessages] = useState([]);
    const messageEl = useRef(null);

    useEffect(() => {
        if (!!messageEl.current) {
            messageEl.current.addEventListener('DOMNodeInserted', event => {
                const { currentTarget: target } = event;
                target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
            });
        }

        const receivedMessage = (message) => {
            setMessages((messages) => [...messages, message]);
        }

        socket.on("message", receivedMessage);

        return () => {
            socket.off("message", receivedMessage);
        }
    }, [messages]);

    return (
        <div className="relative h-screen mx-2" style={{ maxHeight: 'calc(100vh - 5rem)', overflow: 'hidden' }}>
            <ChatContainer messages={messages} scroll={messageEl} />
            <ChatInput setMessages={setMessages} socket={socket} />
        </div>
    );
}
