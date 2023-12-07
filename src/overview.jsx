import { BarChart, ChartContainer, LineChart } from "@mui/x-charts";
import { green} from "@mui/material/colors"; 
import { dark, light } from "@mui/material/styles/createPalette";
import { Paper } from "@mui/material";
function Overview() {
    const update = new Date();
    const total_sales = 51200;
    const products_sold = 301;
    const new_customer = 56;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const getDate = () => {
        const today = new Date();
        const month = months[today.getMonth()];
        const year = today.getFullYear();
        const hours = (today.getHours().toLocaleString().length === 1) ? '0' + today.getHours().toLocaleString() : today.getHours().toLocaleString();
        const minutes = (today.getMinutes().toLocaleString().length === 1) ? '0' + today.getMinutes().toLocaleString() : today.getMinutes().toLocaleString();
        const time = hours + ":" + minutes;
        const date = (today.getDate().toLocaleString().length === 1) ? '0' + today.getDate().toLocaleString() : today.getDate().toLocaleString();
        return `Update ${month.slice(0,3)} ${date}, ${year} ${time}`;
      }
    return (
        <>
        <h1 className="font-semibold text-3xl mx-16 mt-8">Customer</h1>
        <div className="flex flex-wrap gap-4 m-16 mt-6">
        <div className="card card-body bg-base-200 text-base-content w-fit flex-[30%] duration-200 hover:scale-105 hover:bg-base-300">
            <h1 className="text-xl">Total sales <span className="stat-desc bg-primary-content rounded-sm text-primary p-[2px] border-primary solid border-[1px] align-middle">↗︎ 22%</span></h1>
            <div><span className="text-6xl font-medium text-primary">{total_sales.toLocaleString()}</span> <span className="text-4xl text-primary">$</span></div>
            <div className="date">{getDate()}</div>
        </div>
        <div className="card card-body bg-base-200 text-base-content w-fit flex-[30%] duration-200 hover:scale-105 hover:bg-base-300">
            <h1 className="text-xl">Products sold <span className="stat-desc bg-primary-content rounded-sm text-primary p-[2px] border-primary solid border-[1px] align-middle">↗︎ 12%</span></h1>
            <div><span className="text-6xl font-medium text-primary">{products_sold.toLocaleString()}</span></div>
            <div className="date">{getDate()}</div>
        </div>
        <div className="card card-body bg-base-200 text-base-content w-fit flex-[30%] duration-200 hover:scale-105 hover:bg-base-300">
            <h1 className="text-xl">New Customers <span className="stat-desc bg-secondary-content rounded-sm text-red-500 p-[2px] border-red-500 solid border-[1px] align-middle">↘︎ 22%</span></h1>
            <div><span className="text-6xl font-medium text-primary">{new_customer.toLocaleString()}</span></div>
            <div className="date">{getDate()}</div>
        </div>
        <div className="card card-body bg-base-200 text-base-content w-fit flex-[10%] duration-200 hover:scale-105 hover:bg-base-300">
            <h1 className="text-xl">Top 5 Product Sales</h1>
            <ol className="list-decimal font-medium text-secondary text-2xl ml-6 mt-6">
                <li className="mb-4">Product 1</li>
                <li className="mb-4">Product 2</li>
                <li className="mb-4">Product 3</li>
                <li className="mb-4">Product 4</li>
                <li className="mb-4">Product 5</li>
            </ol>
        </div>
        <div className="card card-body w-fit bg-base-200 flex-auto flex flex-col items-center duration-200 hover:scale-[1.02] hover:bg-base-300">
            <h3 className="text-base-content text-center text-xl">December</h3>
        <BarChart 
        sx={{
            // Change the color of the x-axis line
            '& .MuiChartsAxis-directionX .MuiChartsAxis-line': {
              stroke: 'white',
            },
            // Change the color of the y-axis line
            '& .MuiChartsAxis-directionY .MuiChartsAxis-line': {
              stroke: 'white',
            },
            // Change the color of the tick labels on the x-axis
            '& .MuiChartsAxis-directionX .MuiChartsAxis-tickLabel': {
              fill: 'white',
            },
            // Change the color of the tick labels on the y-axis
            '& .MuiChartsAxis-directionY .MuiChartsAxis-tickLabel': {
              fill: 'white',
            },
            '& .MuiChartsAxis-directionX .MuiChartsAxis-label, .MuiChartsAxis-directionY .MuiChartsAxis-label': {
                fill: 'white',
              },
            '& .MuiChartsAxis-directionY line, .MuiChartsAxis-directionX line': {
                stroke: 'white',
              },
          }}
  xAxis={[
    {
      id: 'barCategories',
      data: ['1', '2', '3', '4', '5', '6'],
      scaleType: 'band', 
      label: "Day",
    },
  ]}
  yAxis={[{
    label: "Sales",
  }]}
  series={[
    {
      data: [4000, 5134, 2000, 1000, 4387, 1223],
    },
  ]}
  width={600}
  height={300}
/></div></div>
        </>
    );
}
export default Overview;