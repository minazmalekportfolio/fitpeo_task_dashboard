import React from 'react';
import { ArrowUp } from 'react-bootstrap-icons';
import 'react-circular-progressbar/dist/styles.css';
import DonutProgressBar from './DonutProgressBar';
import '../../assets/css/Profit.scss';

const Profit = () => {
  return (
    <div className='card-bggray card-custom d-flex align-items-center justify-content-between'>
      <div className=''>
      <div className='profit-details text-start mb-0'>
        <p className='net-profit-title'>Net Profit</p>
        <h3 className='net-profit-value'>$6759.25</h3>
        <div className='profit-percentage percentage-container'>
          <ArrowUp className='icon-up percentage-icon' />
          <p className='percentage-text fw-bold color-green'>3%</p>
        </div>
      </div>
      </div>
      <div className=''>
      <div className='chart-container'>
        <DonutProgressBar progress={70} />
        <div className='chart-overlay'>
          <h4 className='progress-value mt-0'>70%</h4>
          <p className='goal-completed'>Goal<br/> Completed</p>
        </div>
      </div>
      <p className='rounded-values fs-smaller mt-3 mb-0'>The values here have been rounded off</p>
    </div>
    </div>
  );
}

export default Profit;
