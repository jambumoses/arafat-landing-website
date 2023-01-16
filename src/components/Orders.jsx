import {React,useState,useEffect} from 'react'
import orderimg from "./img/chair.png"
import { commerce } from './lib/commerce';


/* order item */
function OrderItem({id,name,image,price}){
  return(
    <div className='order_section_card'>
      <span className='order_section_card_img'>
        <img src={image} alt="" />
      </span>
      <span className='order_section_card_title'><a href=''>{name}</a></span>
      <span className='order_section_card_price'>
        <span>{price}</span>
        <span><i className="fa fa-cart-plus"></i></span>
      </span>
    </div>
  )
}



function FilterOptions(name,value){
  return(
    <option value="hi">hello</option>
  );
}


export default function Orders() {

  const [products,setProducts] = useState([])

  const fetchProducts = async () => {
    const {data} = await commerce.products.list();
    setProducts(data);
  }

  useEffect(()=>{
    fetchProducts();
  },[])

  return (
    <>
    <div className='filterbar'>
      filter 
      <select name="" id="">
        <option value="all">all categories</option>
            <FilterOptions/>
            <FilterOptions/>
            <FilterOptions/>
            <FilterOptions/>
      </select>
    </div>

    <section className='order_section'>
      {products.map(function(item){
        return (<OrderItem key={item.id} id={item.id} image={item.image.url} name={item.name} price={item.price.formatted_with_symbol}/>)
      })}
      
    </section>
    
    <div className='seemore_section'>
      <button type='button' className='seemore_section_btn'>see more</button>
    </div>
    </>
  )
}
