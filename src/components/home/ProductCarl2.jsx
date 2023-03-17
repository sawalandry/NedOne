import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import img from '../../assets/flash/flash-1.png';
import img1 from '../../assets/flash/flash-2.png';
import img2 from '../../assets/flash/flash-3.png';
import img3 from '../../assets/flash/flash-4.png';
// import img4 from '../../assets/flash/flash-5.png';
import imgcat1 from '../../assets/shones/cat-500x80-1.jpg';
import imgcat2 from '../../assets/shones/cat-500x80-2.jpg';
import imgcat3 from '../../assets/shones/cat-500x80-3.jpg';
import imgcat4 from '../../assets/shones/cat-500x80-4.jpg';

const carCatData = [
    {
        imgUrl: img,
        name: 'Technologies',
        date: 'May 01, 2022',
        title: 'Sanctus amet sed amet ipsum lorem. Dolores et erat et elitr sea sed.',
    },
    {
        imgUrl: img1,
        name: 'Technologies',
        date: 'May 01, 2022',
        title: 'Sanctus amet sed amet ipsum lorem. Dolores et erat et elitr sea sed.',
    },
    {
        imgUrl: img2,
        name: 'Technologies',
        date: 'May 01, 2022',
        title: 'Sanctus amet sed amet ipsum lorem. Dolores et erat et elitr sea sed.',
    },
    {
        imgUrl: img3,
        name: 'Technologies',
        date: 'May 01, 2022',
        title: 'Sanctus amet sed amet ipsum lorem. Dolores et erat et elitr sea sed.',
    },
    // {
    //     imgUrl: img4,
    //     name: 'Technologies',
    //     date: 'May 01, 2022',
    //     title: 'Sanctus amet sed amet ipsum lorem. Dolores et erat et elitr sea sed.',
    // },
]

const catDatas= [
    {
        imgUrl: imgcat1,
        categ: 'Business',
        url: '/article',
    },
    {
        imgUrl: imgcat2,
        categ: 'Technologies',
        url: '/article',
    },
    {
        imgUrl: imgcat3,
        categ: 'Entertainment',
        url: '/article',
    },
    {
        imgUrl: imgcat4,
        categ: 'Sport',
        url: '/article',
    },
]

const ProductCarl2 = () => {
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
        <div className="container-fluid py-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <Slider {...settings}>
                            {
                                carCatData.map((carc, index) => (
                                    <div className="position-relative overflow-hidden" style={{height: '435px'}} key={index}>
                                        <img src={carc.imgUrl} alt="/" style={{objectFit: 'cover'}} className="img-fluid" />
                                        <div className="overlay">
                                            <div className="mb-1">
                                                <Link className="text-white" to='/article'>{carc.name}</Link>
                                                <span className="px-2 text-white">/</span>
                                                <Link to='/' className='text-white'>{carc.date}</Link>
                                            </div>
                                            <Link className="h2 m-0 text-white font-weight-bold" to='/article'>
                                                {carc.title}
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                            <h3 className="mb-0">Categories</h3>
                            <Link className="text-secondary font-weight-medium text-decoration-none" to='/categories'>
                                View All...
                            </Link>
                        </div>
                        {
                            catDatas.map((cat, index) => (
                                <div className="position-relative overflow-hidden mb-8" style={{height: '80px'}} key={index}>
                                    <img src={cat.imgUrl} style={{objectFit: 'cover'}} alt="/" className="img-fluid w-100 h-100" />
                                    <a href={cat.url} className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none">
                                        {cat.categ}
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductCarl2
