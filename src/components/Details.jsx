import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect,useState } from 'react'
import Styles from '../stylesheets/details.css'

const Details = () => {

    const location = useLocation()

    const[data,setData] = useState({})

    useEffect(()=> {
        setData(location.state.key)
    },[])
  return (
    <main>
        <div className='detail-container'>
            <h3>{data.title}</h3>
            <div className='detail-image'>
                <img src={data.image} alt="" />
            </div>
            <p>{data.description}</p>
        </div>
    </main>
  )
}

export default Details