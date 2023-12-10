    export async function POST() {
    const res = await fetch('https://secure.snd.payu.com/pl/standard/user/oauth/authorize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'grant_type': 'client_credentials',
        'client_id': '460718',
        'client_secret': '22f4175da9f0f72bcce976dd8bd7504f',
      }),
    })
    const data = await res.json()
   
    return Response.json({ data })
  }