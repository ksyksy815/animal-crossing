import { useEffect, useRef } from 'react'
import axios from 'axios'

export default function Home() {
  const ref:any = useRef()
  useEffect(()=> {
    axios.get(`https://acnhapi.com/v1/houseware/acoustic_guitar`)
    .then (res => {
      ref.current.setAttribute('src', res.data[0].image_url) 

    })
    .catch(err=> console.log(err))
  }, [])
  return (
    <div>
      Hello
      <img ref={ref} alt="Guitar"></img>
    </div>
  )
}
