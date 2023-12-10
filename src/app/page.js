"use client"
import styles from './page.module.scss'

export default function Home() {

  const url = 'https://secure.snd.payu.com/pl/standard/user/oauth/authorize';
  const data = new URLSearchParams();
  data.append('grant_type', 'client_credentials');
  data.append('client_id', '460718');
  data.append('client_secret', '22f4175da9f0f72bcce976dd8bd7504f');

  const  handleClick = ()=>{
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data,
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

  }


  // handleClick()

  return (
    <main className={styles.main}>
      <button onClick={handleClick}>click me</button>

      
    </main>
  )
}
