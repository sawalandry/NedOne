import React from 'react';
// import { Link } from 'react-router-dom';
import img from '../../assets/shops/shops-1.png';
import img1 from '../../assets/shops/shops-2.png';
import img2 from '../../assets/shops/shops-3.png';
import img3 from '../../assets/shops/shops-4.png';
import img4 from '../../assets/shops/shops-5.png';
// import img5 from '../../assets/shops/shops-6.png';
// import img6 from '../../assets/shops/shops-7.png';
// import img7 from '../../assets/shops/shops-8.png';
// import imgU from '../../assets/top/category-3.png';
import SocialFile from '../../components/home/SocialFile';
import Category from './Category';

const categoryData = [
  {
    imgUrl: img,
    name: 'Technology',
    date: 'May 01, 2022',
    title: 'Est stet amet ipsum stet clita rebum duo',
    para: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...',
  },
  {
    imgUrl: img1,
    name: 'Technology',
    date: 'May 01, 2022',
    title: 'Est stet amet ipsum stet clita rebum duo',
    para: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...',
  },
  {
    imgUrl: img2,
    name: 'Technology',
    date: 'May 01, 2022',
    title: 'Est stet amet ipsum stet clita rebum duo',
    para: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...',
  },
  {
    imgUrl: img3,
    name: 'Technology',
    date: 'May 01, 2022',
    title: 'Est stet amet ipsum stet clita rebum duo',
    para: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...',
  },
  {
    imgUrl: img4,
    name: 'Technology',
    date: 'May 01, 2022',
    title: 'Est stet amet ipsum stet clita rebum duo',
    para: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...',
  },
  {
    imgUrl: img,
    name: 'Technology',
    date: 'May 01, 2022',
    title: 'Est stet amet ipsum stet clita rebum duo',
    para: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...',
  },
  // {
  //   imgUrl: img5,
  //   name: 'Technology',
  //   date: 'May 01, 2022',
  //   title: 'Est stet amet ipsum stet clita rebum duo',
  //   para: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...',
  // },
  // {
  //   imgUrl: img6,
  //   name: 'Technology',
  //   date: 'May 01, 2022',
  //   title: 'Est stet amet ipsum stet clita rebum duo',
  //   para: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...',
  // },
  // {
  //   imgUrl: img7,
  //   name: 'Technology',
  //   date: 'May 01, 2022',
  //   title: 'Est stet amet ipsum stet clita rebum duo',
  //   para: 'Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...',
  // },
]

const Categories = () => {
  return (
    <div>
      <div className="container-fluid py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <Category categoryData={categoryData}/>
              {/* <div className="mb-3">
                <Link to='/'>
                  <img src={imgU} alt="/" className="img-fluid w-100" style={{height: '150px'}}/>
                </Link>
              </div> */}
            </div>
            <SocialFile />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Categories

