import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Categories() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <>
    <section className='categories_wrapper'>
      <div className='categories_section'>
        <section className='categories_main_section'>

          
        <div className='category_container' style={{marginTop:"0px"}}>
            <div className='category_container_title'>
              <span>categories</span>
              <span><a href="#"></a></span>
            </div>
            <div className='category_listing'>
                <Slider {...settings}>
                  <div className='category_listing_item'>
                    <span className='category_listing_item_img'></span>
                    <span className='category_listing_item_info_ctg'>
                      <span className='category_listing_item_info_name_ctg'><a href="">love chair</a></span>
                    </span>
                  </div>

                  <div className='category_listing_item'>
                    <span className='category_listing_item_img'></span>
                    <span className='category_listing_item_info_ctg'>
                      <span className='category_listing_item_info_name_ctg'><a href="">love chair</a></span>
                    </span>
                  </div>

                  <div className='category_listing_item'>
                    <span className='category_listing_item_img'></span>
                    <span className='category_listing_item_info_ctg'>
                      <span className='category_listing_item_info_name_ctg'><a href="">love chair</a></span>
                    </span>
                  </div>

                  <div className='category_listing_item'>
                    <span className='category_listing_item_img'></span>
                    <span className='category_listing_item_info_ctg'>
                      <span className='category_listing_item_info_name_ctg'><a href="">love chair</a></span>
                    </span>
                  </div>


                  <div className='category_listing_item'>
                    <span className='category_listing_item_img'></span>
                    <span className='category_listing_item_info_ctg'>
                      <span className='category_listing_item_info_name_ctg'><a href="">love chair</a></span>
                    </span>
                  </div>

                  <div className='category_listing_item'>
                    <span className='category_listing_item_img'></span>
                    <span className='category_listing_item_info_ctg'>
                      <span className='category_listing_item_info_name_ctg'><a href="">love chair</a></span>
                    </span>
                  </div>

                  <div className='category_listing_item'>
                    <span className='category_listing_item_img'></span>
                    <span className='category_listing_item_info_ctg'>
                      <span className='category_listing_item_info_name_ctg'><a href="">love chair</a></span>
                    </span>
                  </div>
                </Slider>
            </div>
          </div>

          <section className='category_in_specific'>
            
            <div className='category_in_specific_item_top'>
              <div className='category_in_specific_item_top_info'>
                <div className='category_in_specific_item_top_info_head'>our collection</div>
                <div className='category_in_specific_item_top_info_content'>
                  <span className='category_in_specific_item_top_info_content_title'>U - Buddy Table</span>
                  <span className='category_in_specific_item_top_info_content_description'>
                    We have been recognized by the Uganda Revenue Authority as being one of largest tax payers in the country and in 2019we attained the coveted ‘’Authorized Economic Operator certificate’’ from the tax body.
                  </span>
                </div>
              </div>
              <div className='category_in_specific_item_top_img'>
                <span className='category_in_specific_item_top_img_btns'>
                  <a href="">$ 200</a>
                </span>
                <span className='category_in_specific_item_top_img_thumbnail'>image</span>
              </div>
            </div>

            <div className='category_in_specific_item'>
              <div className='category_in_specific_item_img'></div>
              <div className='category_in_specific_item_info'>
                <div className='category_in_specific_item_info_title'>U - Buddy Table</div>
                <div className='category_in_specific_item_info_content'>
                We have been recognized by the Uganda Revenue Authority as being one of largest tax payers in the country and in 2019we attained the coveted ‘’Authorized Economic Operator certificate’’ from the tax body.
                </div>
                <div className='category_in_specific_item_info_prices'>
                  <a href="">$ 200</a>
                </div>
              </div>
            </div>

            <div className='category_in_specific_item'>
              <div className='category_in_specific_item_img'></div>
              <div className='category_in_specific_item_info'>
                <div className='category_in_specific_item_info_title'>U - Buddy Table</div>
                <div className='category_in_specific_item_info_content'>
                We have been recognized by the Uganda Revenue Authority as being one of largest tax payers in the country and in 2019we attained the coveted ‘’Authorized Economic Operator certificate’’ from the tax body.
                </div>
                <div className='category_in_specific_item_info_prices'>
                  <a href="">$ 200</a>
                </div>
              </div>
            </div>

            <div className='category_in_specific_item'>
              <div className='category_in_specific_item_img'></div>
              <div className='category_in_specific_item_info'>
                <div className='category_in_specific_item_info_title'>U - Buddy Table</div>
                <div className='category_in_specific_item_info_content'>
                We have been recognized by the Uganda Revenue Authority as being one of largest tax payers in the country and in 2019we attained the coveted ‘’Authorized Economic Operator certificate’’ from the tax body.
                </div>
                <div className='category_in_specific_item_info_prices'>
                  <a href="">$ 200</a>
                </div>
              </div>
            </div>

            <div className='category_in_specific_item'>
              <div className='category_in_specific_item_img'></div>
              <div className='category_in_specific_item_info'>
                <div className='category_in_specific_item_info_title'>U - Buddy Table</div>
                <div className='category_in_specific_item_info_content'>
                We have been recognized by the Uganda Revenue Authority as being one of largest tax payers in the country and in 2019we attained the coveted ‘’Authorized Economic Operator certificate’’ from the tax body.
                </div>
                <div className='category_in_specific_item_info_prices'>
                  <a href="">$ 200</a>
                </div>
              </div>
            </div>

            <div className='category_in_specific_item category_in_specific_item_reverse'>
              <div className='category_in_specific_item_img'></div>
              <div className='category_in_specific_item_info'>
                <div className='category_in_specific_item_info_title'>U - Buddy Table</div>
                <div className='category_in_specific_item_info_content'>
                We have been recognized by the Uganda Revenue Authority as being one of largest tax payers in the country and in 2019we attained the coveted ‘’Authorized Economic Operator certificate’’ from the tax body.
                </div>
                <div className='category_in_specific_item_info_prices'>
                  <a href="">$ 200</a>
                </div>
              </div>
            </div>
          </section>
{/* 
          <div className='category_container'>
            <div className='category_container_title'>
              <span>Top sellers</span>
              <span><a href="#">see all</a></span>
            </div>
            <div className='category_listing'>
                <Slider {...settings}>
                  <div className='category_listing_item'>
                    <span className='category_listing_item_img'></span>
                    <span className='category_listing_item_info'>
                      <span className='category_listing_item_info_name'><a href="">love chair</a></span>
                      <span className='category_listing_item_info_price'>$200</span>
                    </span>
                  </div>

                  <div className='category_listing_item'>
                    <span className='category_listing_item_img'></span>
                    <span className='category_listing_item_info'>
                      <span className='category_listing_item_info_name'><a href="">love chair</a></span>
                      <span className='category_listing_item_info_price'>$200</span>
                    </span>
                  </div>

                  <div className='category_listing_item'>
                    <span className='category_listing_item_img'></span>
                    <span className='category_listing_item_info'>
                      <span className='category_listing_item_info_name'><a href="">love chair</a></span>
                      <span className='category_listing_item_info_price'>$200</span>
                    </span>
                  </div>

                  <div className='category_listing_item'>
                    <span className='category_listing_item_img'></span>
                    <span className='category_listing_item_info'>
                      <span className='category_listing_item_info_name'><a href="">love chair</a></span>
                      <span className='category_listing_item_info_price'>$200</span>
                    </span>
                  </div>


                  <div className='category_listing_item'>
                    <span className='category_listing_item_img'></span>
                    <span className='category_listing_item_info'>
                      <span className='category_listing_item_info_name'><a href="">love chair</a></span>
                      <span className='category_listing_item_info_price'>$200</span>
                    </span>
                  </div>

                  <div className='category_listing_item'>
                    <span className='category_listing_item_img'></span>
                    <span className='category_listing_item_info'>
                      <span className='category_listing_item_info_name'><a href="">love chair</a></span>
                      <span className='category_listing_item_info_price'>$200</span>
                    </span>
                  </div>

                  <div className='category_listing_item'>
                    <span className='category_listing_item_img'></span>
                    <span className='category_listing_item_info'>
                      <span className='category_listing_item_info_name'><a href="">love chair</a></span>
                      <span className='category_listing_item_info_price'>$200</span>
                    </span>
                  </div>
                </Slider>
            </div>
          </div> */}

        </section>
        
        <section className='categories_aside_section'>
            <div className='aside_contain'>
              <span className='aside_heading'>product range</span>
              <ul className='aside_ul'>
                <li><a href=''>toilet paper</a></li>
                <li><a href=''>kitchen towels</a></li>
                <li><a href=''>napkin</a></li>
                <li><a href=''>serviettes</a></li>
                <li><a href=''>medical rolls</a></li>
                <li><a href=''>thermal rools</a></li>
                <li><a href=''>sikee hygiene multifold</a></li>
                <li><a href=''>facial tissues</a></li>
                <li><a href=''>toilet paper</a></li>
                <li><a href=''>kitchen towels</a></li>
                <li><a href=''>napkin</a></li>
                <li><a href=''>serviettes</a></li>
                <li><a href=''>medical rolls</a></li>
                <li><a href=''>thermal rools</a></li>
                <li><a href=''>sikee hygiene multifold</a></li>
                <li><a href=''>facial tissues</a></li>
                <li><a href=''>toilet paper</a></li>
                <li><a href=''>kitchen towels</a></li>
                <li><a href=''>napkin</a></li>
                <li><a href=''>serviettes</a></li>
                <li><a href=''>medical rolls</a></li>
                <li><a href=''>thermal rools</a></li>
                <li><a href=''>sikee hygiene multifold</a></li>
                <li><a href=''>facial tissues</a></li>
              </ul>
            </div>
        </section>
      </div>
    </section>
    </>
  )
}
