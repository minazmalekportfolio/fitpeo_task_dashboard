import React from 'react';
import '../../assets/css/feedback.scss';

const feedbackData = [
  { name: 'John Doe', rating: 5, comment: 'Excellent service and quick delivery!'},
  { name: 'Jane Smith', rating: 4, comment: 'Good quality products, but shipping was delayed.'},
  { name: 'Emily Johnson', rating: 3, comment: 'Average experience. The product was okay.'},
  { name: 'Michael Brown', rating: 2, comment: 'Not satisfied with the customer support.' },
];

const FeedbackComp = () => {
  return (
    <div className='feedback-container card-custom h-100'>
      <h3 className='title-md'>Customer Feedback</h3>
      <div className='feedback-list'>
        {feedbackData.map((feedback, index) => (
          <div key={index} className='feedback-item'>
            <h4 className='feedback-name'>{feedback.name}</h4>
            <div className='feedback-rating'>
              {[...Array(feedback.rating)].map((_, i) => (
                <span key={i} className='star'>★</span>
              ))}
            </div>
            <p className='feedback-comment'>{feedback.comment}</p>
            <p className='feedback-date'>{feedback.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackComp;
