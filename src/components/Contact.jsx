import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Styles from '../stylesheets/contact.css'

const Contact = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[user,setUser] = useState({})

    const[succesModal,setSuccessModal] = useState(false)

    const onHandleChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    }

    const onHandleSubmit = () => {

        if(user.email == undefined) {
            setShow(true)
        }


        if(user.contact == undefined) {
            setShow(true)

        }


        else if(user.email.trim().length>0 && user.contact.trim().length>0) {
            setSuccessModal(true)

            setTimeout(()=>{
                setSuccessModal(false)
            },1000)
        }
    }
  return (

    <section>
    
    <div className='contact-logo'>
        <img src='https://th.bing.com/th/id/OIP.qeBL7LoMSOxJnY_hd_ZOZgAAAA?rs=1&pid=ImgDetMain' style={{width:'100%'}} onClick={handleShow}/>
    </div>
     <>

     <Modal show={show} onHide={handleClose}>
       <Modal.Header closeButton>
         <Modal.Title>Start Your Journey Today!</Modal.Title>
       </Modal.Header>
       <Modal.Body>Embark on a magical adventure through India's enchanting landscapes, vibrant cultures, and
timeless heritage. Let us be your guide to discovering the wonders of Incredible India. Contact
us to plan your dream vacation now!</Modal.Body>

<div style={{margin:"auto",width:"60%",display:'flex',gap:"30px"}}>

    <label style={{width:"20%"}}>Email</label>

<input style={{width:"80%"}} name='email' onChange={onHandleChange}/>

</div>
<br/>

<div style={{margin:"auto",width:"60%",display:'flex',gap:"30px"}}>

    <label style={{width:"20%"}}>Contact</label>

<input style={{width:"80%"}} name='contact' onChange={onHandleChange}/>

</div>
       <Modal.Footer>
         <Button variant="secondary" onClick={handleClose}>
           Close
         </Button>
         <Button variant="dark" onClick={()=>{
handleClose()
onHandleSubmit()
         }}>
           Submit
         </Button>
       </Modal.Footer>
     </Modal>
   </>

      <Modal show={succesModal}>
        <Modal.Header>
          <Modal.Title style={{width:"60%",margin:"auto"}}>Submitted Successfully</Modal.Title>
          </Modal.Header>
      </Modal>

   </section>
  )
}

export default Contact