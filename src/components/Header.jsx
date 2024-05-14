import React, { useContext, useEffect, useRef } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Styles from '../stylesheets/header.css'
import Button from 'react-bootstrap/Button';
import {headers} from '../staticData'
import { dataContext } from '../App';
import {useState} from 'react'




const Header = () => {

  let {selectedData,offSetData} = useContext(dataContext)
 
  const[show,setShow] = useState(false)


  const onHandleScroll = (options) => {

    setShow(!show)


    selectedData.setSelected(options)
    window.scrollTo({top:offSetData.offSet,behavior:'smooth'})

  }

  useEffect(()=> {

    window.scrollTo({top:offSetData.offSet,behavior:'smooth'})

  },[offSetData.offSet])


  const onHandleShow = () => {
    setShow(!show)
  }


  return (
    <div style={{width:'100%'}}>
        <Navbar bg="light" data-bs-theme="light" fixed="top">
            <div className='nav-container'>
              <div className='toggle-container'>
              <img src='/Toggle.png' className='toggle' onClick={onHandleShow}/>
              </div>
          <Navbar.Brand href="#home" className='brand'>Travel Buddy</Navbar.Brand>
          <Nav className="option-container">
            {headers.map((options,i)=> {
                return (
                    <div className='option' key={i}>
                    <span className='font' onClick={()=>onHandleScroll(options)}>{options}</span>
                    </div>
                )
            })}
          </Nav>
          <Button variant="dark" className='log-in-button'>
            <span>Log in</span></Button>{' '}

          </div>
      </Navbar>
      {show?<div className='pop-up-div'>
      {headers.map((options,i)=> {
                return (
                    <ul key = {i}>
                    <li className='font' onClick={()=>onHandleScroll(options)}>{options}</li>
                    </ul>
                )
            })}
      </div>:""}
      
    </div>
  )
}

export default Header