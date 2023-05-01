export default function ChatEnd({ message }) {
    return (
        <div className="chat chat-end mr-5 scale-up-bottom">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://mui.com/static/images/avatar/1.jpg" />
                </div>
            </div>
            <div className="chat-header">
                {message.from}
                <time className="text-xs opacity-50 ml-2">{message.time}</time>
            </div>
            <div className="chat-bubble">{message.message}</div>
        </div>
    );
}
