import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { FaAngleDown } from 'react-icons/fa6';
import { Dialog } from '@mui/material';
import { IoMdSearch } from 'react-icons/io';
import { MdClose } from 'react-icons/md';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref){
  return <Slide direction='up' ref={ref} {...props}/>
}); 

const CountryDropdown = () => {
  const [isOpenModal, setisOpenModal] = useState(false)
  return (
    <>
    <Button className='countryDrop' onClick={()=>setisOpenModal(true)}>
        <div className='info d-flex flex-column'>
            <span className='label'>Your Location</span>
            <span className='name'>Pakistan</span>
        </div>
        <span className='ml-auto'><FaAngleDown/></span>
    </Button>

    <Dialog  open={isOpenModal} onClose={()=>setisOpenModal(false)} className="locationModel" TransitionComponent={Transition}>
      <h4 className='mb-0'>Choose Your Delivery Location</h4>
      <p>Enter your Address and we will specify the offer for your area</p>
      <Button className='closeButton' onClick={()=>setisOpenModal(false)}><MdClose /></Button>
      
      <div className='headerSearch w-100'>
            <input type='text' placeholder='Search Your Area...'/>
            <Button><IoMdSearch/></Button>
        </div>

        <ul className="countryList mt-3">
          <li><Button onClick={()=>setisOpenModal(false)}>Karachi</Button></li>
          <li><Button onClick={()=>setisOpenModal(false)}>Peshawar</Button></li>
          <li><Button onClick={()=>setisOpenModal(false)}>Quetta</Button></li>
          <li><Button onClick={()=>setisOpenModal(false)}>Islamabad</Button></li>
          <li><Button onClick={()=>setisOpenModal(false)}>Punjab</Button></li>
          <li><Button onClick={()=>setisOpenModal(false)}>KPK</Button></li>
          <li><Button onClick={()=>setisOpenModal(false)}>Karachi</Button></li>
          <li><Button onClick={()=>setisOpenModal(false)}>Peshawar</Button></li>
          <li><Button onClick={()=>setisOpenModal(false)}>Quetta</Button></li>
          <li><Button onClick={()=>setisOpenModal(false)}>Islamabad</Button></li>
          <li><Button onClick={()=>setisOpenModal(false)}>Punjab</Button></li>
          <li><Button onClick={()=>setisOpenModal(false)}>KPK</Button></li>
        </ul>
    </Dialog>

    </>
  )
}

export default CountryDropdown
