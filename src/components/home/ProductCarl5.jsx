import React from 'react';
import img from '../../assets/shops/shops-1.png';
import img1 from '../../assets/shops/shops-2.png';
import img2 from '../../assets/shops/shops-3.png';
import img3 from '../../assets/shops/shops-4.png';
import img4 from '../../assets/shops/shops-5.png';
import img5 from '../../assets/shops/shops-6.png';
import img6 from '../../assets/shops/shops-7.png';
import img7 from '../../assets/shops/shops-8.png';
import img8 from '../../assets/shops/shops-9.png';
import img9 from '../../assets/shops/shops-10.png';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const technoData = [
    {
        imgUrl: img,
        title: 'Sanctus amet sed ipsum lorem',
        date: 'May 01, 2022',
        name: 'Technology',
    },
    {
        imgUrl: img1,
        title: 'Sanctus amet sed ipsum lorem',
        date: 'May 01, 2022',
        name: 'Technology',
    },
    {
        imgUrl: img2,
        title: 'Sanctus amet sed ipsum lorem',
        date: 'May 01, 2022',
        name: 'Technology',
    },
    {
        imgUrl: img3,
        title: 'Sanctus amet sed ipsum lorem',
        date: 'May 01, 2022',
        name: 'Technology',
    },
    {
        imgUrl: img4,
        title: 'Sanctus amet sed ipsum lorem',
        date: 'May 01, 2022',
        name: 'Technology',
    },
    {
        imgUrl: img5,
        title: 'Sanctus amet sed ipsum lorem',
        date: 'May 01, 2022',
        name: 'Technology',
    },
    {
        imgUrl: img6,
        title: 'Sanctus amet sed ipsum lorem',
        date: 'May 01, 2022',
        name: 'Technology',
    },
    {
        imgUrl: img7,
        title: 'Sanctus amet sed ipsum lorem',
        date: 'May 01, 2022',
        name: 'Technology',
    },
    {
        imgUrl: img8,
        title: 'Sanctus amet sed ipsum lorem',
        date: 'May 01, 2022',
        name: 'Technology',
    },
    {
        imgUrl: img9,
        title: 'Sanctus amet sed ipsum lorem',
        date: 'May 01, 2022',
        name: 'Technology',
    },
]

const ProductCarl5 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
    }

  return (
    <>
        <div className="col-lg-6 py-3">
            <div className="bg-light py-2 px-4 mb-3">
                <h3 className="m-0">Technology</h3>
            </div>
            <Slider {...settings}>
                {
                    technoData.map((tech, index) => (
                        <div className="position-relative">
                            <img src={tech.imgUrl}  alt="" className="img-fluid w-100" style={{objectFit: 'cover'}} />
                            <div className="overlay position-relative bg-light">
                                <div className="mb-2" style={{fontSize: '13px'}}>
                                    <Link to='/'>{tech.name}</Link>
                                    <span className="px-1">/</span>
                                    <span>{tech.date}</span>
                                </div>
                                <Link className="h4 m-0" to='/'>{tech.title}</Link>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    </>
  )
}

export default ProductCarl5
