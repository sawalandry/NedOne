import React from 'react'
import { Link } from 'react-router-dom'

const Latst = ({ latestData }) => {
  return (
    <div>
        <div className="row">
            <div className="col-12">
                <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                    <h3 className="m-0">Latest</h3>
                    <Link className="text-secondary font-weight-medium text-decoration-none" to='/categories'>View All...</Link>
                </div>
            </div>
            
            {
                latestData.map((item, index) => (
                    <div className="col-lg-6" key={index}>
                        <div className="d-flex mb-3">
                            <img src={item.imgUrl} style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt="/" />
                            <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{ height: '100px' }}>
                                <div className="mb-1" style={{fontSize: '13px'}}>
                                    <Link to='/'>Technology</Link>
                                    <span className="px-1">/</span>
                                    <span>May 01, 2022</span>
                                </div>
                                <Link to='/'>Rebum dolore duo et vero ipsum clita,lorem amet vero eos sed sit...</Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Latst
