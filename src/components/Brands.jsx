import React from 'react'
import {useSelector} from "react-redux"


/* brand Cards */
function BrandCard({count,name,image,link,description}){

  return(
    <div className='brand'>
      <span className='brand_count'>{count}</span>
      <span className='brand_name'>{name}</span>
      <span className='brand_image'>
        <img src={image} alt={name} />
      </span>
      <span className='brand_description'>
        {description}
      </span>
      <a href={link}>see more</a>
    </div>
  )
}





export default function Brands() {

  const constantInfo = useSelector(state=>state.constant.data)
  const BrandHeading = useSelector(state=>state.constant.data.brands.heading)

  return (
    <>
      <div className='brand_title'>
        {BrandHeading}
      </div>

      <section className='brand_section'>
        {constantInfo.brands.brands.map(function(item){
          return(
            <BrandCard key={item.count} count={item.count} name={item.name} description={item.description} image={item.image} link={item.link}/>
          )
        })}
      </section>
    </>
  )
}
