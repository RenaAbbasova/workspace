import { Link, Outlet, useLoaderData } from "react-router-dom";
import { jwtDecode } from "react-jwt";

export function loader() {
  const token = localStorage.getItem("token");
  const user = token ? jwtDecode(token) : null;
  return { user };
}

export default function Layout() {
  const { user } = useLoaderData();

  return (
    <div className="layout flex">
      {/* Sidebar */}
      <nav className="sidebar bg-gray-800 text-white w-64 min-h-screen p-4">
        <h2 className="text-xl font-bold">My App</h2>
        <ul className="mt-8">
          <li>
            <Link to="/profile" className="block py-2 hover:bg-gray-600 rounded px-2">Profile</Link>
          </li>
          <li>
            <Link to="/logout" className="block py-2 hover:bg-gray-600 rounded px-2">Logout</Link>
          </li>
          {user?.type === "admin" && (
            <li>
              <Link to="/users" className="block py-2 hover:bg-gray-600 rounded px-2">Users</Link>
            </li>
          )}
          {user?.type === "teacher" && (
            <li>
              <Link to="/students" className="block py-2 hover:bg-gray-600 rounded px-2">Students</Link>
            </li>
          )}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="main-content flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
}
