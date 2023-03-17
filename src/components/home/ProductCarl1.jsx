import React from 'react';
// import img from '../../assets/shops/shops-1.png';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import img from '../../assets/shops/shops-1.png';
import img1 from '../../assets/shops/shops-2.png';
import img2 from '../../assets/shops/shops-3.png';
import img3 from '../../assets/shops/shops-4.png';
import img4 from '../../assets/shops/shops-5.png';
import img5 from '../../assets/shops/shops-6.png';
import img6 from '../../assets/shops/shops-7.png';



const ProdDatas = [
    {
      imgUrl: img,
      title: 'Lorem ipsum dolor sit amet consec adipis elit',
      url: '/article'
    },
    {
      imgUrl: img1,
      title: 'Lorem ipsum dolor sit amet consec adipis elit',
      url: '/article'
    },
    {
      imgUrl: img2,
      title: 'Lorem ipsum dolor sit amet consec adipis elit',
      url: '/article'
    },
    {
      imgUrl: img3,
      title: 'Lorem ipsum dolor sit amet consec adipis elit',
      url: '/article'
    },
    {
      imgUrl: img4,
      title: 'Lorem ipsum dolor sit amet consec adipis elit',
      url: '/article'
    },
    {
      imgUrl: img5,
      title: 'Lorem ipsum dolor sit amet consec adipis elit',
      url: '/article'
    },
    {
      imgUrl: img6,
      title: 'Lorem ipsum dolor sit amet consec adipis elit',
      url: '/article'
    },
  ]

const ProductCarl1 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
    }
  return (
    <>
        <div className="container-fluid py-3">
            <div className="container">
                <Slider {...settings} className='position-relative mb-3 mb-lg-0'>
                    {
                        ProdDatas.map((prod, index) => (
                        <div className="d-flex" key={index}>
                            <img src={prod.imgUrl} alt="/" style={{width: '80px', height: '80px', objectFit: 'cover'}}/>
                            <div className="d-flex align-items-center bg-light px-3" style={{height: '80px'}}>
                                <Link to={prod.url} className='text-secondary font-weight-semi-bold'>
                                    {prod.title}
                                </Link>
                            </div>
                        </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    </>
  )
}

export default ProductCarl1
