import React from 'react';
import { Link } from 'react-router-dom';
import NewsComp from './NewsComp';
import Popular from './Popular';

// const socialData = [
//     {
//         fans: '10, 345 Fans',
//         color: '#39569e',
//         url: '/',
//     },
//     {
//         fans: '10, 345 Followers',
//         color: '#52aaf4',
//         url: '/',
//     },
//     {
//         fans: '10, 345 Connects',
//         color: '#0185ae',
//         url: '/',
//     },
//     {
//         fans: '10, 345 Subscribers',
//         color: '#c8359d',
//         url: '/',
//     },
//     {
//         fans: '10, 345 Followers',
//         color: '#1ab7ea',
//         url: '/',
//     },
//     {
//         fans: '10, 345 Fans',
//         color: '#dc472e',
//         url: '/',
//     },
// ]

const SocialFile = () => {
  return (
    <>
        <div className="col-lg-4 pt-3 pt-lg-0">
            <div className="pb-3">
                <div className="bg-light py-2 px-4 mb-3">
                    <h3 className="m-0">Follow Us</h3>
                </div>
                <div className="d-flex mb-3">
                    <Link className="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2" to='/' style={{background: "#39569e"}}>
                        <small className="ri-facebook-fill mr-2"></small><small>10,345 Followers</small>
                    </Link>
                    <Link className="d-block w-50 py-2 px-3 text-white text-decoration-none ml-2" to='/' style={{background: "#52AAF4"}}>
                        <small className="ri-twitter-fill mr-2"></small><small>10,345 Fans</small>
                    </Link>
                </div>
                <div className="d-flex mb-3">
                    <Link className="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2" to='/' style={{background: "#0185ae"}}>
                        <small className="ri-instagram-fill mr-2"></small><small>10,345 Connects</small>
                    </Link>
                    <Link className="d-block w-50 py-2 px-3 text-white text-decoration-none ml-2" to='/' style={{background: "#c8359d"}}>
                        <small className="ri-vimeo-fill mr-2"></small><small>10,345 Fans</small>
                    </Link>
                </div>
                <div className="d-flex mb-3">
                    <Link className="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2" to='/' style={{background: "#1ab7ea"}}>
                        <small className="ri-linkedin-fill mr-2"></small><small>10,345 Subscribers</small>
                    </Link>
                    <Link className="d-block w-50 py-2 px-3 text-white text-decoration-none ml-2" to='/' style={{background: "#dc472e"}}>
                        <small className="ri-youtube-fill mr-2"></small><small>10,345 Fans</small>
                    </Link>
                </div>
            </div>
            <NewsComp />
            <Popular />
        </div>
    </>
  )
}

export default SocialFile
