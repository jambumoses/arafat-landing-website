import React from 'react'
import orderimg from "./img/chair.png"

export default function Orders() {
  return (
    <>
    <section className='order_section'>
      <div className='order_section_card'>
        <span className='order_section_card_img' style={{backgroundImage: `url(${ require("./img/chair.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></span>
        <span className='order_section_card_title'><a href=''>cet23 serviette</a></span>
        <span className='order_section_card_price'>$ 10</span>
      </div>

      <div className='order_section_card'>
        <span className='order_section_card_img' style={{backgroundImage: `url(${ require("./img/product1.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></span>
        <span className='order_section_card_title'><a href=''>cet23 serviette</a></span>
        <span className='order_section_card_price'>$ 99.<small>99</small></span>
      </div>

      <div className='order_section_card'>
        <span className='order_section_card_img' style={{backgroundImage: `url(${ require("./img/product2.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></span>
        <span className='order_section_card_title'><a href=''>cet23 serviette</a></span>
        <span className='order_section_card_price'>$ 40</span>
      </div>

      <div className='order_section_card'>
        <span className='order_section_card_img' style={{backgroundImage: `url(${ require("./img/product3.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></span>
        <span className='order_section_card_title'><a href=''>cet23 serviette</a></span>
        <span className='order_section_card_price'>$ 100</span>
      </div>

      <div className='order_section_card'>
        <span className='order_section_card_img' style={{backgroundImage: `url(${ require("./img/product4.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></span>
        <span className='order_section_card_title'><a href=''>cet23 serviette</a></span>
        <span className='order_section_card_price'>$ 200</span>
      </div>


      <div className='order_section_card'>
        <span className='order_section_card_img' style={{backgroundImage: `url(${ require("./img/product5.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></span>
        <span className='order_section_card_title'><a href=''>cet23 serviette</a></span>
        <span className='order_section_card_price'>$ 20</span>
      </div>

      <div className='order_section_card'>
        <span className='order_section_card_img' style={{backgroundImage: `url(${ require("./img/product1.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></span>
        <span className='order_section_card_title'><a href=''>cet23 serviette</a></span>
        <span className='order_section_card_price'>$ 400</span>
      </div>

      <div className='order_section_card'>
        <span className='order_section_card_img' style={{backgroundImage: `url(${ require("./img/product2.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></span>
        <span className='order_section_card_title'><a href=''>cet23 serviette</a></span>
        <span className='order_section_card_price'>$ 17</span>
      </div>

      <div className='order_section_card'>
        <span className='order_section_card_img' style={{backgroundImage: `url(${ require("./img/product1.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></span>
        <span className='order_section_card_title'><a href=''>cet23 serviette</a></span>
        <span className='order_section_card_price'>$ 60</span>
      </div>
    </section>
    
    <div className='seemore_section'>
      <button type='button' className='seemore_section_btn'>see more</button>
    </div>
    </>
  )
}
