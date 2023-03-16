import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Select from '../form-elements/Select';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});
  const [selectedYear, setSelectedYear] = useState('');
  // useEffect(() => {
  //   setChartData({
  //     labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
  //     datasets: [
  //       {
  //         label: 'Sales $',
  //         data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
  //         borderColor: 'rgb(53, 162, 235)',
  //         backgroundColor: 'rgb(53, 162, 235, 0.4',
  //       },
  //     ]
  //   })
  //   setChartOptions({
  //     plugins: {
  //       legend: {
  //         position: 'top',
  //       },
  //       title: {
  //         display: true,
  //         text: 'Daily Revenue'
  //       }
  //     },
  //     maintainAspectRatio: false,
  //     responsive: true
  //   })
  // }, [])

  return (
    <>
      <div className='w-full md:col-span-2 relative h-[385px] m-auto p-5 pb-14 border bg-main-purple rounded-[20px]'>
        <div className='flex justify-between items-center pb-3'>
          <h5 className='text-white text-xl font-semibold'>
            Analytics
          </h5>
          <div className='max-w-[75px] w-full'>
            <Select />
          </div>
        </div >
        <Bar data={{
          labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: 'Outcome',
              data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
              backgroundColor: '#64CFF6',
              barPercentage: 0.5,
              barThickness: 13,
              maxBarThickness: 8,
              minBarLength: 2,
              borderRadius: 10,
            },
            {
              label: 'Income',
              data: [1812, 22231, 17335, 17968, 24482, 17843, 22455],
              backgroundColor: '#6359E9',
              barPercentage: 0.5,
              barThickness: 13,
              maxBarThickness: 8,
              minBarLength: 2,
              borderRadius: 10,
            },
          ]
        }}
          options={{
            plugins: {
              legend: {
                position: 'top',
              },
            },
            maintainAspectRatio: false,
            responsive: true
          }}
        />
      </div >
    </>
  );
};

export default AnalyticsChart;