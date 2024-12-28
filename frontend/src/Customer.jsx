import axios from "axios";
import { useState } from "react";
const Customer = () => {
  const [customers, setCustomers] = useState([]);
  axios.get("http://localhost:5000/customers").then((res) => {
    //this console.log will be in our frontend console
    setCustomers(res.data);
  });
  return (
    <>
      <div className="overflow-x-auto flex flex-col">
        <h1 className="font-semibold text-3xl w-[80%] mx-auto my-6">
          Customer
        </h1>
        <div className="w-[80%] mx-auto text-right mb-4">
          <input
            type="text"
            placeholder="name, email"
            className="input input-sm input-bordered w-full max-w-[256px]"
          />
        </div>
        <table className="table bg-base-100 w-[80%] mx-auto">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Country</th>
              <th>Credit Limit</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => {
              return (
                <>
                  <tr className="hover:bg-base-content hover:text-base-100">
                    <td>{customer.customerName}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.country}</td>
                    <td>{customer.creditLimit}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Customer;
