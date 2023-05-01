import ChatStart from "./ChatStart";
import ChatEnd from "./ChatEnd";

export default function ChatContainer({ messages, scroll }) {
    if (messages.length === 0) {
        return (
            <div className="flex h-screen justify-center items-center">
                <h1 className="">No messages</h1>
            </div>
        );
    }

    return (
        <div className="chat-container" style={{ maxHeight: 'calc(100vh - 9rem)', overflowY: 'auto' }} ref={scroll}>
            {
                messages.map((message, index) => (
                    message.from === "Me" ? <ChatEnd key={index} message={message} /> : <ChatStart key={index} message={message} />
                ))
            }
        </div>
    );
}
