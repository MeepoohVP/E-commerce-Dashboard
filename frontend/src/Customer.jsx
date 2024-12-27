const Customer = () =>{
    return (
        <>
        <div className="overflow-x-auto flex flex-col">
          <h1 className="font-semibold text-3xl w-[80%] mx-auto my-6">Customer</h1>
          <div className="w-[80%] mx-auto text-right mb-4"><input type="text" placeholder="name, email" className="input input-sm input-bordered w-full max-w-[256px]" /></div>
        <table className="table bg-base-100 w-[80%] mx-auto">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Application Dates</th>
              <th>Total Purchase</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover:bg-base-content hover:text-base-100">
              <td>Customer 1</td>
              <td>customer1@example.com</td>
              <td>2019-05-09</td>
              <td>7</td>
            </tr>
            {/* row 2 */}
            <tr className="hover:bg-base-content hover:text-base-100">
              <td>Customer 2</td>
              <td>customer2@example.com</td>
              <td>2023-10-30</td>
              <td>12</td>
            </tr>
            {/* row 3 */}
            <tr className="hover:bg-base-content hover:text-base-100">
              <td>Customer 3</td>
              <td>customer3@example.com</td>
              <td>2021-11-04</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div></>
    );
};
export default Customer;