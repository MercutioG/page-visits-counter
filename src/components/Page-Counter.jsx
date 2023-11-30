import { useState, useEffect } from 'react'

const PageCounter = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const newCount = Number(localStorage.getItem('pageVisits')) + 1
    setCount(newCount);
    localStorage.setItem('pageVisits', newCount);
  },[]);

  if(count >= 1000000000){
    return (
      <section className='medium-info-box'>
        {Math.floor(count/1000000000) + "." + (Math.floor(count/100000000)) % 10}B site visits.
      </section>
    )
  }


  if(count >= 1000000){
    return (
      <section className='medium-info-box'>
        {Math.floor(count/1000000) + "." + (Math.floor(count/100000)) % 10}M site visits.
      </section>
    )
  }

  if(count >= 1000){
    return (
      <section className='medium-info-box'>
        {Math.floor(count/1000) + "." + (Math.floor(count/100)) % 10}k site visits.
      </section>
    )
  }

  if(count === 1){
    return (
      <section className='medium-info-box'>
        This site has 1 visit.
      </section>
    )
  }

  return (
    <section className='medium-info-box'>
      This site has {count} visits.
    </section>
  )
}

export default PageCounter