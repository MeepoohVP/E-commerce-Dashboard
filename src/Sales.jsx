const Sales = () => {
    return (
        <>
        <div className="overflow-x-auto flex flex-col">
          <h1 className="font-semibold text-3xl w-[80%] mx-auto my-6">Sales Report</h1>
          <div className="w-[80%] mx-auto text-right mb-4"><input type="text" placeholder="Date, name, Quantity, Price" className="input input-sm input-bordered w-full max-w-[256px]" /></div>
        <table className="table bg-base-100 w-[80%] mx-auto">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th>Date</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover:bg-base-content hover:text-base-100">
              <th>2023-12-06</th>
              <td>Product 1</td>
              <td>24</td>
              <td>100 $</td>
            </tr>
            {/* row 2 */}
            <tr className="hover:bg-base-content hover:text-base-100">
              <th>2023-10-12</th>
              <td>Product 2</td>
              <td>9</td>
              <td>129 $</td>
            </tr>
            {/* row 3 */}
            <tr className="hover:bg-base-content hover:text-base-100">
              <th>2022-7-14</th>
              <td>Product 3</td>
              <td>12</td>
              <td>999 $</td>
            </tr>
          </tbody>
        </table>
      </div></>
    );
}
export default Sales;