import React from 'react'
import dishImage from '../../assets/images/dishes.png'
import goalImage from '../../assets/images/goal.png'
import menuImage from '../../assets/images/menu.png'
import LeftArrowImg from '../../assets/images/next.png'
const imageData = [
  { src: goalImage, label: 'Goals' },
  { src: dishImage, label: 'Dishes' },
  { src: menuImage, label: 'Menu' },
];

const ImpLinksComponent = () => {
  return (
    <div className='bg-darkgray text-white card-custom h-100'>
      {imageData.map((item, index) => (
        <div key={index} className='d-flex align-items-center imp-link-div mb-3'>
          <div>
            <img src={item.src} alt={item.label} className='imp-link-img' />
            <span className='ms-3'>{item.label}</span>
          </div>
         
            <img src={LeftArrowImg} alt="Next" className='arrow-icon ms-auto' />
         
        </div>
      ))}
    </div>
  );
}

export default ImpLinksComponent