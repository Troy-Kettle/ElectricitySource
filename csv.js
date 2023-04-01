import React, { useState } from 'react';
import Papa from 'papaparse';

function CsvTable() {
  const [data, setData] = useState([]);

  const handleCsvUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (result) => {
        setData(result.data);
      },
    });
  };

  return (
    <div>
      <input type="file" onChange={handleCsvUpload} />
      <table className='Table'>
        <thead>
            <br></br>
          <tr>
            <th>Yesterday</th>
            <th>Today</th>
            <th>Last Year</th>
          </tr>
        </thead>
        <br></br>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row['Column 1']}</td>
              <td>{row['Column 2']}</td>
              <td>{row['Column 3']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CsvTable;
