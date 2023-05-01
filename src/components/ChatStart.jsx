export default function ChatStart({ message }) {
    return (
        <div className="chat chat-start ml-5 scale-up-bottom">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
