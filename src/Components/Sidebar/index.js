import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Sidebar = () => {
  return (
    <>
      <div className='sidebar'>
        <div className="filterBox">
            <h6>PRODUCT CATEGORIES</h6>
            <div className="scroll">
            <ul>
              <li>
              <FormControlLabel className="w-100" control={<Checkbox/>} label="Men" />
              </li>
              <li>
              <FormControlLabel className="w-100" control={<Checkbox/>} label="Women" />
              </li>
              <li>
              <FormControlLabel className="w-100" control={<Checkbox/>} label="kids" />
              </li>
              <li>
              <FormControlLabel className="w-100" control={<Checkbox/>} label="Beauty" />
              </li>
              <li>
              <FormControlLabel className="w-100" control={<Checkbox/>} label="Watches" />
              </li>
              <li>
              <FormControlLabel className="w-100" control={<Checkbox/>} label="Gift" />
              </li>
              <li>
              <FormControlLabel className="w-100" control={<Checkbox/>} label="Men" />
              </li>
              <li>
              <FormControlLabel className="w-100" control={<Checkbox/>} label="Women" />
              </li>
              <li>
              <FormControlLabel className="w-100" control={<Checkbox/>} label="kids" />
              </li>
              <li>
              <FormControlLabel className="w-100" control={<Checkbox/>} label="Beauty" />
              </li>
              <li>
              <FormControlLabel className="w-100" control={<Checkbox/>} label="Watches" />
              </li>
              <li>
              <FormControlLabel className="w-100" control={<Checkbox/>} label="Gift" />
              </li>
              
            </ul>
            </div>
        </div>

        <div className="filterBox">
            <h6>FILTER BY PRICE</h6>
        </div>
      </div> 
    </>
  )
}

export default Sidebar;
