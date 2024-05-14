import React from 'react'
import Styles from '../stylesheets/travelplan.css'
import {useState,useEffect} from 'react'
import axios from  'axios'
import { dataContext } from '../App'
import { useContext } from 'react'

const TravelPlan = () => {

    const[data,setData] = useState([])

    let {selectedData,offSetData} = useContext(dataContext)


    useEffect(()=> {
        axios.get('/Data3.json').then((res)=> {
            setData(res.data.map((ele)=> {
                return(
                    {...ele,show:false}
                )
            }))
        })
    },[])

    
    useEffect(()=> {

        let target = document.getElementById(selectedData.selected)

        console.log(target)

        if(target) {
            offSetData.updateScroll(target.offsetTop)
        }

    },[selectedData.selected])

    
    const onHandleRead = (travel) => {

        let newData = [...data].map((element)=> {
            if(element.id == travel.id) {
                element.show = !element.show
            }

            return element
        })

        setData(newData)
    }
  return (
    <main id='Plan Your Trip' style={{marginTop:'80px'}}>
        <h3>PLAN YOUR TRIP</h3>
        <div className='travel-card-container'>
            {data.map((travel,i)=> {
                return(
                    <div className='travel-card' key={i}>
            <div className='image-div'>
                <img src={travel.image}/>
            </div>
            <h5>{travel.title}</h5>
            {travel.show?<p>{travel.description} <span onClick={()=>onHandleRead(travel)}>Read less</span></p>:<p>{travel.description.slice(0,30)}... <span onClick={()=>onHandleRead(travel)}>Read More</span></p>}
        </div>
                )
            })}
        </div>
    </main>
  )
}

export default TravelPlan