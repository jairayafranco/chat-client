import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Drawer({ children }) {
    const navigate = useNavigate();
    const { id } = useParams();

    const handleRoom = (e) => {
        const roomId = e.target.parentElement.getAttribute('room-id');
        navigate(`/chats/${roomId}`);
    }

    return (
        <div className="drawer drawer-mobile" style={{ maxHeight: 'calc(100vh - 4.2rem)' }}>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {children}
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {
                        Array.from(Array(20).keys()).map((i) => (
                            <li key={i} room-id={i + 1} onClick={handleRoom}>
                                <a className={i + 1 === Number(id) ? "bg-primary" : ""}>Room {i + 1}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
