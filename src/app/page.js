"use client"
import styles from './page.module.scss'
import { useState } from 'react'

export default function Home() {

  const [response, setResponse] = useState('');

  const handleClick = ()=>{
    fetch("https://secure.snd.payu.com/pl/standard/user/oauth/authorize", {
        method: "POST",
        // mode: "no-cors",
        body: JSON.stringify({
          grant_type: "client_credentials",
          client_id: '474202',
          client_secret: "019b6d21aa88e9141b8810cb4a2efdd6"
        }),
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          // "access-control-allow-origin": "http://localhost:3000"
        },
      }
    )
    .catch(
      console.log("nie działa")
    )
    .then(e => {
      console.log(e)
    })
    // .then((response)=>response.json())
    // .then((response)=>console.log(response))
    // alert("click")
  }


  return (
    <main className={styles.main}>
      <button onClick={handleClick}>click me</button>

      
    </main>
  )
}
