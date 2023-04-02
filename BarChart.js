import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import Papa from "papaparse";

function BarChart(props) {
  const chartRef = useRef(null);

  useEffect(() => {
    // Use PapaParse to read the CSV file and convert it into an array of objects
    Papa.parse(props.data, {
      header: true,
      complete: function (results) {
        // Extract the labels and values from the parsed CSV data
        const labels = results.data.map((item) => item.label);
        const values = results.data.map((item) => item.value);

        // Create a new Chart.js instance and update it with the parsed data
        const chartInstance = new Chart(chartRef.current, {
          type: "bar",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Price (p/kWh)",
                data: values,
                backgroundColor: "#9fd3c7",
                borderColor: "#555",
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                min: 42,
                max: 43.5,
              },
            },
          },
        });
      },
    });
  }, [props.data]);

  return <canvas ref={chartRef} />;
}

export default BarChart;
