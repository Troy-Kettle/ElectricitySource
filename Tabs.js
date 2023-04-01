import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CsvTable from "./csv";
import BarChart from "./BarChart";

const data = `label,value
    10:00 ,42.20
    12:00 ,43.01
    14:00 ,43.01
    16:00 ,43.21
    18:00 ,42.08
  `;

export default () => (
  <Tabs>
    <TabList>
      <Tab>Bar Chart Data</Tab>
      <Tab>Live Data Table</Tab>
    </TabList>
    <TabPanel>
      <div className="Bars">
        <h4>Today's Price</h4>
        <BarChart data={data} />
      </div>
    </TabPanel>
    <TabPanel>
      <div className="CSVTable">
        <CsvTable />
      </div>
    </TabPanel>
  </Tabs>
);
