import React from 'react'

export default function FooterBrands() {
  return (
    <section className='footer_brands'>
        <div className='footer_brands_item' style={{backgroundImage: `url(${ require("./img/brand1.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
        <div className='footer_brands_item' style={{backgroundImage: `url(${ require("./img/brand2.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
        <div className='footer_brands_item' style={{backgroundImage: `url(${ require("./img/brand3.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
        <div className='footer_brands_item' style={{backgroundImage: `url(${ require("./img/brand4.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
        <div className='footer_brands_item' style={{backgroundImage: `url(${ require("./img/brand5.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
        <div className='footer_brands_item'></div>
        <div className='footer_brands_item'></div>
    </section>
  )
}
