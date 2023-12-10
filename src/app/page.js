"use client"
import styles from './page.module.scss'
import { useState } from 'react';

export default function Home() {

    const [authData, setAuthData] = useState(null)

  const handleClick = async () => {
    try {
      const response = await fetch('/api', { method: 'POST' });
      const data = await response.json();
      console.log(data);
      setAuthData(data)
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <main className={styles.main}>
      <button onClick={handleClick}>click me</button>

      {authData? <div>Access Token: {authData.data.access_token}</div>: null}
      
    </main>
  )
}
