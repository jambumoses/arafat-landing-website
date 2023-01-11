import {React,useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import member from "./img/member.jpg";

export default function About() {


  useEffect(()=>{
      Aos.init({duration: 2000});
  },[]);


  return (
    <>
    <section className='about-wrapper'>

    </section>

    <section className='about-container'>
      <section className='about-container_1'>
        <div className='about-container_1_mission'>
          <h2 data-aos="fade-right">Mission</h2>
          <span  data-aos="fade-up">
          To efficiently distribute quality products that delight customers and deliver sustainable stakeholder value
          </span>
        </div>

        <div className='about-container_1_vision'>
          <h2 data-aos="fade-right">Vision</h2>
          <span data-aos="fade-up">
            Enriching lives through placing quality products at arms length
          </span>
        </div>

        <div className='about-container_1_img' style={{backgroundImage: `url(${ require("./img/people1.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
        </div>
      </section>
      
      
      <section className='about-container_2'>
        <p data-aos="fade-up">
          African Queen No. 1 Distributor Limited is a privately-owned organization in the business of large-scale importation and distribution of Fast-Moving Consumer goods in the categories of Personal Care (Hair and Skin), Stationery, Homecare and Foods & Beverages.
        </p>

        <p data-aos="fade-up">
          From a humble beginning of a small shop in the heart of Kampala downtown area of kikuubo, African Queen has grown into the leading distributor of Fast-Moving Consumer Goods in Uganda. Currently, the company has eight depots around the country i.e. in the Central Business District (2 Depots), Namanve, Gulu, Mbarara, Masaka, Hoima and Mbale.
        </p>

        <p data-aos="fade-up">
          We pride ourselves in distributing only the best quality affordable products from world known manufacturers including; PZ Cussons East Africa ,HACO Industries, Kimfay East Africa, Kevian East Africa, Trident Industries, Great Lakes Brands, Suntory Beverages,Trufoods East African, Bic East Africa, Loreal East Africa, GlaxoSmithKline (GSK),Proctor & Allan Industries, Ketepa and Molfix Industries
        </p>

        <p data-aos="fade-up">
          We have been recognized by the Uganda Revenue Authority as being one of largest tax payers in the country and in 2019we attained the coveted ‘’Authorized Economic Operator certificate’’ from the tax body.
        </p>
      </section>
    </section>

    <section className='members_section'>
      <h1 data-aos="fade-up" className='members_section_main_title'>Corporate Governance Board</h1>
      <div className='members_section_member_container'>
        
        <div  data-aos="fade-up" className='members_section_member'>
          <div className='members_section_member_thumbnail' style={{backgroundImage: `url(${ require("./img/member_remove.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
          <div className='members_section_member_info'>
            <span>arafat mukulish</span>
            <span className='members_section_member_info_titles'>CEO AFRICAN QUEEEN</span>
          </div>
        </div>

        <div  data-aos="fade-up" className='members_section_member'>
          <div className='members_section_member_thumbnail' style={{backgroundImage: `url(${ require("./img/member_remove.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
          <div className='members_section_member_info'>
            <span>arafat mukulish</span>
            <span className='members_section_member_info_titles'>CEO AFRICAN QUEEEN</span>
          </div>
        </div>

        <div  data-aos="fade-up" className='members_section_member'>
          <div className='members_section_member_thumbnail' style={{backgroundImage: `url(${ require("./img/member_remove.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
          <div className='members_section_member_info'>
            <span>arafat mukulish</span>
            <span className='members_section_member_info_titles'>CEO AFRICAN QUEEEN</span>
          </div>
        </div>

        <div  data-aos="fade-up" className='members_section_member'>
          <div className='members_section_member_thumbnail' style={{backgroundImage: `url(${ require("./img/member_remove.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
          <div className='members_section_member_info'>
            <span>arafat mukulish</span>
            <span className='members_section_member_info_titles'>CEO AFRICAN QUEEEN</span>
          </div>
        </div>

        <div  data-aos="fade-up" className='members_section_member'>
          <div className='members_section_member_thumbnail' style={{backgroundImage: `url(${ require("./img/member_remove.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
          <div className='members_section_member_info'>
            <span>arafat mukulish</span>
            <span className='members_section_member_info_titles'>CEO AFRICAN QUEEEN</span>
          </div>
        </div>

        <div  data-aos="fade-up" className='members_section_member'>
          <div className='members_section_member_thumbnail' style={{backgroundImage: `url(${ require("./img/member_remove.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
          <div className='members_section_member_info'>
            <span>arafat mukulish</span>
            <span className='members_section_member_info_titles'>CEO AFRICAN QUEEEN</span>
          </div>
        </div>
      </div>
    </section>






    
    <section className='members_section'>
      <h1 data-aos="fade-up" className='members_section_main_title'>The Management Team</h1>
      <div className='members_section_member_container'>
        
        <div  data-aos="fade-up" className='members_section_member'>
          <div className='members_section_member_thumbnail' style={{backgroundImage: `url(${ require("./img/member_remove.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
          <div className='members_section_member_info'>
            <span>arafat mukulish</span>
            <span className='members_section_member_info_titles'>CEO AFRICAN QUEEEN</span>
          </div>
        </div>

        <div  data-aos="fade-up" className='members_section_member'>
          <div className='members_section_member_thumbnail' style={{backgroundImage: `url(${ require("./img/member_remove.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
          <div className='members_section_member_info'>
            <span>arafat mukulish</span>
            <span className='members_section_member_info_titles'>CEO AFRICAN QUEEEN</span>
          </div>
        </div>

        <div  data-aos="fade-up" className='members_section_member'>
          <div className='members_section_member_thumbnail' style={{backgroundImage: `url(${ require("./img/member_remove.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
          <div className='members_section_member_info'>
            <span>arafat mukulish</span>
            <span className='members_section_member_info_titles'>CEO AFRICAN QUEEEN</span>
          </div>
        </div>

        <div  data-aos="fade-up" className='members_section_member'>
          <div className='members_section_member_thumbnail' style={{backgroundImage: `url(${ require("./img/member_remove.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
          <div className='members_section_member_info'>
            <span>arafat mukulish</span>
            <span className='members_section_member_info_titles'>CEO AFRICAN QUEEEN</span>
          </div>
        </div>

        <div  data-aos="fade-up" className='members_section_member'>
          <div className='members_section_member_thumbnail' style={{backgroundImage: `url(${ require("./img/member_remove.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
          <div className='members_section_member_info'>
            <span>arafat mukulish</span>
            <span className='members_section_member_info_titles'>CEO AFRICAN QUEEEN</span>
          </div>
        </div>

        <div  data-aos="fade-up" className='members_section_member'>
          <div className='members_section_member_thumbnail' style={{backgroundImage: `url(${ require("./img/member_remove.png") })`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
          <div className='members_section_member_info'>
            <span>arafat mukulish</span>
            <span className='members_section_member_info_titles'>CEO AFRICAN QUEEEN</span>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
