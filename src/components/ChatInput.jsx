import { toast } from 'sonner'

export default function Input({ setMessages, socket }) {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = e.target.message.value;

        if (!message) {
            toast.error("You can't send an empty message");
            return;
        }

        socket.emit("message", message);

        setMessages((messages) => [...messages, { from: "Me", message, time }]);

        e.target.reset();
    }

    return (
        <form className="absolute w-full bottom-0 mb-1" onSubmit={handleSubmit}>
            <div className="form-control w-full">
                <div className="input-group">
                    <input
                        name="message"
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                        autoComplete="off"
                        autoFocus
                    />
                    <button className="btn btn-square btn-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-5 h-5 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </form>
    );
}
