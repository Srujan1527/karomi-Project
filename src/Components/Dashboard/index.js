import "./index.css";
import { HiOutlineViewList } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi";
import logo from "../Dashboard/images/logo.png";
import { NavLink } from "react-router-dom";

const Dashboard = () => (
  <div className="dashboard-container">
    <div className="logo-container">
      <img src={logo} alt="logo" className="logo" />
      <HiOutlineViewList className="icon" size={30} />
    </div>
    <div className="dashboard-items-container">
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <div className="dashboard-item">
          <HiOutlineHome className="logo-1" size={20} />
          <h1 className="heading">Dashboard</h1>
        </div>
      </NavLink>
      <NavLink to="/my-projects" style={{ textDecoration: "none" }}>
        <div className="dashboard-item">
          <HiOutlineHome className="logo-1" size={20} />
          <h1 className="heading">Start a new Project</h1>
        </div>
      </NavLink>

      <hr className="line" />
      <div className="workflows-container">
        <h1 className="main-heading">Workflows</h1>
        <h1 className="heading">Inbox(3)</h1>
        <h1 className="heading">My Projects(75)</h1>
        <NavLink to="/all-projects" style={{ textDecoration: "none" }}>
          <h1 className="heading">All Projects(85)</h1>
        </NavLink>
      </div>
      <hr className="line" />
      <div className="workflows-container">
        <h1 className="main-heading">Asset Library</h1>
        <NavLink to="/search" style={{ textDecoration: "none" }}>
          <h1 className="heading">Search</h1>
        </NavLink>

        <h1 className="heading">Browse</h1>
      </div>
      <hr className="line" />
      <NavLink to="/reports" style={{ textDecoration: "none" }}>
        <div className="workflows-container">
          <h1 className="main-heading">Reports</h1>
        </div>
      </NavLink>

      <hr className="line" />
    </div>
  </div>
);

export default Dashboard;
