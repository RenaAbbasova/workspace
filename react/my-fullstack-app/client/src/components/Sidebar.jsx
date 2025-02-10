import { Link } from "react-router-dom";
import { getUserRole } from "../utils/auth";

const Sidebar = () => {
    const role = getUserRole();

    return (
        <div className="w-60 bg-gray-900 text-white h-screen p-4">
            <ul>
                <li><Link to="/profile">Profile</Link></li>
                {role === "admin" && <li><Link to="/users">Users</Link></li>}
                {role === "teacher" && <li><Link to="/students">Students</Link></li>}
                <li><button onClick={() => localStorage.removeItem("token")}>Logout</button></li>
            </ul>
        </div>
    );
};

export default Sidebar;
