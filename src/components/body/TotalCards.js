import React from 'react';
import { ArrowUp, ArrowDown } from 'react-bootstrap-icons';
import imgCancelled from '../../assets/images/totalcancelled.png';
import imgDelivered from '../../assets/images/totaldelivered.png';
import imgOrders from '../../assets/images/totalorders.png';
import imgRevenue from '../../assets/images/totalrevenue.png';
import '../../assets/css/TotalCards.scss';

const cardData = [
  { title: 'Total Orders', value: 75, percentage: '3%', src: imgOrders },
  { title: 'Total Revenue', value: '$5000', percentage: '5%', src: imgRevenue },
  { title: 'Total Cancelled', value: 20, percentage: '-2%', src: imgCancelled },
  { title: 'Total Delivered', value: 100, percentage: '8%', src: imgDelivered },
];

const TotalCards = () => {
  return (
    <div className='row g-3'>
      {cardData.map((card, index) => {
        const isPositive = parseFloat(card.percentage) >= 0;
        const Icon = isPositive ? ArrowUp : ArrowDown;
        const iconColor = isPositive ? '#16cc16' : 'red';

        return (
         
            <div key={index} className='col-sm-3 col-6'>
              
              <div className='card-custom card-darkray text-white'>
                <img src={card.src} alt={card.title} className='card-image' />
                <p className='mt-1'>{card.title}</p>
                <div className='d-flex align-items-center justify-content-between'>
                  <p className='fs-big fw-bold mb-0'>{card.value}</p>
                  <div className='percentage-container d-flex align-items-center'>
                    <Icon className='percentage-icon' style={{ color: iconColor }} />
                    <p className={`${isPositive ? 'percentage-positive' : 'percentage-negative'} mb-0 fw-bold`}>
                      {card.percentage}
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
           
         
        );
      })}
    </div>
  );
}

export default TotalCards;
