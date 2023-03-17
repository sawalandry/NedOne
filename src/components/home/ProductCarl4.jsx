import React from 'react';
import img from '../../assets/arrivals/arrivals1.png';
import img1 from '../../assets/arrivals/arrivals2.png';
import img2 from '../../assets/arrivals/arrivals3.png';
import img3 from '../../assets/arrivals/arrivals4.png';
import img4 from '../../assets/arrivals/arrivals5.png';
import img5 from '../../assets/arrivals/arrivals6.png';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import ProductCarl5 from './ProductCarl5';

const businessData = [
    {
        imgUrl: img,
        cat: 'Business',
        title: 'Sanctus amet sed ipsum lorem',
        date: 'May 3, 2023'
    },
    {
        imgUrl: img1,
        cat: 'Business',
        title: 'Sanctus amet sed ipsum lorem',
        date: 'May 3, 2023'
    },
    {
        imgUrl: img2,
        cat: 'Business',
        title: 'Sanctus amet sed ipsum lorem',
        date: 'May 3, 2023'
    },
    {
        imgUrl: img3,
        cat: 'Business',
        title: 'Sanctus amet sed ipsum lorem',
        date: 'May 3, 2023'
    },
    {
        imgUrl: img4,
        cat: 'Business',
        title: 'Sanctus amet sed ipsum lorem',
        date: 'May 3, 2023'
    },
    {
        imgUrl: img5,
        cat: 'Business',
        title: 'Sanctus amet sed ipsum lorem',
        date: 'May 3, 2023'
    },
]

const ProductCarl4 = () => {

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
    <div>
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 py-3">
                        <div className="bg-light py-2 px-4 mb-3">
                            <h3 className="m-0">Business</h3>
                        </div>
                        <Slider {...settings}>
                            {
                                businessData.map((bus, index) => (
                                    <div className="position-relative" key={index}>
                                        <img src={bus.imgUrl} alt="/" className="img-fluid w-100" style={{objectFit: 'cover'}} />
                                        <div className="overlay position-relative bg-light">
                                            <div className="mb-2" style={{fontSize: '13px'}}>
                                                <Link to='/'>{bus.cat}</Link>
                                                <span className='px-1'>/</span>
                                                <span>{bus.date}</span>
                                            </div>
                                            <Link className="h4 m-0" to='/'>{bus.title}</Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                    <ProductCarl5 />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCarl4
