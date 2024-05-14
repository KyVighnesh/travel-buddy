import React from 'react'
import Styles from '../stylesheets/choose.css'
import { useContext } from 'react'
import { dataContext } from '../App'
import { useEffect } from 'react'

const Choose = () => {

    let {selectedData,offSetData} = useContext(dataContext)

    useEffect(()=> {

        let target = document.getElementById(selectedData.selected)

        if(target) {
            offSetData.updateScroll(target.offsetTop)
        }

    },[selectedData.selected])

  return (
    <main id='Why Choose Us ?' style={{marginTop:'80px'}}>

<h3>Why Choose Us ? </h3>


        <div className='wrapper-main'>

            <div className='choose-image'>
                <img src="https://thumbs.dreamstime.com/z/kid-question-mark-curious-vector-kid-question-mark-curious-vector-child-cartoon-face-sign-confused-doubt-illustration-157366210.jpg?w=360" alt="" />
            </div>

            <div className='choose-content'>
                <p>
                Our commitment to creating unforgettable experiences sets us apart. With expert guidance,
personalized itineraries, and a passion for showcasing the best of India, we ensure your journey
is filled with cherished memories and moments of awe.
                </p>
            </div>
        </div>

    </main>
  )
}

export default Choose