import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ImageDemo() {
    const [ing, setIng] = useState('')
    useEffect(() => {
     async function loadImg(){
        let res = await axios("https://apps.ceinsys.com:2443/survey_mobile_app/data/download/photo/5210418955563522090001_23092023_203925",{
            headers:{
                'userlogin':"Mahesh",
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            }
          })
          console.log(res)
     }
    loadImg()
     
    }, [])
    
  return (
    <div>ImageDemo</div>
  )
}

export default ImageDemo