import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/shones/cat3.jpg';
import img1 from '../../assets/shones/cat4.jpg';
import img2 from '../../assets/shones/cat5.jpg';
import img3 from '../../assets/shones/cat6.jpg';
import img4 from '../../assets/shones/cat7.jpg';
import img5 from '../../assets/shones/cat8.jpg';


const tradingData = [
    {
        imgUrl: img,
        name: 'Technology',
        date: 'May 01, 2022',
        title: 'Lorem ipsum dolor sit amet consec adipis elit',
    },
    {
        imgUrl: img1,
        name: 'Technology',
        date: 'May 01, 2022',
        title: 'Lorem ipsum dolor sit amet consec adipis elit',
    },
    {
        imgUrl: img2,
        name: 'Technology',
        date: 'May 01, 2022',
        title: 'Lorem ipsum dolor sit amet consec adipis elit',
    },
    {
        imgUrl: img3,
        name: 'Technology',
        date: 'May 01, 2022',
        title: 'Lorem ipsum dolor sit amet consec adipis elit',
    },
    {
        imgUrl: img4,
        name: 'Technology',
        date: 'May 01, 2022',
        title: 'Lorem ipsum dolor sit amet consec adipis elit',
    },
    {
        imgUrl: img5,
        name: 'Technology',
        date: 'May 01, 2022',
        title: 'Lorem ipsum dolor sit amet consec adipis elit',
    },
]

const Popular = () => {
  return (
    <>
        <div className="pb-3">
            <div className="bg-light py-2 px-4 mb-3">
                <h3 className="m-0">Trading</h3>
            </div>
            {
                tradingData.map((item, index) => (
                    <div className="d-flex mb-3" key={index}>
                        <img src={item.imgUrl} alt="/" style={{width: '100px', height: '100px', objectFit: 'cover'}} />
                        <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{height:'100px'}}>
                            <div className="mb-1" style={{fontSize: '13px'}}>
                                <Link to='/'>{item.name}</Link>
                                <span className="px-1">/</span>
                                <span>{item.date}</span>
                            </div>
                            <Link to='/' className='h6 m-0'>{item.title}</Link>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="pb-3">
            <div className="bg-light py-2 px-4 mb-3">
                <h3 className="m-0">Tags</h3>
            </div>
            <div className="d-flex flex-wrap m-n1">
                <Link className="btn btn-sm btn-outline-secondary m-1">Politics</Link>
                <Link className="btn btn-sm btn-outline-secondary m-1">Business</Link>
                <Link className="btn btn-sm btn-outline-secondary m-1">Corporate</Link>
                <Link className="btn btn-sm btn-outline-secondary m-1">Sports</Link>
                <Link className="btn btn-sm btn-outline-secondary m-1">Health</Link>
                <Link className="btn btn-sm btn-outline-secondary m-1">Education</Link>
                <Link className="btn btn-sm btn-outline-secondary m-1">Science</Link>
                <Link className="btn btn-sm btn-outline-secondary m-1">Technologies</Link>
            </div>
        </div>
    </>
  )
}

export default Popular
