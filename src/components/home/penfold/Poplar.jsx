import React from 'react'
import { Link } from 'react-router-dom'

const Poplar = ({ popularData }) => {
  return (
    <div>
        <div className="row mb-3">
            <div className="col-12">
                <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                    <h3 className="m-0">Popular</h3>
                    <Link className="text-secondary font-weight-medium text-decoration-none" to='/categories'>View All...</Link>
                </div>
            </div>
            {
                popularData.map((item, index) => (
                    <div className="col-lg-6" key={index}>
                        <div className="d-flex mb-3">
                            <img src={item.imgUrl} style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt="/" />
                            <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{ height: '100px' }}>
                                <div className="mb-1" style={{fontSize: '13px'}}>
                                    <Link to='/'>{item.name}</Link>
                                    <span className="px-1">/</span>
                                    <span>{item.date}</span>
                                </div>
                                <Link to='/'>{item.title}</Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Poplar
