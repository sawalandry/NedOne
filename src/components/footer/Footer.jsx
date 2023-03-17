import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-light pt-5 px-sm-3 px-md-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-5">
            <Link className="navbar-brand">
              <h1 className="mb-2 mt-2 display-5 text-uppercase">
                <span className="text-primary">
                  Ned
                </span>
                one
              </h1>
            </Link>
            <p>Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elitr sed kasd et.</p>
            <div className="d-flex justify-content-start mt-4">
              <Link className="btn btn-outline-secondary text-center mr-2 px-0" to='/' style={{width: '38px', height: '38px'}}>
                <i className="ri-facebook-fill"></i>
              </Link>
              <Link className="btn btn-outline-secondary text-center mr-2 px-0" to='/' style={{width: '38px', height: '38px'}}>
                <i className="ri-twitter-fill"></i>
              </Link>
              <Link className="btn btn-outline-secondary text-center mr-2 px-0" to='/' style={{width: '38px', height: '38px'}}>
                <i className="ri-instagram-fill"></i>
              </Link>
              <Link className="btn btn-outline-secondary text-center mr-2 px-0" to='/' style={{width: '38px', height: '38px'}}>
                <i className="ri-linkedin-fill"></i>
              </Link>
              <Link className="btn btn-outline-secondary text-center mr-2 px-0" to='/' style={{width: '38px', height: '38px'}}>
                <i className="ri-youtube-fill"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="font-weight-bold mb-4">Categories</h4>
            <div className="d-flex flex-wrap m-n1">
              <Link className="btn btn-sm btn-outline-secondary m-1" to='/categories'>Politics</Link>
              <Link className="btn btn-sm btn-outline-secondary m-1" to='/categories'>Business</Link>
              <Link className="btn btn-sm btn-outline-secondary m-1" to='/categories'>Corporate</Link>
              <Link className="btn btn-sm btn-outline-secondary m-1" to='/categories'>Sports</Link>
              <Link className="btn btn-sm btn-outline-secondary m-1" to='/categories'>Health</Link>
              <Link className="btn btn-sm btn-outline-secondary m-1" to='/categories'>Education</Link>
              <Link className="btn btn-sm btn-outline-secondary m-1" to='/categories'>Science</Link>
              <Link className="btn btn-sm btn-outline-secondary m-1" to='/categories'>Technologies</Link>
              <Link className="btn btn-sm btn-outline-secondary m-1" to='/categories'>Entertainment</Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="font-weight-bold mb-4">Tags</h4>
            <div className="d-flex flex-wrap m-n1">
              <Link className="btn btn-sm btn-outline-secondary m-1" to='/categories'>Politics</Link>
              <Link className="btn btn-sm btn-outline-secondary m-1" to='/categories'>Business</Link>
              <Link className="btn btn-sm btn-outline-secondary m-1" to='/categories'>Corporate</Link>
              <Link className="btn btn-sm btn-outline-secondary m-1" to='/categories'>Sports</Link>
              <Link className="btn btn-sm btn-outline-secondary m-1" to='/categories'>Health</Link>
              <Link className="btn btn-sm btn-outline-secondary m-1" to='/categories'>Education</Link>
              <Link className="btn btn-sm btn-outline-secondary m-1" to='/categories'>Science</Link>
              <Link className="btn btn-sm btn-outline-secondary m-1" to='/categories'>Technologies</Link>
              <Link className="btn btn-sm btn-outline-secondary m-1" to='/categories'>Entertainment</Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="font-weight-bold mb-4">Quick Links</h4>
            <div className="d-flex flex-column justify-content-start">
              <Link className="text-secondary mb-2" to='/'>
                <i className="ri-angle-fill text-dark mr-2"></i>
                About
              </Link>
              <Link className="text-secondary mb-2" to='/'>
                <i className="ri-angle-fill text-dark mr-2"></i>
                Advertise
              </Link>
              <Link className="text-secondary mb-2" to='/'>
                <i className="ri-angle-fill text-dark mr-2"></i>
                Privacy & Policy
              </Link>
              <Link className="text-secondary mb-2" to='/'>
                <i className="ri-angle-fill text-dark mr-2"></i>
                Terms & Conditions
              </Link>
              <Link className="text-secondary mb-2" to='/'>
                <i className="ri-angle-fill text-dark mr-2"></i>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-4 px-sm-3 px-md-5">
        <p className="m-0 text-center">&copy; <Link to='/' className='font-weight-bold'>Nedone</Link> All right reserved.
          Designed by <Link to='https://sawajr.netlify.app' className='font-weight-bold'>SawaJr.</Link>
        </p>
      </div>
    </>
  )
}

export default Footer
