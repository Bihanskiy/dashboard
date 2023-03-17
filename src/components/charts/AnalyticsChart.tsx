import React from 'react';
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
import { AnalyticsDatasets } from './chart.config';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsChart = () => {

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
          datasets: AnalyticsDatasets
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