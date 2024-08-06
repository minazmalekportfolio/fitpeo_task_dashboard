import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const DropdownMenuComp = () => {
  const [selectedOption, setSelectedOption] = useState('Choose');

  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic" className='custom-dropdown-menu'>
        {selectedOption}
      </Dropdown.Toggle>

      <Dropdown.Menu className=''>
        <Dropdown.Item eventKey="Weekly">Weekly</Dropdown.Item>
        <Dropdown.Item eventKey="Monthly">Monthly</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownMenuComp;
