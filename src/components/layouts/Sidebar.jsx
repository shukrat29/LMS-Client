import Stack from "react-bootstrap/Stack";
import { FaBook, FaHistory, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <Stack gap={1}>
      <div className="p-2">
        <Link className="nav-link" to="/user">
          Dashboard
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/books">
          <FaBook />
          Books
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/user-list">
          <FaUser /> All Users
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/borrow-history">
          <FaHistory /> Borrow History
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/profile">
          <FaUser /> Profile
        </Link>
      </div>
    </Stack>
  );
};
