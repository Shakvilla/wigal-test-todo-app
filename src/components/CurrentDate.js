import React, {useState, useEffect} from 'react'

function CurrentDate() {
  const locale = 'en';
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date())
    }, 60 * 1000);

    return () => {
      clearInterval(timer)
    }
  }, [])

  const day = currentDate.toLocaleDateString(locale, { weekday: 'long' });
  const date = `${day}, ${currentDate.getDate()} ${currentDate.toLocaleDateString(locale, { month: 'long' })}\n\n`; 
   return {
     date
   }
   
  
}

export default CurrentDate
