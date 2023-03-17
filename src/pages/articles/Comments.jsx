import React from 'react';
import img from '../../assets/shones/user.jpg';
import img1 from '../../assets/shones/cat5.jpg';
import img2 from '../../assets/shones/cat6.jpg';
import { Link } from 'react-router-dom';

const Comments = () => {
  return (
    <>
        <div className="media mb-4">
            <img src={img} alt="" className="img-fluid mr-3 mt-1" style={{width: '45px', borderRadius: '50%'}} />
            <div className="media-body">
                <h6>
                    <Link to='/user'>Marc Pi </Link> 
                    <small>
                        <i>Feb 28, 2023</i>
                    </small>
                </h6>
                <p>
                    Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                    accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
                    Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                    consetetur at sit
                </p>
                <button className="btn btn-sm btn-outline-secondary">Reply</button>
                <button className="btn btn-sm btn-outline-secondary ml-2"><i className='ri-heart-line'></i></button>
                <div className="media m-4">
                    <img src={img1} alt="/" className="img-fluid mr-3 mt-1" style={{width: '30px', borderRadius: '50%'}}/>
                    <div className="media-body">
                        <h6>
                            <Link to='/user'>
                                Peter Remy
                            </Link>
                            <small><i> 3mins</i></small>
                        </h6>
                        <p>
                        Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor
                        labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed
                        eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet
                        ipsum diam tempor consetetur at
                        </p>
                        <button className="btn btn-sm btn-outline-secondary">Reply</button>
                        <button className="btn btn-sm btn-outline-secondary ml-2"><i className="ri-heart-line"></i></button>
                        <div className="media mt-4">
                            <img src={img2} alt="/" className="img-fluid mr-3 mt-1" style={{width: '25px', borderRadius: '50%'}} />
                            <div className="media-body">
                                <h6>
                                    <Link to='/user'>
                                        John Doe
                                    </Link>
                                    <small><i> 1min</i></small>
                                </h6>
                                <p>
                                    Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor
                                    labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed
                                    eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet
                                    ipsum diam tempor consetetur at sit.
                                </p>
                                <button className="btn btn-sm btn-outline-secondary">Reply</button>
                                <button className="btn btn-sm btn-outline-secondary ml-2"><i className="ri-heart-line"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Comments
