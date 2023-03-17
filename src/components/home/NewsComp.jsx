import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/shones/cat18.jpg';

const NewsComp = () => {
  return (
    <>
        <div className="pb-3">
            <div className="bg-light py-2 px-4 mb-3">
                <h3 className="m-0">Newsletter</h3>
            </div>
            <div className="bg-light text-center p-4 mb-3">
                <p>Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd</p>
                <div className="input-group" style={{width: '100%'}}>
                    <input type="text" placeholder='Your Email' className="form-control outline-none form-control-lg" />
                    <div className="input-group-append">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                </div>
                <small>Sit eirmod nonumy kasd eirmod.</small>
            </div>
        </div>
        <div className="mb-3 pb-3">
            <Link to='/'>
                <img src={img} alt="/" className='img-fluid' />
            </Link>
        </div>
    </>
  )
}

export default NewsComp
