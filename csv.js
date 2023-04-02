import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import csvFile from "./react.csv";

function CsvTable() {
  const [data, setData] = useState([]);

  const handleCsvUpload = () => {
    Papa.parse(csvFile, {
      header: true,
      download: true,
      complete: (result) => {
        setData(result.data);
      },
    });
  };

  // Call the handleCsvUpload function when the component mounts
  useEffect(() => {
    handleCsvUpload();
  }, []);

  return (
    <div>
      <table className="Table">
        <thead>
          <tr>
            <th>Yesterday</th>
            <th>Today</th>
            <th>Last Year</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row["Column 1"]}</td>
              <td>{row["Column 2"]}</td>
              <td>{row["Column 3"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CsvTable;
