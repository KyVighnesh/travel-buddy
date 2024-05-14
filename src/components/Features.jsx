import React, { useContext } from 'react'
import Styles from '../stylesheets/features.css'
import axios from 'axios'
import {useState,useEffect,useRef} from 'react'
import { dataContext } from '../App'

const Features = () => {

    const[data,setData] = useState([])
    const scroll = useRef(null)

    let {selectedData,offSetData} = useContext(dataContext)

    useEffect(()=> {
        axios.get('/Data1.json').then((res)=> {

            setData(res.data.map((ele)=> {
                return(
                    {...ele,show:false}
                )
            }))
        
        })
    },[])


    useEffect(()=> {

        let target = document.getElementById(selectedData.selected)

        if(target) {
            offSetData.updateScroll(target.offsetTop)
        }

    },[selectedData.selected])


    const onHandleRead = (feature) => {
        console.log(feature)

        let newData = [...data].map((element)=> {
            if(element.id == feature.id) {
                element.show = !element.show
            }

            return element
        })

        setData(newData)
    }

  

  return (
    <main id='Features'>
        <h3>HIGHLIGHTS</h3>

        <div className='container' ref={scroll}>
            {data.map((feature,i)=> {
                return(
                    <div className='feature-container' key={i}>
                        <div className='image-container1'>
                            <img src = {feature.image}/>
                        </div>
                        <h5>{feature.title}</h5>

                        {feature.show?<p>{feature.description} <span onClick={()=>onHandleRead(feature)}>Read less</span></p>:<p>{feature.description.slice(0,30)}... <span onClick={()=>onHandleRead(feature)}>Read More</span></p>}
                    </div>
                )
            })}
        </div>
    </main>
  )
}

export default Features