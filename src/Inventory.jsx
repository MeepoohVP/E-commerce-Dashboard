const Inventory = () =>{
    return (
        <>
        <div className="overflow-x-auto flex flex-col">
          <h1 className="font-semibold text-3xl w-[80%] mx-auto my-6">Inventory</h1>
        <table className="table bg-base-100 w-[80%] mx-auto">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>Remainer</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover:bg-base-content hover:text-base-100">
              <td>Product 1</td>
              <td>Food</td>
              <td>24</td>
              <td>In Stock</td>
            </tr>
            {/* row 2 */}
            <tr className="hover:bg-base-content hover:text-base-100">
              <td>Product 2</td>
              <td>Drink</td>
              <td>9</td>
              <td>Low Stock</td>
            </tr>
            {/* row 3 */}
            <tr className="hover:bg-base-content hover:text-base-100">
              <td>Product 3</td>
              <td>Snack</td>
              <td>12</td>
              <td>Out Stock</td>
            </tr>
          </tbody>
        </table>
        <div className="w-[80%] mx-auto my-2"><button className="btn btn-primary btn-sm rounded-full mx-1">Add</button>
        <button className="btn btn-accent btn-sm rounded-full mx-1">Edit</button>
        <button className="btn btn-secondary btn-sm rounded-full mx-1">Delete</button></div>
      </div></>
    );
}
export default Inventory;