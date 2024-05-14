import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Styles from '../stylesheets/destinations.css'
import {useRef} from 'react'
import { useContext } from 'react'
import { dataContext } from '../App'
import { useNavigate } from 'react-router-dom'


const Destinations = () => {

    const[data,setData] = useState([])


    const scroll = useRef(null)

    const navigate = useNavigate()

    let {selectedData,offSetData} = useContext(dataContext)


    useEffect(()=> {
        axios.get('/Data.json').then((res)=> {
            console.log(res.data)
            setData(res.data)
        })
    },[])

    useEffect(()=> {

        let target = document.getElementById(selectedData.selected)

        if(target) {
            offSetData.updateScroll(target.offsetTop)
        }

    },[selectedData.selected])


    const onHandleClickDetails = (place) => {

        navigate(`/place/${place.title}`,{state:{key:place}})
    }


    const onHandleScrollRight = () => {
        let wrapper = scroll.current;

        
        wrapper.scrollTo({
            left: wrapper.scrollLeft + 400,
            behavior: 'smooth',
          });

    }

    const onHandleScrollLeft = () => {
        let wrapper = scroll.current;

        wrapper.scrollTo({
            left: wrapper.scrollRight + 100,
            behavior: 'smooth',
          });
    }
  return (

    <main id='Explore'>

<h3>EXPLORE DESTINATIONS</h3>

        <div className='main-container' ref={scroll}>
            {data.map((place,i)=> {
                return(
                    <div className='place-container' onClick={()=>onHandleClickDetails(place)} key={i}>
                        <div className='image-container'>
                            <img src = {place.image}/>
                        </div>
                        <h5>{place.title}</h5>
                    </div>
                )
            })}
        </div>

        <div className='button-wrapper'>
            <button onClick={onHandleScrollRight} className='scroll-right'><img src='/Arrow.png'/></button>
            <button onClick={onHandleScrollLeft} className='scroll-left'><img src='/Arrow.png' style={{rotate:"180deg"}}/></button>
        </div>

    </main>
  )
}

export default Destinations