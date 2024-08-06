import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import styles from '../../assets/css/BarChart.module.css'; // Adjust the path as needed
import DropdownMenuComp from './DropdownMenuComp';

const data = [
  { name: '0', sales: 12 },
  { name: '5', sales: 19 },
  { name: '9', sales: 3 },
  { name: '11', sales: 5 },
  { name: '13', sales: 2 },
  { name: '15', sales: 3 },
  { name: '17', sales: 7 },
  { name: '19', sales: 8 },
  { name: '21', sales: 6 },
  { name: '23', sales: 12 },
  { name: '25', sales: 5 },
  { name: '27', sales: 9 },
];

const ResponsiveBarChart = () => (
 <div className='card-custom h-100'>
  <div className={`${styles.chartContainer} `}>
<div className='d-flex align-items-center flex-wrap justify-content-between'>
    <h3 className='title-md'>Activity</h3>
    <DropdownMenuComp className="mb-2"/>
    </div>
    <ResponsiveContainer>
      <BarChart
        data={data}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="sales"
          fill="#7394ff" // Bar color
          margin={0}
          radius={[15, 15, 15, 15]} // Border radius for top left, top right, bottom right, bottom left
          barSize={20} // Width of the bars
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
  </div>
);

export default ResponsiveBarChart;
