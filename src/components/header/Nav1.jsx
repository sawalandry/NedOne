import React from 'react'
import { Link } from 'react-router-dom';
import img from '../../assets/shones/cat-500x80-2.jpg';

const Nav1 = ({ carouselData }) => {
  return (
    <>
      <div className="container-fluid">
            <div className="row align-items-center bg-light px-lg-5">
                <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-between">
                        <div className="bg-primary text-white text-center py-2" style={{width: '100px'}}>
                            Trading
                        </div>
                        <div 
                            className="owl-carousel owl-carousel-1 trading-carousel position-relative d-inline-flex align-items-center ml-3"
                            style={{width: 'calc(100% - 100px)', paddingLeft: '90px'}}
                        >
                            {
                                carouselData.map((carous, index) =>(
                                    <div className="text-truncate" key={index}>
                                        <Link to={carous.url} className='text-secondary'>{carous.phrase}</Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-right d-none d-md-block">
                    Monday, February, 2023
                </div>
            </div>
            <div className="row align-items-center py-2 px-lg-5">
                <div className="col-lg-4">
                    <Link className="navbar-brand d-none d-lg-block" to='/'>
                        <h1 className="m-0 display-5 text-uppercase">
                            <span className="text-primary">NeD</span>oNe
                        </h1>
                    </Link>
                </div>
                <div className="col-lg-8 text-center text-lg-right">
                    <img src={img} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Nav1
