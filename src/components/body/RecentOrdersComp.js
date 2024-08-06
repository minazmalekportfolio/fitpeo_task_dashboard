import React from 'react';
import ThumbImg from '../../assets/images/profile.jpg';
import '../../assets/css/recentorders.scss';

const orders = [
  { customer: 'Wade Waren', orderNo: '13456788', amount: '$124.00', status: 'Delivered' },
  { customer: 'Anna Smith', orderNo: '13456789', amount: '$98.00', status: 'Pending' },
  { customer: 'John Doe', orderNo: '13456790', amount: '$150.00', status: 'Delivered' },
  { customer: 'Jane Roe', orderNo: '13456791', amount: '$75.00', status: 'Cancelled' },
];

const statusClass = {
  Delivered: 'tag-green',
  Pending: 'tag-red',
  Cancelled: 'tag-red',
};

const RecentOrdersComp = () => {
  return (
    <div className='text-white card-bggray card-custom h-100'>
      <h3 className='title-md'>Recent Orders</h3>
      <div className='table-responsive'>
      <table className='w-100 '>
        <thead>
          <tr>
            <th scope="col">Customer</th>
            <th scope="col">Order No.</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>
                <div className='d-flex align-items-center'>
                  <img src={ThumbImg} className='recentorder-tb-img' alt="Profile" />
                  <span className='ms-2'>{order.customer}</span>
                </div>
              </td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td><span className={`tag ${statusClass[order.status]}`}>{order.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default RecentOrdersComp;
