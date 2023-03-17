import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import img from '../../assets/discount/discount-1.png';
import img1 from '../../assets/discount/discount-2.png';
import img2 from '../../assets/discount/discount-3.png';
import img3 from '../../assets/discount/discount-4.png';
import img4 from '../../assets/discount/discount-5.png';
import img5 from '../../assets/discount/discount-6.png';
import img6 from '../../assets/discount/discount-7.png';
import img7 from '../../assets/discount/discount-8.png';


const featuredData = [
    {
        imgUrl: img,
        cat: 'Technologies',
        date: 'June 30, 2022',
        url: '/',
        title: 'Sanctus amet sed ipsum lorem'
    },
    {
        imgUrl: img1,
        cat: 'Business',
        date: 'June 30, 2022',
        url: '/',
        title: 'Sanctus amet sed ipsum lorem'
    },
    {
        imgUrl: img2,
        cat: 'Five Generation',
        date: 'June 30, 2022',
        url: '/',
        title: 'Sanctus amet sed ipsum lorem'
    },
    {
        imgUrl: img3,
        cat: 'Technologies',
        date: 'June 30, 2022',
        url: '/',
        title: 'Sanctus amet sed ipsum lorem'
    },
    {
        imgUrl: img4,
        cat: 'Technologies',
        date: 'June 30, 2022',
        url: '/',
        title: 'Sanctus amet sed ipsum lorem'
    },
    {
        imgUrl: img5,
        cat: 'Technologies',
        date: 'June 30, 2022',
        url: '/',
        title: 'Sanctus amet sed ipsum lorem'
    },
    {
        imgUrl: img6,
        cat: 'Technologies',
        date: 'June 30, 2022',
        url: '/',
        title: 'Sanctus amet sed ipsum lorem'
    },
    {
        imgUrl: img7,
        cat: 'Technologies',
        date: 'June 30, 2022',
        url: '/',
        title: 'Sanctus amet sed ipsum lorem'
    },
]


const ProductCarl3 = () => {

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
                <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                    <h3 className="m-0">Featured</h3>
                    <Link className="text-secondary font-weight-medium text-decoration-none" to='/categories'>View All...</Link>
                </div>
                <Slider {...settings}>
                    {
                        featuredData.map((feat, index) => (
                            <div className="position-relative overflow-hidden" style={{height: '300px'}} key={index}>
                                <img src={feat.imgUrl} style={{objectFit: 'cover'}} alt="/" className="img-fluid w-100 h-100" />
                                <div className="overlay">
                                    <div className="mb-1" style={{fontSize: '13px'}}>
                                        <Link className='text-white' to='/article'>{feat.cat}</Link>
                                        <span className="px-1 text-white">/</span>
                                        <Link className='text-white' to='/article'>{feat.date}</Link>
                                    </div>
                                    <Link className='h4 m-0 text-white' to='/article'>{feat.title}</Link>
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

export default ProductCarl3
