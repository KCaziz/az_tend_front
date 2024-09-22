import { Link } from "react-router-dom";
import {SideBar} from "../../components/SideBar"
import NavbarAdmin from "../../components/NavbarAdmin";
import AdminDashboard from "../../components/Admin/AdminDashboard";

export function UserHome() {
  return (
    <div className="dark:text-white dark:bg-darkColor min-h-screen">
      <div>
      <NavbarAdmin />
      </div>
      <div className="flex">
      <SideBar className="w-1/4" />
      <AdminDashboard className="w-3/4" />
      </div>
    </div>

  );
}

export default UserHome;
