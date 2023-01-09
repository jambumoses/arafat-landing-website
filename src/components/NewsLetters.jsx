import React from 'react'

export default function NewsLetters() {
  return (
    <section className='newsletters'>
        <form action="" method="get">
            <h3>keep updated</h3>
            <span className='newsletters_paragraph'>sign up for our newletter to recevie updates on exclusive offers</span>
            <span className='newsletters_inputs'>
                <input type="email" name="email" placeholder='Enter Your Email' />
                <button type='submit'>subscribe</button>
            </span>
        </form>
    </section>
  )
}
