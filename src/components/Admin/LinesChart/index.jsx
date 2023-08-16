import React from 'react'
import "./style.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const LinesChart = ({ data, dataKeys, colors }) => {
    return (
      <LineChart width={900} height={500} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        {dataKeys.map((key, index) => (
          <Line key={key} type="monotone" dataKey={key} stroke={colors[index]} />
        ))}
      </LineChart>
    );
  };
  
  export default LinesChart;