import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useSelector} from "react-redux"

import {Link} from "react-router-dom";

export default function Nav() {
    
    const constantInfo = useSelector(state=>state.constant.data)

  return (
    <>

    <nav className='navigation'>
        <div className='navigation_logo_section'>
            <img src={require(`${constantInfo.logo.nav}`)} alt="" />
        </div>

        <nav className='navigation_nav'>
            <div>
                {/* <a href="#" >home</a> */}
                <Link to="/" className='nav-link active'>home</Link>
                <Link to="/categories" className='nav-link category_drop_cont'>
                    <span className='category_drop'>categories <i style={{color:"gray",fontSize: "14px"}} className="fa fa-angle-down"></i></span>
                    <ul className='category_dropdown'>
                        <li className='border-d'><a href=''>toilet paper</a></li>
                        <li className='border-d'><a href=''>kitchen towels</a></li>
                        <li className='border-d'><a href=''>napkin</a></li>
                        <li className='border-d'><a href=''>serviettes</a></li>
                        <li className='border-d'><a href=''>medical rolls</a></li>
                        <li className='border-d'><a href=''>thermal rools</a></li>
                        <li className='border-d'><a href=''>sikee hygiene multifold</a></li>
                        <li className='border-d'><a href=''>facial tissues</a></li>
                        <li className='border-d'><a href=''>toilet paper</a></li>
                        <li><a href=''>kitchen towels</a></li>
                    </ul>
                </Link>
                <Link to="/orders" className='nav-link'>order now</Link>
                <Link to="/about" className='nav-link'>about us</Link>
                <Link to="/brands" className='nav-link'>brands</Link>
                {/* <Link to="/home" className='nav-link'>opportunties</Link> */}
                {/* <Link to="/news" className='nav-link'>news</Link> */}
                <Link to="/contact" className='nav-link'>contact us</Link>
            </div>
            <div className='navigation_nav_accounts'>
                <Link to="/accounts" className='user_links account-drop_cont'>
                    <span className='nav-icon'><i className="fa fa-user"></i></span>
{/*                     <ul className='account_dropdown'>
                        <li className='border-d'><a href=''>signup</a></li>
                        <li className='border-d'><a href=''>signin</a></li>
                        <li><a href=''>logout</a></li>
                    </ul> */}
                </Link>
                {/* <span onClick={showAccount} className='user_links'><i className="fa fa-user" style={{fontSize:"16px", color:"lightgreen",cursor: "pointer"}}></i></span> */}
                <Link to="/cart" className='user_links'><span className='nav-icon'><i className="fa fa-shopping-cart"></i> <sup style={{color:"grey"}}>12</sup></span></Link>
            </div>
        </nav>

        <div className='navigation_search_section'>
            <form action="" method="post">
                <input type="search" name="search" placeholder='search here'/>
                <button type='button'><SearchIcon sx={{color: "pink"}}/></button>
            </form>
        </div>
    </nav>
    </>
  )
}
