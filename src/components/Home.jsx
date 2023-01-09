import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import img from "../components/img/pic1.jpg";
import img1 from "../components/img/pic2.jpg";


export default function Home() {
  return (
    <>
    <section className='wrapper'>
        <Carousel style={{backgroundColor:"transparent",height: "100vh",width:"100%"}}>
        <Carousel.Item>
            <section className='carousel_container'>
            <img src={img}/>
            </section>
        </Carousel.Item>

        <Carousel.Item>
            <section className='carousel_container'>
            <img src={img1}/>
            </section>
        </Carousel.Item>
        </Carousel>
        
    </section>

    <section className='lastest_product_grid'>
      <section className='lastest_product_grid_sect1'>
        <div className='lastest_product_grid_sect1_top'>
          <span className='lastest_product_grid_sect1_top_title'>lastest</span>
          <span className='lastest_product_grid_sect1_top_subtitle'><span>pro</span>ducts</span>
        </div>
        <div className='lastest_product_grid_sect1_bottom'>
          <span className='lastest_product_grid_sect1_bottom_img' style={{backgroundImage: `url(${ require("./img/product1.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></span>
          <div className='lastest_product_grid_sect1_bottom_titles'>
          <span className='lastest_product_grid_sect1_bottom_name'>white chair</span>
          <span className='lastest_product_grid_sect1_bottom_price'>$63</span>
          </div>
        </div>
      </section>

      <section className='lastest_product_grid_sect2'>
        <div className='lastest_product_grid_sect2_top'>
        <span className='lastest_product_grid_sect1_bottom_img' style={{backgroundImage: `url(${ require("./img/product4.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></span>
          <div className='lastest_product_grid_sect1_bottom_titles'>
          <span className='lastest_product_grid_sect1_bottom_name'>white chair</span>
          <span className='lastest_product_grid_sect1_bottom_price'>$63</span>
          </div>
        </div>
        <div className='lastest_product_grid_sect2_bottom'>
        <span className='lastest_product_grid_sect1_bottom_img' style={{backgroundImage: `url(${ require("./img/product2.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></span>
          <div className='lastest_product_grid_sect1_bottom_titles'>
          <span className='lastest_product_grid_sect1_bottom_name'>white chair</span>
          <span className='lastest_product_grid_sect1_bottom_price'>$63</span>
          </div>
        </div>
      </section>

      <section className='lastest_product_grid_sect3'>
        <div className='lastest_product_grid_sect3_thumbnail'>
          <span className='lastest_product_grid_sect3_thumbnail_img' style={{backgroundImage: `url(${ require("./img/product5.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></span>
          <span className='lastest_product_grid_sect3_thumbnail_name'>celling lamp</span>
          <span className='lastest_product_grid_sect3_thumbnail_price'>$199</span>
        </div>
      </section>
    </section>
    </>
  )
}
