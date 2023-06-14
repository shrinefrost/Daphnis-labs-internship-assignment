import React from "react";
import { useState } from "react";
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const PieCharts =({analyseflag,isclicked, details})=> {
    console.log("hello");
    const [showChart, setShowChart] = useState(true);

    const handleCloseChart = () => {
      setShowChart(false);
    };
  
    const data = {
      labels: [details[0],details[1], details[2],details[3]],
      datasets: [
        {
          data: [30, 40, 30,20],
          backgroundColor: ['red', 'blue', 'green','yellow'],
          borderColor: 'white',
          borderWidth: 2,
        },
      ],
    };
  
    const options = {
      plugins: {
        legend: {
          display: false,
        },
        datalabels: {
          color: 'white',
          anchor: 'end',
          align: 'start',
          offset: 10,
          formatter: (value, context) => {
            const dataset = context.dataset.data;
            const sum = dataset.reduce((a, b) => a + b, 0);
            const percentage = ((value / sum) * 100).toFixed(1);
            return percentage > 5 ? `${percentage}%` : '';
          },
          display: function (context) {
            return context.dataset.data[context.dataIndex] > 0;
          },
          clamp: true,
          font: {
            size: 12,
          },
          overlap: false,
        },
      },
      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 20,
          bottom: 20,
        },
      },
    };
  
    return (
      <div>
        {showChart ? (
          <div className="chart-container">
            <button onClick={handleCloseChart} className="close-button">
              X
            </button>
            <Pie data={data} options={options} />
            <ul className="label-list">
              {data.labels.map((label, index) => (
                <li key={index}>
                  <span
                    className="label-color"
                    style={{
                      backgroundColor: data.datasets[0].backgroundColor[index],
                      border: `2px solid ${data.datasets[0].borderColor}`,
                    }}
                  ></span>
                  <span className="label-text">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (isclicked(false))}
      </div>
    );
};

  
 

export default PieCharts;