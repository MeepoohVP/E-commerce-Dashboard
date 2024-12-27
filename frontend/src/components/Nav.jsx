import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Overview from "../overview";
import Sales from "../Sales";
import Inventory from "../Inventory";
import Customer from "../Customer";
const Nav = () => {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar-normal bg-base-300 flex">
          <div className="flex-none">
            <NavLink className="btn btn-ghost text-lg rounded-none" to="/dashboard/overview">Overview</NavLink>
          </div>
          <div className="flex-none">
            <NavLink className="btn btn-ghost text-lg rounded-none" to="/dashboard/sales-report">Sales Report</NavLink>
          </div>
          <div className="flex-none">
            <NavLink className="btn btn-ghost text-lg rounded-none" to="/dashboard/inventory">Inventory</NavLink>
          </div>
          <div className="flex-none">
            <NavLink className="btn btn-ghost text-lg rounded-none" to="/dashboard/customer">Customer</NavLink>
          </div>
        </nav>
        <Routes>
        <Route path="/dashboard/overview" element={<Overview/>} />
        <Route path="/dashboard/sales-report" element={<Sales/>} />
        <Route path="/dashboard/inventory" element={<Inventory/>} />
        <Route path="/dashboard/customer" element={<Customer/>} />
      </Routes>
      </BrowserRouter>
      
    </>
  );
};
export default Nav;