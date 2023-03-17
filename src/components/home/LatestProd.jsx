import React from 'react'
import { Link } from 'react-router-dom'
import SocialFile from './SocialFile';
import img from '../../assets/shones/cat1.jpg';
import Poplar from './penfold/Poplar';
import Latst from './penfold/Latst';
// this is for Popular Data

import imgPop from '../../assets/shones/cat.jpg'; 
import imgPop1 from '../../assets/shones/cat2.jpg'; 
import imgPop2 from '../../assets/shones/cat3.jpg'; 
import imgPop3 from '../../assets/shones/cat4.jpg'; 
import imgPop4 from '../../assets/shones/cat5.jpg'; 
import imgPop5 from '../../assets/shones/cat6.jpg'; 
import imgPop6 from '../../assets/shones/cat7.jpg';

// this is for Latest Data

import imgLat from '../../assets/shones/cat9.jpg';
import imgLat1 from '../../assets/shones/cat10.jpg';
import imgLat2 from '../../assets/shones/cat11.jpg';
import imgLat3 from '../../assets/shones/cat12.jpg';
import imgLat4 from '../../assets/shones/cat13.jpg';
import imgLat5 from '../../assets/shones/cat14.jpg';
import imgLat6 from '../../assets/shones/cat15.jpg';
// import imgLat7 from '../../assets/shones/cat16.jpg';

const popularData = [
    {
        imgUrl: imgPop,
        name: 'Technology',
        title: 'Sit eirmod nonumy kasd eirmod',
        desc: 'Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd',
        date: 'May 01, 2022',
    },
    {
        imgUrl: imgPop1,
        name: 'Technology',
        title: 'Sit eirmod nonumy kasd eirmod',
        desc: 'Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd',
        date: 'May 01, 2022',
    },
    {
        imgUrl: imgPop2,
        name: 'Technology',
        title: 'Sit eirmod nonumy kasd eirmod',
        desc: 'Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd',
        date: 'May 01, 2022',
    },
    {
        imgUrl: imgPop3,
        name: 'Technology',
        title: 'Sit eirmod nonumy kasd eirmod',
        desc: 'Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd',
        date: 'May 01, 2022',
    },
    {
        imgUrl: imgPop4,
        name: 'Technology',
        title: 'Sit eirmod nonumy kasd eirmod',
        desc: 'Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd',
        date: 'May 01, 2022',
    },
    {
        imgUrl: imgPop5,
        name: 'Technology',
        title: 'Sit eirmod nonumy kasd eirmod',
        desc: 'Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd',
        date: 'May 01, 2022',
    },
    {
        imgUrl: imgPop6,
        name: 'Technology',
        title: 'Sit eirmod nonumy kasd eirmod',
        desc: 'Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd',
        date: 'May 01, 2022',
    },
]
const latestData = [
    {
        imgUrl: imgLat,
        name: 'Technology',
        title: 'Sit eirmod nonumy kasd eirmod',
        desc: 'Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd',
        date: 'May 01, 2022',
    },
    {
        imgUrl: imgLat1,
        name: 'Technology',
        title: 'Sit eirmod nonumy kasd eirmod',
        desc: 'Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd',
        date: 'May 01, 2022',
    },
    {
        imgUrl: imgLat2,
        name: 'Technology',
        title: 'Sit eirmod nonumy kasd eirmod',
        desc: 'Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd',
        date: 'May 01, 2022',
    },
    {
        imgUrl: imgLat3,
        name: 'Technology',
        title: 'Sit eirmod nonumy kasd eirmod',
        desc: 'Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd',
        date: 'May 01, 2022',
    },
    {
        imgUrl: imgLat4,
        name: 'Technology',
        title: 'Sit eirmod nonumy kasd eirmod',
        desc: 'Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd',
        date: 'May 01, 2022',
    },
    {
        imgUrl: imgLat5,
        name: 'Technology',
        title: 'Sit eirmod nonumy kasd eirmod',
        desc: 'Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd',
        date: 'May 01, 2022',
    },
    {
        imgUrl: imgLat6,
        name: 'Technology',
        title: 'Sit eirmod nonumy kasd eirmod',
        desc: 'Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd',
        date: 'May 01, 2022',
    },
]

const LatestProd = () => {
  return (
    <div>
        <div className="container-fluid py-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">

                        <Poplar popularData={popularData} />

                        <div className="mb-3 pb-3">
                            <Link to='/'>
                                <img src={img} alt="/" className="img-fluid" />
                            </Link>
                        </div>

                        <Latst latestData={latestData} />

                    </div>
                    <SocialFile />
                </div>
            </div>
        </div>
    </div>
  )
}

export default LatestProd
