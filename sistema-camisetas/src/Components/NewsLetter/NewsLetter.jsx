import React from 'react'
import "./NewsLetter.css"
function NewsLetter() {
  return (
    <div className='news-letter'> 
        <h2>Obten ofertas exclusivas en tu email</h2>
        <p>Subscribe to our newleter and stay update</p>
        <div>
            <input type="text" placeholder='Your email id' />
            <button>Subscribirse</button>
        </div>
    </div>
  )
}

export default NewsLetter